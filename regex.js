// ex1
const trim = (str)=> {
  const rExp = new RegExp("[ ]+", "");
  return str.replace(rExp, "");
};
console.log(trim("               ni r "));
console.log("          nir  ");

// ex2
const inRange = function (numStr) {
  /*const NUMERIC_REGEXP = /[-][0-1][\d]*[0-9][\d]*[0-6][\d]+/g;
  const numbers = numStr.match(NUMERIC_REGEXP);
  return numbers;*/
  return numStr.match(/15[0-6]|1[0-4]\d|\d?\d/g);
};
//console.log(inRange("123 152 77 2"));
// ex3
const validOpenCloseTag = function (html) {
  return /^<([-\w]+)[\s\S]*((<\/\1>$))/.test(html);
};
console.log(validOpenCloseTag("<hey-wh_atsUp>whatever<href/>something</hey-wh_atsUp>"));
console.log(validOpenCloseTag("<div>something</div><a>hey</a>"));
console.log(validOpenCloseTag("good"));
// ex4
const validPassword = password => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)(?=.{6,10})$/.test(password);

// console.log(validPassword("sd1&212d"));
// ex5
const swapCoordinates = function (coordinates) {
  const regex = /\((-?\d+),(-?\d+)\)/g;
  const result = coordinates.replace(regex, '($2,$1)');
  console.log(result);
  return result;
};
// console.log(swapCoordinates("(57,12),(22,13)"));
// ex6
const twiceOrMore = (str, subStr) =>(str.match(new RegExp(subStr, 'g')) || []).length>=2;
console.log(twiceOrMore("cfoxfoxfoxrrr", "fo"));
console.log(twiceOrMore("cfoxxrrr", "fo"));
// ex7
const fiveLengthSequence = function (str) { return /(.)\1{4}/.test(str); };
//console.log(fiveLengthSequence("ffff"));
// ex8
const extractAddress = function (address) {
  const regex = /^(\d+)?\s*([^\d,]+)\s*,?\s*([^\d,]+)\s*,?\s*([^\d,]+)?\s*(\d{5})?$/;
  const match = regex.exec(address.trim());
  if (!match) {
    return null;
  }
  const [_, houseNumber, street, city, country] = match;
  return {
    houseNumber: houseNumber || '',
    street: street.trim(),
    city: city.trim(),
    country: country ? country.trim() : '',
  };

};
console.log(extractAddress("16 nehemia tamari, Holon, Israel"));

// const fs = require('fs');

// function deleteNumComments(filename) {
//   fs.readFile(filename, 'utf8', function (err, data) {
//     if (err) {
//       throw err;
//     }

//     // Use regex to find and delete every /*num*/ occurrence
//     const updatedData = data.replace(/\/\* \d+ \*\//g, '');
//     //const updatedData = data.replace(/\/\*\d+\*\//g, '');

//     // Write the updated content back to the file
//     fs.writeFile(filename, updatedData, function (err) {
//       if (err) {
//         throw err;
//       }

//       console.log(`Successfully deleted all /*num*/ comments from ${filename}.`);
//     });
//   });
// }
// deleteNumComments("C:\\Users\\Noa Dunitza\\Desktop\\חפיפה מדור ספיר\\docs.txt");

// ex9
//todo: fix
/**
 * Notepad++:
 *  - find regex: (\r\n)?\/\* \d+ \*\/\r\n
/* *  - replace regex: leave the replace empty
 * VSCode:
 * data.replace(/\/\*\d+\*\//g, '');
 *  - find regex: /\/\*\d+\*\//g
 *  - replace regex: ''
 */
// ex10
/**
 * Notepad++:
 *  - find regex: ((\{\r\n    "_id" : ObjectId\(")|("\),\r\n    "name" : ")|(",\r\n   "age" : )|(\r\n\}))
 *  - replace regex: 
 * VSCode:
  objectString.replace(/{/, '');
  objectString.replace(/}/g, '\n');
 *  - find regex: ((\{\n    "_id" : ObjectId\(")|("\),\n    "name" : ")|(",\n   "age" : )|(\n\}))
 *  - replace regex: TAB(   )
 */







function expandString(input) {
  const regex = /(\d+)\[([^\[\]]*)\]/;
  let output = input;

  let match = regex.exec(output);
  while (match !== null) {
    const count = parseInt(match[1]);
    const content = match[2];
    const expandedContent = content.repeat(count);
    output = output.replace(match[0], expandedContent);
    match = regex.exec(output);
  }
  
  return output;
}

const inputString = '3[ab2[c]4[abc]d]';
const expandedString = expandString(inputString);
console.log(expandedString);
