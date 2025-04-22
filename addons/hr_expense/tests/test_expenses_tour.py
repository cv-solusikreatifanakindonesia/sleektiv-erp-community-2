# Part of Sleektiv. See LICENSE file for full copyright and licensing details.
from sleektiv.tests import tagged, HttpCase


@tagged('post_install', '-at_install')
class TestExpensesTour(HttpCase):
    def test_tour_expenses(self):
        self.start_tour("/sleektiv", "hr_expense_test_tour", login="admin")
