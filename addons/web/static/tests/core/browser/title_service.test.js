import { beforeEach, describe, expect, test } from "@sleektiv/hoot";
import { getService, makeMockEnv } from "@web/../tests/web_test_helpers";

describe.current.tags("headless");

let titleService;

beforeEach(async () => {
    await makeMockEnv();
    titleService = getService("title");
});

test("simple title", () => {
    titleService.setParts({ one: "MySleektiv" });
    expect(titleService.current).toBe("MySleektiv");
});

test("add title part", () => {
    titleService.setParts({ one: "MySleektiv", two: null });
    expect(titleService.current).toBe("MySleektiv");
    titleService.setParts({ three: "Import" });
    expect(titleService.current).toBe("MySleektiv - Import");
});

test("modify title part", () => {
    titleService.setParts({ one: "MySleektiv" });
    expect(titleService.current).toBe("MySleektiv");
    titleService.setParts({ one: "Zsleektiv" });
    expect(titleService.current).toBe("Zsleektiv");
});

test("delete title part", () => {
    titleService.setParts({ one: "MySleektiv" });
    expect(titleService.current).toBe("MySleektiv");
    titleService.setParts({ one: null });
    expect(titleService.current).toBe("Sleektiv");
});

test("all at once", () => {
    titleService.setParts({ one: "MySleektiv", two: "Import" });
    expect(titleService.current).toBe("MySleektiv - Import");
    titleService.setParts({ one: "Zsleektiv", two: null, three: "Sauron" });
    expect(titleService.current).toBe("Zsleektiv - Sauron");
});

test("get title parts", () => {
    expect(titleService.current).toBe("");
    titleService.setParts({ one: "MySleektiv", two: "Import" });
    expect(titleService.current).toBe("MySleektiv - Import");
    const parts = titleService.getParts();
    expect(parts).toEqual({ one: "MySleektiv", two: "Import" });
    parts.action = "Export";
    expect(titleService.current).toBe("MySleektiv - Import"); // parts is a copy!
});
