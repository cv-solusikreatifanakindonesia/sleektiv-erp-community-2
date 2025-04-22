# Part of Sleektiv. See LICENSE file for full copyright and licensing details.

from sleektiv import fields, models


class PurchaseOrder(models.Model):
    _inherit = 'purchase.order'

    project_id = fields.Many2one('project.project')
