/** @sleektiv-module */

import { CorePlugin, UIPlugin } from "@sleektiv/o-spreadsheet";

/**
 * An o-spreadsheet core plugin with access to all custom Sleektiv plugins
 * @type {import("@spreadsheet").SleektivCorePluginConstructor}
 **/
export const SleektivCorePlugin = CorePlugin;

/**
 * An o-spreadsheet UI plugin with access to all custom Sleektiv plugins
 * @type {import("@spreadsheet").SleektivUIPluginConstructor}
 **/
export const SleektivUIPlugin = UIPlugin;
