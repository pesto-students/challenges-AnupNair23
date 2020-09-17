
function lastIndexOf(num, args) {
  for(let i = args.length; i >= 0; i--) {
    if (args[i] === num) {
      return i;
    }
  }
  return -1;
}

export {
  lastIndexOf,
};
