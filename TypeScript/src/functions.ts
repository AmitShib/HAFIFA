
function checkLen(str: string): string | null {
    if(str.length%2 == 0)
    {
        const halfLength = Math.floor(str.length / 2);
        const firstHalf = str.slice(0, halfLength);
        return firstHalf;
    }
    return null;
}

let result: string | null = checkLen('validi');
console.log(result); 

type MyUnionType = string | null;

function checkExist(str: MyUnionType): MyUnionType {
    if (str === null) {
        return ''; // Return empty string for null
    } else {
        return str + str; // Return the string
    }
}

let result1: MyUnionType = checkExist('null');
console.log(result1); 

function getFirstObject<T>(arr: T[]): T | null {
    return arr.length > 0 ? arr[0] : null;
}

let arrayOfStrings: string[] = ['apple', 'banana', 'orange'];
console.log(getFirstObject(arrayOfStrings));

function isMyUnion(value: any): value is MyUnionType {
    return (typeof value === 'string');
}

