// ! WARNING: THIS MODULE CANNOT HAVE ANY DEPENDENCY !

export const CONFIG_SUFFIX = ".hoot";
export const TEST_SUFFIX = ".test";

sleektiv.define = {
    ["define (mocked)"](name, dependencies, factory) {
        return sleektiv.loader.define(name, dependencies, factory, !name.endsWith(CONFIG_SUFFIX));
    },
}["define (mocked)"];
