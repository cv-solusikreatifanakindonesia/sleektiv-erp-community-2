# -*- coding: utf-8 -*-
# Part of Sleektiv. See LICENSE file for full copyright and licensing details.

from sleektiv import models, fields


class AccountMove(models.Model):
    _inherit = 'account.move'

    l10n_rs_turnover_date = fields.Date(string='Turnover Date')
