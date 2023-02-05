// Count And Sorting String
// Checking string character without regExp
// ------------------------------------------
// How to check ?
// Ex       : const input = ['ababab', 'aba']
// Output   : 2

const input = 'MasyaAllah';



const countFunc = (str) => {
  //neutralize string
  const convertedString = str.replace(/[\s@%#&$.,]+/g, '');
  let countedLetter = [];

  for (i = 0; i < convertedString.length; i++) {
    let foundKey = countedLetter.find((e) => e.letter === convertedString[i]);
    if (foundKey) {
      // +=1 count object
      const plusCounterObject = {
        ...foundKey,
        count: (foundKey.count += 1),
      };

      let newCountedLetter = countedLetter.filter((e) => e.letter !== foundKey.letter);
      newCountedLetter.push(plusCounterObject);
      countedLetter = newCountedLetter;
    } else {
      countedLetter.push({
        letter: convertedString[i],
        count: 1,
      });
    }
  }

  let sortedCountedLetter = countedLetter.sort((a, b) => a['letter'].localeCompare(b['letter']));
  
  let convertObject = {};
  for (loop = 0; loop < sortedCountedLetter.length; loop++) {
    convertObject[sortedCountedLetter[loop].letter] = sortedCountedLetter[loop].count
  }

  console.log(convertObject);
};

countFunc(input);
