//SEC 1
var str1 = "h1";
let str2: string = "h2";
var num1 = 1;
let num2: number = 2;

let sumN = num2 + num1;
console.log(sumN);

let sumS= str1 + str2;
console.log(sumS);

let sumNS = str1 + num2;
console.log(sumNS);

//SEC 2
let numbersArray: number[] = [1, 2, 3, 4, 5];

// Mapping the numbers array to create a new array with transformed strings
let mappedArray: string[] = numbersArray.map((element: number) => {
    return `hello ${element}`;
});

// Output the mapped array elements
console.log(mappedArray);




