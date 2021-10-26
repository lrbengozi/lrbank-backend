import generateAccountDv from "../../src/lib/generateAccountDv";

describe("generateAccountDv - Success", () => {
  it("should generate a DV", async () => {
    const dv = generateAccountDv("371896");

    expect(dv).toBe("8");
  });
});
