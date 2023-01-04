export const capitalizeFirstLetter = (str: string) => {
  const lowerCased = str.toLowerCase();
  return lowerCased.toLowerCase().charAt(0).toUpperCase() + lowerCased.slice(1);
};
