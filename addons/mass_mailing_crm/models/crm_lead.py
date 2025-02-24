# -*- coding: utf-8 -*-
# Part of Sleektiv. See LICENSE file for full copyright and licensing details.

from sleektiv import models


class CrmLead(models.Model):
    _inherit = 'crm.lead'
    _mailing_enabled = True
