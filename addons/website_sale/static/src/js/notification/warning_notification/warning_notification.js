/** @sleektiv-module **/

import { Component } from "@sleektiv/owl";

export class WarningNotification extends Component {
    static template = "website_sale.warningNotification";
    static props = {
        warning: [String, { toString: Function }],
    }
}
