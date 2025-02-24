# Part of Sleektiv. See LICENSE file for full copyright and licensing details.

from sleektiv.addons.account.tests.common import AccountTestInvoicingCommon
from sleektiv.tests.common import tagged, HttpCase


@tagged('post_install', '-at_install')
class TestUi(AccountTestInvoicingCommon, HttpCase):

    def test_01_sale_tour(self):
        self.env['res.partner'].create({'name': 'Agrolait', 'email': 'agro@lait.be'})
        self.start_tour("/sleektiv", 'sale_tour', login="admin")
