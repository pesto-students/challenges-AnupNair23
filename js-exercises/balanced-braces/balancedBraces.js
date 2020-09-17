
function balancedBraces(...args) {
  let brackets = "[]{}()<>"
  let stack = []

  for (let bracket of args) {
    let bracketsIndex = brackets.indexOf(bracket)

    if (bracketsIndex % 2 === 0) {
      stack.push(bracketsIndex + 1)
    } else {
      if (stack.pop() !== bracketsIndex) {
        return false;
      }
    }
  }
  return stack.length === 0
}

export {
  balancedBraces,
};
