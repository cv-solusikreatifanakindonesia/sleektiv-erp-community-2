import { HIGHLIGHT_CLASS, searchHighlight } from "@mail/core/common/message_search_hook";
import {
    SIZES,
    click,
    contains,
    defineMailModels,
    insertText,
    openDiscuss,
    openFormView,
    patchUiSize,
    start,
    startServer,
    triggerHotkey,
} from "@mail/../tests/mail_test_helpers";

import { describe, expect, test } from "@sleektiv/hoot";
import { markup } from "@sleektiv/owl";

import { serverState } from "@web/../tests/web_test_helpers";

describe.current.tags("desktop");
defineMailModels();

test("Search highlight", async () => {
    const testCases = [
        {
            input: markup("test sleektiv"),
            output: `test <span class="${HIGHLIGHT_CLASS}">sleektiv</span>`,
            searchTerm: "sleektiv",
        },
        {
            input: markup('<a href="https://www.sleektiv.com">https://www.sleektiv.com</a>'),
            output: `<a href="https://www.sleektiv.com">https://www.<span class="${HIGHLIGHT_CLASS}">sleektiv</span>.com</a>`,
            searchTerm: "sleektiv",
        },
        {
            input: '<a href="https://www.sleektiv.com">https://www.sleektiv.com</a>',
            output: `&lt;a href="https://www.<span class="${HIGHLIGHT_CLASS}">sleektiv</span>.com"&gt;https://www.<span class="${HIGHLIGHT_CLASS}">sleektiv</span>.com&lt;/a&gt;`,
            searchTerm: "sleektiv",
        },
        {
            input: markup('<a href="https://www.sleektiv.com">Sleektiv</a>'),
            output: `<a href="https://www.sleektiv.com"><span class="${HIGHLIGHT_CLASS}">Sleektiv</span></a>`,
            searchTerm: "sleektiv",
        },
        {
            input: markup('<a href="https://www.sleektiv.com">Sleektiv</a> Sleektiv is a free software'),
            output: `<a href="https://www.sleektiv.com"><span class="${HIGHLIGHT_CLASS}">Sleektiv</span></a> <span class="${HIGHLIGHT_CLASS}">Sleektiv</span> is a free software`,
            searchTerm: "sleektiv",
        },
        {
            input: markup("sleektiv is a free software"),
            output: `<span class="${HIGHLIGHT_CLASS}">sleektiv</span> is a free software`,
            searchTerm: "sleektiv",
        },
        {
            input: markup("software SLEEKTIV is a free"),
            output: `software <span class="${HIGHLIGHT_CLASS}">SLEEKTIV</span> is a free`,
            searchTerm: "sleektiv",
        },
        {
            input: markup(`<ul>
                <li>Sleektiv</li>
                <li><a href="https://sleektiv.com">Sleektiv ERP</a> Best ERP</li>
            </ul>`),
            output: `<ul>
                <li><span class="${HIGHLIGHT_CLASS}">Sleektiv</span></li>
                <li><a href="https://sleektiv.com"><span class="${HIGHLIGHT_CLASS}">Sleektiv</span> ERP</a> Best ERP</li>
            </ul>`,
            searchTerm: "sleektiv",
        },
        {
            input: markup("test <strong>Sleektiv</strong> test"),
            output: `<span class="${HIGHLIGHT_CLASS}">test</span> <strong><span class="${HIGHLIGHT_CLASS}">Sleektiv</span></strong> <span class="${HIGHLIGHT_CLASS}">test</span>`,
            searchTerm: "sleektiv test",
        },
        {
            input: markup("test <br> test"),
            output: `<span class="${HIGHLIGHT_CLASS}">test</span> <br> <span class="${HIGHLIGHT_CLASS}">test</span>`,
            searchTerm: "sleektiv test",
        },
        {
            input: markup("<strong>test</strong> test"),
            output: `<strong><span class="${HIGHLIGHT_CLASS}">test</span></strong> <span class="${HIGHLIGHT_CLASS}">test</span>`,
            searchTerm: "test",
        },
        {
            input: markup("<strong>a</strong> test"),
            output: `<strong><span class="${HIGHLIGHT_CLASS}">a</span></strong> <span class="${HIGHLIGHT_CLASS}">test</span>`,
            searchTerm: "a test",
        },
        {
            input: markup("&amp;amp;"),
            output: `<span class="${HIGHLIGHT_CLASS}">&amp;amp;</span>`,
            searchTerm: "&amp;",
        },
        {
            input: markup("&amp;amp;"),
            output: `<span class="${HIGHLIGHT_CLASS}">&amp;</span>amp;`,
            searchTerm: "&",
        },
        {
            input: markup("<strong>test</strong> hello"),
            output: `<strong><span class="${HIGHLIGHT_CLASS}">test</span></strong> <span class="${HIGHLIGHT_CLASS}">hello</span>`,
            searchTerm: "test hello",
        },
        {
            input: markup("<p>&lt;strong&gt;test&lt;/strong&gt; hello</p>"),
            output: `<p>&lt;strong&gt;<span class="${HIGHLIGHT_CLASS}">test</span>&lt;/strong&gt; <span class="${HIGHLIGHT_CLASS}">hello</span></p>`,
            searchTerm: "test hello",
        },
    ];
    for (const { input, output, searchTerm } of testCases) {
        expect(searchHighlight(searchTerm, input).toString()).toBe(output);
    }
});

test("Display highligthed search in chatter", async () => {
    patchUiSize({ size: SIZES.XXL });
    const pyEnv = await startServer();
    const partnerId = pyEnv["res.partner"].create({ name: "John Doe" });
    pyEnv["mail.message"].create({
        body: "not empty",
        model: "res.partner",
        res_id: partnerId,
    });
    await start();
    await openFormView("res.partner", partnerId);
    await click("[title='Search Messages']");
    await insertText(".o_searchview_input", "empty");
    triggerHotkey("Enter");
    await contains(`.o-mail-SearchMessageResult .o-mail-Message span.${HIGHLIGHT_CLASS}`);
});

test("Display multiple highligthed search in chatter", async () => {
    patchUiSize({ size: SIZES.XXL });
    const pyEnv = await startServer();
    const partnerId = pyEnv["res.partner"].create({ name: "John Doe" });
    pyEnv["mail.message"].create({
        body: "not test empty",
        model: "res.partner",
        res_id: partnerId,
    });
    await start();
    await openFormView("res.partner", partnerId);
    await click("[title='Search Messages']");
    await insertText(".o_searchview_input", "not empty");
    triggerHotkey("Enter");
    await contains(`.o-mail-SearchMessageResult .o-mail-Message span.${HIGHLIGHT_CLASS}`, {
        count: 2,
    });
});

test("Display highligthed search in Discuss", async () => {
    const pyEnv = await startServer();
    const channelId = pyEnv["discuss.channel"].create({ name: "General" });
    pyEnv["mail.message"].create({
        author_id: serverState.partnerId,
        body: "not empty",
        attachment_ids: [],
        message_type: "comment",
        model: "discuss.channel",
        res_id: channelId,
    });
    await start();
    await openDiscuss(channelId);
    await click("button[title='Search Messages']");
    await insertText(".o_searchview_input", "empty");
    triggerHotkey("Enter");
    await contains(`.o-mail-SearchMessagesPanel .o-mail-Message span.${HIGHLIGHT_CLASS}`);
});

test("Display multiple highligthed search in Discuss", async () => {
    const pyEnv = await startServer();
    const channelId = pyEnv["discuss.channel"].create({ name: "General" });
    pyEnv["mail.message"].create({
        author_id: serverState.partnerId,
        body: "not prout empty",
        attachment_ids: [],
        message_type: "comment",
        model: "discuss.channel",
        res_id: channelId,
    });
    await start();
    await openDiscuss(channelId);
    await click("button[title='Search Messages']");
    await insertText(".o_searchview_input", "not empty");
    triggerHotkey("Enter");
    await contains(`.o-mail-SearchMessagesPanel .o-mail-Message span.${HIGHLIGHT_CLASS}`, {
        count: 2,
    });
});

test("Display highligthed with escaped character must ignore them", async () => {
    patchUiSize({ size: SIZES.XXL });
    const pyEnv = await startServer();
    const partnerId = pyEnv["res.partner"].create({ name: "John Doe" });
    pyEnv["mail.message"].create({
        body: "<p>&lt;strong&gt;test&lt;/strong&gt; hello</p>",
        model: "res.partner",
        res_id: partnerId,
    });
    await start();
    await openFormView("res.partner", partnerId);
    await click("[title='Search Messages']");
    await insertText(".o_searchview_input", "test hello");
    triggerHotkey("Enter");
    await contains(`.o-mail-SearchMessageResult .o-mail-Message span.${HIGHLIGHT_CLASS}`, {
        count: 2,
    });
    await contains(`.o-mail-Message-body`, { text: "<strong>test</strong> hello" });
});
