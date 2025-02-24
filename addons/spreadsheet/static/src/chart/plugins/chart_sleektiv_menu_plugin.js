/** @sleektiv-module */

import { SleektivCorePlugin } from "@spreadsheet/plugins";
import { coreTypes, helpers } from "@sleektiv/o-spreadsheet";
import { omit } from "@web/core/utils/objects";
const { deepEquals } = helpers;

/** Plugin that link charts with Sleektiv menus. It can contain either the Id of the sleektiv menu, or its xml id. */
export class ChartSleektivMenuPlugin extends SleektivCorePlugin {
    static getters = /** @type {const} */ (["getChartSleektivMenu"]);
    constructor(config) {
        super(config);
        this.sleektivMenuReference = {};
    }

    /**
     * Handle a spreadsheet command
     * @param {Object} cmd Command
     */
    handle(cmd) {
        switch (cmd.type) {
            case "LINK_SLEEKTIV_MENU_TO_CHART":
                this.history.update("sleektivMenuReference", cmd.chartId, cmd.sleektivMenuId);
                break;
            case "DELETE_FIGURE":
                this.history.update("sleektivMenuReference", cmd.id, undefined);
                break;
            case "DUPLICATE_SHEET":
                this.updateOnDuplicateSheet(cmd.sheetId, cmd.sheetIdTo);
                break;
        }
    }

    updateOnDuplicateSheet(sheetIdFrom, sheetIdTo) {
        for (const oldChartId of this.getters.getChartIds(sheetIdFrom)) {
            if (!this.sleektivMenuReference[oldChartId]) {
                continue;
            }
            const oldChartDefinition = this.getters.getChartDefinition(oldChartId);
            const oldFigure = this.getters.getFigure(sheetIdFrom, oldChartId);
            const newChartId = this.getters.getChartIds(sheetIdTo).find((newChartId) => {
                const newChartDefinition = this.getters.getChartDefinition(newChartId);
                const newFigure = this.getters.getFigure(sheetIdTo, newChartId);
                return (
                    deepEquals(oldChartDefinition, newChartDefinition) &&
                    deepEquals(omit(newFigure, "id"), omit(oldFigure, "id")) // compare size and position
                );
            });

            if (newChartId) {
                this.history.update(
                    "sleektivMenuReference",
                    newChartId,
                    this.sleektivMenuReference[oldChartId]
                );
            }
        }
    }

    /**
     * Get sleektiv menu linked to the chart
     *
     * @param {string} chartId
     * @returns {object | undefined}
     */
    getChartSleektivMenu(chartId) {
        const menuId = this.sleektivMenuReference[chartId];
        return menuId ? this.getters.getIrMenu(menuId) : undefined;
    }

    import(data) {
        if (data.chartSleektivMenusReferences) {
            this.sleektivMenuReference = data.chartSleektivMenusReferences;
        }
    }

    export(data) {
        data.chartSleektivMenusReferences = this.sleektivMenuReference;
    }
}

coreTypes.add("LINK_SLEEKTIV_MENU_TO_CHART");
