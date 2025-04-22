# Part of Sleektiv. See LICENSE file for full copyright and licensing details.

from sleektiv import fields, models


class PaymentToken(models.Model):
    _inherit = 'payment.token'

    flutterwave_customer_email = fields.Char(
        help="The email of the customer at the time the token was created.", readonly=True
    )
