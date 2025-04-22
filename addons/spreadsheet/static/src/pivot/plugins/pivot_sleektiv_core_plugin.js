/** @sleektiv-module */
// @ts-check

import { Domain } from "@web/core/domain";
import { SleektivCorePlugin } from "@spreadsheet/plugins";

export class PivotSleektivCorePlugin extends SleektivCorePlugin {
    handle(cmd) {
        switch (cmd.type) {
            // this command is deprecated. use UPDATE_PIVOT instead
            case "UPDATE_SLEEKTIV_PIVOT_DOMAIN":
                this.dispatch("UPDATE_PIVOT", {
                    pivotId: cmd.pivotId,
                    pivot: {
                        ...this.getters.getPivotCoreDefinition(cmd.pivotId),
                        domain: cmd.domain,
                    },
                });
                break;
        }
    }

    /**
     * Transform the domain of a pivot definition to a more readable format
     *
     * @param {Object} data
     */
    export(data) {
        if (data.pivots) {
            for (const id in data.pivots) {
                if (data.pivots[id].type === "SLEEKTIV") {
                    data.pivots[id].domain = new Domain(data.pivots[id].domain).toJson();
                }
            }
        }
    }
}
