import os
import sys
import unittest


CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))
if CURRENT_DIR not in sys.path:
    sys.path.insert(0, CURRENT_DIR)

import worker  # noqa: E402


def _item(label):
    return {
        'label_raw': label,
        'label_normalized': worker.normalize_sidebar_text(label),
        'is_visible': True,
        'has_expand_icon': False,
        'click_xpath': None,
    }


class SidebarNormalizationTests(unittest.TestCase):
    def test_normalize_configure_dropdown(self):
        self.assertEqual(
            worker.normalize_sidebar_text('Click on the Configure dropdown'),
            'configure'
        )

    def test_normalize_ampersand_entities(self):
        self.assertEqual(
            worker.normalize_sidebar_text('Challenge & Solicitation'),
            'challenge solicitation'
        )
        self.assertEqual(
            worker.normalize_sidebar_text('Challenge &amp; Solicitation'),
            'challenge solicitation'
        )

    def test_extract_sidebar_target(self):
        info = worker.extract_sidebar_target('Click on the Configure dropdown')
        self.assertTrue(info['is_sidebar_candidate'])
        self.assertEqual(info['normalized_target'], 'configure')


class SidebarMatchTests(unittest.TestCase):
    def test_exact_normalized_match(self):
        items = [_item('Configure'), _item('Reports')]
        result = worker.match_sidebar_item('Click on the Configure dropdown', items)
        self.assertTrue(result['ok'])
        self.assertEqual(result['matchTier'], 'exact-normalized')
        self.assertEqual(result['candidate']['label_raw'], 'Configure')

    def test_token_overlap_match(self):
        items = [_item('Private Credit Dashboard'), _item('Reports')]
        result = worker.match_sidebar_item('private dashboard credit', items)
        self.assertTrue(result['ok'])
        self.assertEqual(result['matchTier'], 'token-overlap')
        self.assertEqual(result['candidate']['label_raw'], 'Private Credit Dashboard')

    def test_fuzzy_match(self):
        items = [_item('Valuation Sandbox'), _item('Reports')]
        result = worker.match_sidebar_item('valution sandbox', items)
        self.assertTrue(result['ok'])
        self.assertEqual(result['matchTier'], 'fuzzy')
        self.assertEqual(result['candidate']['label_raw'], 'Valuation Sandbox')

    def test_ambiguous_match(self):
        items = [_item('Task Status'), _item('Task Setup')]
        result = worker.match_sidebar_item('task', items)
        self.assertFalse(result['ok'])
        self.assertEqual(result['status'], 'ambiguous')
        self.assertGreaterEqual(len(result.get('topCandidates', [])), 2)

    def test_no_match(self):
        items = [_item('Reports'), _item('Configure')]
        result = worker.match_sidebar_item('non existent section', items)
        self.assertFalse(result['ok'])
        self.assertEqual(result['status'], 'no_match')

    def test_contains_low_score_does_not_false_match(self):
        items = [_item('Configure')]
        result = worker.match_sidebar_item(
            'Select Configure and Click on Data Sources and Click on Pricing Data Source',
            items
        )
        self.assertFalse(result['ok'])
        self.assertEqual(result['status'], 'no_match')


class SidebarMenuIconSelectionTests(unittest.TestCase):
    def test_choose_visible_outside_drawer_icon(self):
        icons = [
            {'index': 0, 'is_visible': True, 'inside_drawer': True},
            {'index': 1, 'is_visible': True, 'inside_drawer': False},
        ]
        chosen = worker.choose_best_menu_icon(icons)
        self.assertIsNotNone(chosen)
        self.assertEqual(chosen['index'], 1)

    def test_xpath_generation_is_drawer_scoped(self):
        xpaths = worker.build_sidebar_click_xpaths('Challenge & Solicitation')
        self.assertTrue(xpaths)
        self.assertTrue(any('IvpLeftMenuDrawer' in xp or 'testDrawer' in xp for xp in xpaths))
        self.assertTrue(any('MuiPopper-root' in xp or 'MuiPopover-root' in xp for xp in xpaths))


class DecomposeHeuristicTests(unittest.TestCase):
    def test_multi_action_chain_is_split(self):
        step = 'Select Configure and Click on Data Sources and Click on Pricing Data Source'
        parts = worker.heuristic_decompose_step(step)
        self.assertEqual(
            parts,
            ['Select Configure', 'Click on Data Sources', 'Click on Pricing Data Source']
        )

    def test_non_chain_not_split(self):
        step = 'Click on the Next button'
        parts = worker.heuristic_decompose_step(step)
        self.assertEqual(parts, [step])


class DateDecompositionTests(unittest.TestCase):
    def test_select_date_day_month_year(self):
        steps = worker.deterministic_date_sub_steps('Select date 8 APR 2026')
        self.assertEqual(
            steps,
            ['Click on Calendar Button', 'Click on year', 'Click on 2026', 'Click on Apr', 'Click on 8']
        )

    def test_select_date_month_day_year(self):
        steps = worker.deterministic_date_sub_steps('Select date April 8, 2026')
        self.assertEqual(
            steps,
            ['Click on Calendar Button', 'Click on year', 'Click on 2026', 'Click on Apr', 'Click on 8']
        )

    def test_set_date_iso(self):
        steps = worker.deterministic_date_sub_steps('Set date 2026-04-08')
        self.assertEqual(
            steps,
            ['Click on Calendar Button', 'Click on year', 'Click on 2026', 'Click on Apr', 'Click on 8']
        )

    def test_select_date_slash_defaults_mm_dd(self):
        parsed = worker.parse_date_selection_step('Select date 04/08/2026')
        self.assertIsNotNone(parsed)
        self.assertEqual(parsed['year'], 2026)
        self.assertEqual(parsed['month'], 4)
        self.assertEqual(parsed['day'], 8)
        self.assertEqual(parsed['month_short'], 'Apr')

    def test_select_date_slash_fallback_dd_mm_when_mm_dd_invalid(self):
        parsed = worker.parse_date_selection_step('Select date 13/04/2026')
        self.assertIsNotNone(parsed)
        self.assertEqual(parsed['year'], 2026)
        self.assertEqual(parsed['month'], 4)
        self.assertEqual(parsed['day'], 13)
        self.assertEqual(parsed['month_short'], 'Apr')

    def test_invalid_date_returns_none(self):
        self.assertIsNone(worker.parse_date_selection_step('Select date 31/02/2026'))
        self.assertIsNone(worker.parse_date_selection_step('Click on Reports'))


class CalendarTargetExtractionTests(unittest.TestCase):
    def test_extract_calendar_day_target_valid(self):
        self.assertEqual(worker.extract_calendar_day_target('Click on 8'), 8)
        self.assertEqual(worker.extract_calendar_day_target('Select 8'), 8)

    def test_extract_calendar_day_target_invalid(self):
        self.assertIsNone(worker.extract_calendar_day_target('Click on 32'))
        self.assertIsNone(worker.extract_calendar_day_target('Click on 2026'))

    def test_calendar_day_xpath_generation_scoped_and_in_month_first(self):
        xpaths = worker.build_calendar_day_xpaths(8)
        self.assertGreaterEqual(len(xpaths), 2)
        self.assertIn("//div[@role='dialog']//div[contains(@class,'MuiDateCalendar-root')]", xpaths[0])
        self.assertIn("@role='gridcell'", xpaths[0])
        self.assertIn("not(contains(@class,'MuiPickersDay-dayOutsideMonth'))", xpaths[0])
        self.assertIn("normalize-space(.)='8'", xpaths[0])


if __name__ == '__main__':
    unittest.main()
