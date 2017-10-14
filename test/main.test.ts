import * as assert from "assert";
import { get } from "../src";

describe("get-loc", () => {
  it("should default to empty href", () => {
    assert.deepEqual(get(), { href: "" });
  });

  it("should support a history polyfill", () => {
    (global as any).history = { location: { href: "/test1" } };
    assert.deepEqual(get(), { href: "/test1" });
    delete (global as any).history;
  });

  it("should support the location api", () => {
    (global as any).location = { href: "/test2" };
    assert.deepEqual(get(), { href: "/test2" });
    delete (global as any).history;
  });
});
