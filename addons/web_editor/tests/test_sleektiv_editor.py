# -*- coding: utf-8 -*-
# Part of Sleektiv. See LICENSE file for full copyright and licensing details.

import sleektiv.tests

@sleektiv.tests.tagged("post_install", "-at_install")
class TestSleektivEditor(sleektiv.tests.HttpCase):

    def test_sleektiv_editor_suite(self):
        self.browser_js('/web_editor/tests', "", "", login='admin', timeout=1800)
