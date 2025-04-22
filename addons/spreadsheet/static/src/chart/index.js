/** @sleektiv-module */

import * as spreadsheet from "@sleektiv/o-spreadsheet";

const { chartComponentRegistry } = spreadsheet.registries;
const { ChartJsComponent } = spreadsheet.components;

chartComponentRegistry.add("sleektiv_bar", ChartJsComponent);
chartComponentRegistry.add("sleektiv_line", ChartJsComponent);
chartComponentRegistry.add("sleektiv_pie", ChartJsComponent);

import { SleektivChartCorePlugin } from "./plugins/sleektiv_chart_core_plugin";
import { ChartSleektivMenuPlugin } from "./plugins/chart_sleektiv_menu_plugin";
import { SleektivChartUIPlugin } from "./plugins/sleektiv_chart_ui_plugin";

export { SleektivChartCorePlugin, ChartSleektivMenuPlugin, SleektivChartUIPlugin };
