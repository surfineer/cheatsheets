//  pure recursive solution 
function factorial1(number) {
  if (number <= 1) {
    return 1;
  } else {
    return number * factorial1(number - 1);
  }
}

// pure iterative solution.
function factorial2(number) {
    let result = 1;
    while (number > 0 ) {
        result *= number;
        number--;
    }
    return result;
}

console.log(factorial1(6)); // 720