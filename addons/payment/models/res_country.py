# Part of Sleektiv. See LICENSE file for full copyright and licensing details.

from sleektiv import api, fields, models
import sleektiv.addons.payment_stripe as stripe  # prevent circular import error with payment_stripe


class ResCountry(models.Model):
    _inherit = 'res.country'

    is_stripe_supported_country = fields.Boolean(compute='_compute_is_stripe_supported_country')

    @api.depends('code')
    def _compute_is_stripe_supported_country(self):
        for country in self:
            country.is_stripe_supported_country = stripe.const.COUNTRY_MAPPING.get(
                country.code, country.code
            ) in stripe.const.SUPPORTED_COUNTRIES
