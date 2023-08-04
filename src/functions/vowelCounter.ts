const isVowel = (letter: string): boolean => {
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(letter.toLowerCase());
};

export const countVowels = (str: string): number => {
  const letters = str.split("");

  let counter = 0;
  letters.forEach((letter) => {
    if (isVowel(letter)) counter += 1;
  });

  return counter;
};
