# Part of Sleektiv. See LICENSE file for full copyright and licensing details.

from sleektiv import fields, models


class StockPicking(models.Model):
    _inherit = 'stock.picking'

    project_id = fields.Many2one('project.project')
