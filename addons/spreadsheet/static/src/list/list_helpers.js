/** @sleektiv-module */
// @ts-check

import { helpers } from "@sleektiv/o-spreadsheet";

const { getFunctionsFromTokens } = helpers;

/** @typedef {import("@sleektiv/o-spreadsheet").Token} Token */

/**
 * Parse a spreadsheet formula and detect the number of LIST functions that are
 * present in the given formula.
 *
 * @param {Token[]} tokens
 *
 * @returns {number}
 */
export function getNumberOfListFormulas(tokens) {
    return getFunctionsFromTokens(tokens, ["SLEEKTIV.LIST", "SLEEKTIV.LIST.HEADER"]).length;
}

/**
 * Get the first List function description of the given formula.
 *
 * @param {Token[]} tokens
 *
 * @returns {import("../helpers/sleektiv_functions_helpers").SleektivFunctionDescription|undefined}
 */
export function getFirstListFunction(tokens) {
    return getFunctionsFromTokens(tokens, ["SLEEKTIV.LIST", "SLEEKTIV.LIST.HEADER"])[0];
}
