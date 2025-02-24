/* @sleektiv-module */

import { Component } from "@sleektiv/owl";

export class SnailmailNotificationPopover extends Component {
    static template = "snailmail.SnailmailNotificationPopover";
    static props = ["message", "close?"];
}
