'use strict';

// > The decimal number, 585, is 1001001001 in binary, and is palindromic in both
// > bases.
// >
// > Find the sum of all numbers, less than one million, which are palindromic in
// > base 10 and base 2.
// >
// > (Please note that the palindromic number, in either base, may not include
// > leading zeros.)

const reverse = (num) => {
  return num.split('').reverse().join('');
};

const palindromeSum = (max) => {
  let sum = 0;

  for (let i = 0; i < max; i++) {
    let n = i;
    let nString = n.toString();
    let nReverse = reverse(nString);
    let nBinary = n.toString(2);
    let nBinaryReverse = reverse(nBinary);

    if (nString === nReverse && nBinary === nBinaryReverse) {
      sum += n;
    }
  }
  return sum;
};

const palindromeThreeBases = (max) => {
  for (let i = 0; i < max; i++) {
    let n = i;
    let nString = n.toString();
    let nReverse = reverse(nString);
    let nBinary = n.toString(2);
    let nBinaryReverse = reverse(nBinary);
    let nOctal = n.toString(8);
    let nOctalReverse = reverse(nOctal);

    if ((nString === nReverse && nBinary === nBinaryReverse) && nOctal === nOctalReverse) {
      console.log(n);
    }
  }
};

module.exports = () => {
  return true;
};
