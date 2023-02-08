export const capitalizeFirstLetter = (str: string) => {
  const lowerCased = str.toLowerCase();
  return lowerCased.toLowerCase().charAt(0).toUpperCase() + lowerCased.slice(1);
};

export const getFirstFiveWords = (str: string) => {
  const words = str.split(' ');
  return words.slice(0, 5).join(' ');
};

export const getFirstGivenChars = (str: string, chars: number) => {
  return str.trim().slice(0, chars) + '...';
};

export const getFirstTwoCapitalLetters = (str: string) => {
  const words = str.split(' ');
  const firstWord = words[0];
  const secondWord = words[1];
  if (secondWord) {
    firstWord?.charAt(0)?.toUpperCase() + secondWord?.charAt(0)?.toUpperCase();
  }
  return firstWord?.charAt(0)?.toUpperCase();
};

export const camelCaseToSentenceCase = (str: string) => {
  return str.split(/(?=[A-Z])/).join(' ');
};

export const converUnderrscoreToSpace = (str: string) => {
  return str.split('_').join(' ');
};
