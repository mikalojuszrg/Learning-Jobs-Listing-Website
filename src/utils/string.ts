export const getFullName = (firstName: string, lastName: string): string => {
  return `${firstName} ${lastName}`;
};

export const turnPasswordIntoStars = (password: string): string => {
  return password
    .split("")
    .map((letter) => (letter = "*"))
    .join("");
};
