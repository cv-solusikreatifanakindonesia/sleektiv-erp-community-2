/** @sleektiv-module **/
// @ts-check

import { helpers } from "@sleektiv/o-spreadsheet";

const { getFunctionsFromTokens } = helpers;

/**
 * @typedef {import("@sleektiv/o-spreadsheet").Token} Token
 * @typedef  {import("@spreadsheet/helpers/sleektiv_functions_helpers").SleektivFunctionDescription} SleektivFunctionDescription
 */

/**
 * @param {Token[]} tokens
 * @returns {number}
 */
export function getNumberOfAccountFormulas(tokens) {
    return getFunctionsFromTokens(tokens, ["SLEEKTIV.BALANCE", "SLEEKTIV.CREDIT", "SLEEKTIV.DEBIT", "SLEEKTIV.RESIDUAL", "SLEEKTIV.PARTNER.BALANCE"]).length;
}

/**
 * Get the first Account function description of the given formula.
 *
 * @param {Token[]} tokens
 * @returns {SleektivFunctionDescription | undefined}
 */
export function getFirstAccountFunction(tokens) {
    return getFunctionsFromTokens(tokens, ["SLEEKTIV.BALANCE", "SLEEKTIV.CREDIT", "SLEEKTIV.DEBIT", "SLEEKTIV.RESIDUAL", "SLEEKTIV.PARTNER.BALANCE"])[0];
}
