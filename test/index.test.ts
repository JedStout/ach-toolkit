import { describe, expect, it } from "vitest";
import { BLOCKING_FACTOR, RECORD_LENGTH } from "../src/index.js";

describe("format constants", () => {
  it("match the NACHA specification", () => {
    expect(RECORD_LENGTH).toBe(94);
    expect(BLOCKING_FACTOR).toBe(10);
  });
});
