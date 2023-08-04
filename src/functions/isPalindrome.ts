export const isPalindrome = (str: string) => {
  const notAlphanumerical = /[\W_]/g;

  const lowRegStr = str.toLowerCase().replace(notAlphanumerical, '');
  const reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
};
