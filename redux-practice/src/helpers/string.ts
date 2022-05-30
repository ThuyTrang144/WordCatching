/**
 * Return firsts letter for each words of this string. Each word determine by SPACE character.
 *
 * @param str
 * @returns string
 */
const getFirstLettersBySpace = (str: string) => str.split(" ").map((word) => word[0]).join("");

/**
 * Split a string into an array of each character exclude space
 *
 * @param str
 * @returns array includes characters of given string
 */
const splitString = (str: string) => str.replace(/\s/g, "").split("");

/**
 * Generate a random strings from the given characters
 *
 * @returns string
 */
const generateRandomString = (length: number, str: string) => {
  let result = "";
  const charactersLength = str.length;
  for (let i = 0; i < length; i++) {
    result += str.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export { getFirstLettersBySpace, generateRandomString, splitString };
