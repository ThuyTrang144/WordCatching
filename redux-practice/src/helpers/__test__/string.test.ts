import { getFirstLettersBySpace } from "@helpers/string";

describe("string utilities", () => {
  test("should split the first letter of each word if have space between each word", () => {
    const result = getFirstLettersBySpace("Trang Nguyen");
    expect(result).toBe("TN");
  });
});
