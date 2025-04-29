# -*- coding: utf-8 -*-
#############################################################################
#
#    Cybrosys Technologies Pvt. Ltd.
#
#    Copyright (C) 2024-2025 Cybrosys Technologies(<https://www.cybrosys.com>)
#    Author: Swaraj R (odoo@cybrosys.com)
#
#    CV. SOLUSI KREATIF ANAK INDONESIA
#
#    Copyright (C) 2025-TODAY Sleektiv (<https://www.solusikreatifanakindonesia.com>)
#    Author: Sleektiv (info@solusikreatifanakindonesia.com)
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
    "name": "Sleektiv Default Theme",
    "version": "18.0.1.0.0",
    "category": "Themes/Backend",
    "summary": "Sleektiv Default Theme is an attractive theme for backend",
    "description": """Minimalist and elegant theme for Sleektiv backend""",
    "author": "Cybrosys Techno Solutions, CV. SOLUSI KREATIF ANAK INDONESIA",
    "company": "CV. SOLUSI KREATIF ANAK INDONESIA",
    "maintainer": "CV. SOLUSI KREATIF ANAK INDONESIA",
    "website": "https://www.solusikreatifanakindonesia.com",
    "depends": ["base_setup", "web", "mail"],
    "data": [
        "views/layout_templates.xml",
        "views/base_menus.xml",
    ],
    "assets": {
        "web.assets_backend": [
            "sleektiv_default_theme/static/src/xml/settings_templates.xml",
            "sleektiv_default_theme/static/src/xml/top_bar_templates.xml",
            "sleektiv_default_theme/static/src/scss/theme_accent.scss",
            "sleektiv_default_theme/static/src/scss/navigation_bar.scss",
            "sleektiv_default_theme/static/src/scss/datetimepicker.scss",
            "sleektiv_default_theme/static/src/scss/theme.scss",
            "sleektiv_default_theme/static/src/scss/sidebar.scss",
            "sleektiv_default_theme/static/src/js/fields/colors.js",
            'sleektiv_default_theme/static/src/js/web_navbar_appmenu'
            '/webNavbarAppMenu.js',
        ],
        "web.assets_frontend": [
            "sleektiv_default_theme/static/src/scss/login.scss",
        ],
    },
    "images": [
        "static/description/banner.jpg",
        "static/description/theme_screenshot.jpg",
    ],
    "license": "LGPL-3",
    "installable": True,
    "auto_install": True,  # Aktifkan auto install
    "application": False,
    "pre_init_hook": "test_pre_init_hook",
    "post_init_hook": "test_post_init_hook",
}
