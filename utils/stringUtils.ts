export const capitalizeFirstLetter = (str: string) => {
  const lowerCased = str.toLowerCase();
  return lowerCased.toLowerCase().charAt(0).toUpperCase() + lowerCased.slice(1);
};

export const getFirstFiveWords = (str: string) => {
  const words = str.split(" ");
  return words.slice(0, 5).join(" ");
};
