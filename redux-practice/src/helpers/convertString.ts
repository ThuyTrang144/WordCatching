const getFirstLetter = (str: string) => str.split(" ").map((word) => word[0]).join("");

// eslint-disable-next-line import/prefer-default-export
export { getFirstLetter };
