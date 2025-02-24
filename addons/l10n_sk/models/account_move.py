# Part of Sleektiv. See LICENSE file for full copyright and licensing details.
from sleektiv import models, fields


class AccountMove(models.Model):
    _inherit = 'account.move'

    taxable_supply_date = fields.Date()
