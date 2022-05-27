/**
 * Return firsts letter for each words of this string. Each word determine by SPACE character.
 *
 * @param str
 * @returns string
 */
const getFirstLettersBySpace = (str: string) => str.split(" ").map((word) => word[0]).join("");

export { getFirstLettersBySpace };
