# -*- coding: utf-8 -*-
# Part of Sleektiv. See LICENSE file for full copyright and licensing details.

from sleektiv import models, fields


class BarcodeRule(models.Model):
    _inherit = 'barcode.rule'

    type = fields.Selection(selection_add=[('coupon', 'Coupon')], ondelete={'coupon': 'set default'})
