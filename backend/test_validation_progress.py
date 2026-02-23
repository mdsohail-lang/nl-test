import os
import sys
import unittest


CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))
if CURRENT_DIR not in sys.path:
    sys.path.insert(0, CURRENT_DIR)

import worker  # noqa: E402


class ValidationIntentTests(unittest.TestCase):
    def test_parse_validate_against_strips_location_noise(self):
        intent = worker.parse_validation_intent(
            "Validate 1,785 against Total Rows at the bottom left of the page"
        )
        self.assertEqual(intent["expected"], "1,785")
        self.assertEqual(intent["anchor"], "Total Rows")

    def test_parse_verify_is_pattern(self):
        intent = worker.parse_validation_intent("Verify Total Rows is 1,785")
        self.assertEqual(intent["expected"], "1,785")
        self.assertEqual(intent["anchor"], "Total Rows")

    def test_numeric_tolerant_match(self):
        ok, matched_by = worker._match_expected_text("Total Rows : 1,785", "1785")
        self.assertTrue(ok)
        self.assertEqual(matched_by, "numeric")

    def test_anchor_proximity_numeric_match(self):
        ok, matched_by = worker._match_anchor_proximity(
            "Selected: 0 | Total Rows : 1,785 | Filters: 0",
            "Total Rows",
            "1785",
        )
        self.assertTrue(ok)
        self.assertEqual(matched_by, "anchor-proximity-numeric")


class ProgressAggregationTests(unittest.TestCase):
    def test_top_level_summary_ignores_navigate_and_collapses_substeps(self):
        results = [
            {"step": "navigate", "ok": True, "url": "https://example.com"},
            {"step": 0, "description": "sub-a", "action": "click", "ok": True},
            {"step": 0, "description": "sub-b", "action": "click", "ok": True},
            {"step": 1, "description": "validate", "action": "validate", "ok": False, "error": "bad"},
        ]
        summary = worker.summarize_top_level_steps(results)
        self.assertEqual(summary["completedStepCount"], 1)
        self.assertEqual(summary["failedStepCount"], 1)
        self.assertEqual(summary["executedStepCount"], 2)
        self.assertEqual(summary["completedSteps"][0]["step"], 0)
        self.assertEqual(summary["failedSteps"][0]["step"], 1)

    def test_progress_payload_exposes_new_fields(self):
        results = [
            {"step": 0, "description": "Click A", "action": "click", "ok": True},
            {"step": 1, "description": "Click B", "action": "click", "ok": False, "error": "x"},
        ]
        payload = worker.build_progress_payload(
            "job-1",
            results,
            current_step_index=1,
            total_steps=4,
            current_description="Click B",
            status="running",
        )
        self.assertIn("currentStepIndex", payload)
        self.assertIn("completedStepCount", payload)
        self.assertIn("failedStepCount", payload)
        self.assertIn("executedStepCount", payload)
        self.assertIn("status", payload)
        self.assertEqual(payload["completedStepCount"], 1)
        self.assertEqual(payload["failedStepCount"], 1)
        self.assertEqual(payload["executedStepCount"], 2)


class FailurePolicyTests(unittest.TestCase):
    def test_validate_is_non_blocking(self):
        self.assertTrue(worker.is_non_blocking_action("validate"))
        self.assertFalse(worker.is_blocking_failure("validate"))

    def test_click_is_blocking(self):
        self.assertFalse(worker.is_non_blocking_action("click"))
        self.assertTrue(worker.is_blocking_failure("click"))


if __name__ == "__main__":
    unittest.main()
