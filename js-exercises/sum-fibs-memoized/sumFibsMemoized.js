function sumFibs(num) {
  if (num <= 1) {
    return 1
  }
  return sumFibs(num - 1) + sumFibs(num - 2);
  // return num;
  //
}

function cacheFunction() {}

export { sumFibs, cacheFunction };
