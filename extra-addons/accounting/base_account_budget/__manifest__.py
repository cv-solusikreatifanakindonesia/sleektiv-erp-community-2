# -*- coding: utf-8 -*-
#############################################################################
#
#    Cybrosys Technologies Pvt. Ltd.
#
#    Copyright (C) 2024-2025 Cybrosys Technologies(<https://www.cybrosys.com>)
#    Author: Cybrosys Techno Solutions(<https://www.cybrosys.com>)
#
#    CV. SOLUSI KREATIF ANAK INDONESIA.
#
#    Copyright (C) 20245 CV. SOLUSI KREATIF ANAK INDONESIA (<https://www.solusikreatifanakindonesia.com>)
#    Author: CV. SOLUSI KREATIF ANAK INDONESIA (<https://www.solusikreatifanakindonesia.com>)
#
#    You can modify it under the terms of the GNU LESSER
#    GENERAL PUBLIC LICENSE (LGPL v3), Version 3.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU LESSER GENERAL PUBLIC LICENSE (LGPL v3) for more details.
#
#    You should have received a copy of the GNU LESSER GENERAL PUBLIC LICENSE
#    (LGPL v3) along with this program.
#    If not, see <http://www.gnu.org/licenses/>.
#
#############################################################################
{
    'name': 'Sleektiv ERP COomunity Version 2 Budget Management',
    'version': '18.0.1.0.0',
    'category': 'Accounting',
    'summary': """ Budget Management for Sleektiv ERP Community Version 2. """,
    'description': """ This module allows accountants to manage analytic and 
    budgets. Once the Budgets are defined (in Accounting/Accounting/Budgets),
    the Project Managers can set the planned amount on each Analytic Account.
    The accountant has the possibility to see the total of amount planned for
    each Budget in order to ensure the total planned is not greater/lower 
    than what he planned for this Budget. Each list of record can also be 
    switched to a graphical view of it.""",
    "author": "Cybrosys Techno Solutions, CV. SOLUSI KREATIF ANAK INDONESIA",
    "company": "CV. SOLUSI KREATIF ANAK INDONESIA",
    "maintainer": "CV. SOLUSI KREATIF ANAK INDONESIA",
    "website": "https://www.solusikreatifanakindonesia.com",
    'depends': ['base', 'account'],
    'data': [
        'security/account_budget_security.xml',
        'security/ir.model.access.csv',
        'views/account_analytic_account_views.xml',
        'views/account_budget_views.xml',
    ],
    'post_init_hook': 'enable_analytic_accounting',
    'images': ['static/description/banner.png'],
    'license': 'LGPL-3',
    'installable': True,
    'auto_install': False,
    'application': False,
}
