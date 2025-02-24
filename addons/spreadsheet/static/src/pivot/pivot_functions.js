/** @sleektiv-module **/
// @ts-check

import { _t } from "@web/core/l10n/translation";

import * as spreadsheet from "@sleektiv/o-spreadsheet";

const { arg, toString } = spreadsheet.helpers;
const { functionRegistry } = spreadsheet.registries;

/**
 * @typedef {import("@spreadsheet").CustomFunctionDescription} CustomFunctionDescription
 * @typedef {import("@sleektiv/o-spreadsheet").FPayload} FPayload
 */

//--------------------------------------------------------------------------
// Spreadsheet functions
//--------------------------------------------------------------------------

const SLEEKTIV_FILTER_VALUE = /** @satisfies {CustomFunctionDescription} */ ({
    description: _t("Return the current value of a spreadsheet filter."),
    args: [arg("filter_name (string)", _t("The label of the filter whose value to return."))],
    category: "Sleektiv",
    /**
     * @param {FPayload} filterName
     */
    compute: function (filterName) {
        const unEscapedFilterName = toString(filterName).replaceAll('\\"', '"');
        return this.getters.getFilterDisplayValue(unEscapedFilterName);
    },
    returns: ["STRING"],
});

functionRegistry
    .add("SLEEKTIV.FILTER.VALUE", SLEEKTIV_FILTER_VALUE);
