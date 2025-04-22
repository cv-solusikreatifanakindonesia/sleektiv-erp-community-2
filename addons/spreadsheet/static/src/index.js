/** @sleektiv-module */

/**
 * This file is meant to load the different subparts of the module
 * to guarantee their plugins are loaded in the right order
 *
 * dependency:
 *             other plugins
 *                   |
 *                  ...
 *                   |
 *                filters
 *                /\    \
 *               /  \    \
 *           pivot  list  Sleektiv chart
 */

/** TODO: Introduce a position parameter to the plugin registry in order to load them in a specific order */
import * as spreadsheet from "@sleektiv/o-spreadsheet";
const { corePluginRegistry, coreViewsPluginRegistry } = spreadsheet.registries;

import { GlobalFiltersCorePlugin, GlobalFiltersUIPlugin } from "@spreadsheet/global_filters/index";
import { PivotSleektivCorePlugin, PivotUIGlobalFilterPlugin } from "@spreadsheet/pivot/index"; // list depends on filter for its getters
import { ListCorePlugin, ListUIPlugin } from "@spreadsheet/list/index"; // pivot depends on filter for its getters
import {
    ChartSleektivMenuPlugin,
    SleektivChartCorePlugin,
    SleektivChartUIPlugin,
} from "@spreadsheet/chart/index"; // Sleektivchart depends on filter for its getters
import { PivotCoreGlobalFilterPlugin } from "./pivot/plugins/pivot_core_global_filter_plugin";
import { PivotSleektivUIPlugin } from "./pivot/plugins/pivot_sleektiv_ui_plugin";

corePluginRegistry.add("SleektivGlobalFiltersCorePlugin", GlobalFiltersCorePlugin);
corePluginRegistry.add("PivotSleektivCorePlugin", PivotSleektivCorePlugin);
corePluginRegistry.add("SleektivPivotGlobalFiltersCorePlugin", PivotCoreGlobalFilterPlugin);
corePluginRegistry.add("SleektivListCorePlugin", ListCorePlugin);
corePluginRegistry.add("sleektivChartCorePlugin", SleektivChartCorePlugin);
corePluginRegistry.add("chartSleektivMenuPlugin", ChartSleektivMenuPlugin);

coreViewsPluginRegistry.add("SleektivGlobalFiltersUIPlugin", GlobalFiltersUIPlugin);
coreViewsPluginRegistry.add("SleektivPivotGlobalFilterUIPlugin", PivotUIGlobalFilterPlugin);
coreViewsPluginRegistry.add("SleektivListUIPlugin", ListUIPlugin);
coreViewsPluginRegistry.add("sleektivChartUIPlugin", SleektivChartUIPlugin);
coreViewsPluginRegistry.add("sleektivPivotUIPlugin", PivotSleektivUIPlugin);
