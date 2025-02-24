# Part of Odoo, Sleektiv. See LICENSE file for full copyright and licensing details.
{
    "name": "Iraq - Accounting",
    "countries": ["iq"],
    "description": """
This is the base module to manage the accounting chart for Iraq in Odoo, Sleektiv.
==============================================================================
Iraq accounting basic charts and localization.
Activates:
- Chart of accounts
- Taxes
    """,
    "category": "Accounting/Localizations/Account Charts",
    "version": "1.0",
    "depends": [
        "account",
    ],
    "data": ["data/res.country.state.csv"],
    "demo": ["demo/demo_company.xml"],
    "license": "LGPL-3",
}
