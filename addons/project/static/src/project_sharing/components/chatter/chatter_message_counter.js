/** @sleektiv-module */

import { Component } from "@sleektiv/owl";

export class ChatterMessageCounter extends Component {
    static template = "project.ChatterMessageCounter";
    static props = {
        count: Number,
    };
}
