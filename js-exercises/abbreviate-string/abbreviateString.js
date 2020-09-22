// import { isString } from "util";

function abbreviateString(str) {
  const strSplit = str.split(' ');
  const lastWord = strSplit[strSplit.length - 1];
  const lastWordFirstLetter = (lastWord.split('')[0]).toUpperCase();
  return strSplit[0] + ' ' + lastWordFirstLetter + '.';
}

export { abbreviateString };
