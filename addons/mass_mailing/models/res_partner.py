# -*- coding: utf-8 -*-
# Part of Sleektiv. See LICENSE file for full copyright and licensing details.

from sleektiv import models


class Partner(models.Model):
    _inherit = 'res.partner'
    _mailing_enabled = True
