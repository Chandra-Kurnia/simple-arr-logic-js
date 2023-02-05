// Checking string character without regExp
// ------------------------------------------
// How to check ?
// Ex       : const input = ['ababab', 'aba']
// Output   : 2

const input = ['ababab', 'aba'];

const patternCount = (a, b) => {
  try {
    // validate char length
    if (!validateCharLength(a, 100)) {
      return console.error('The first variable must be more than 0 characters');
    } else if (!validateCharLength(b, 100)) {
      return console.error('The second variable must be more than 0 characters');
    }

    let count = 0;
    let arrA = a.split('');
    while (arrA.length > 0) {
      let currentWord = arrA.slice(0, b.length).join('');

      if (currentWord === b) {
        count += 1;
      }
      arrA.shift();
    }

    console.log(count);
  } catch (err) {
    console.error(err);
  }
};

const validateCharLength = (char, lengthAllowed) => {
  if (!char || !lengthAllowed) {
    new Error('Excepted char & length Allowed for check');
    return false;
  }

  if (char.length > lengthAllowed) {
    return false;
  }
  return true;
};

patternCount(input[0], input[1]);
