const sumEvenArgs = (numArr) => {
  let sum = numArr.filter(i => i % 2 === 0).reduce((a, v) => a += v);
  return sum;
};

export { sumEvenArgs };
