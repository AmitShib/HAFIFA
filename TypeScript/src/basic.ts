//SEC 1
const str1 = "h1";
const str2: string = "h2";
const num1 = 1;
const num2: number = 2;

const sumN = num2 + num1;
console.log(sumN);

const sumS= str1 + str2;
console.log(sumS);

const sumNS = str1 + num2;
console.log(sumNS);

//SEC 2
const numbersArray: number[] = [1, 2, 3, 4, 5];

// M the numbers array to create a new array with transformed strings
const mappedArray: string[] = numbersArray.map((element: number) => `hello ${element}`);

// Output the mapped array elements
console.log(mappedArray);




