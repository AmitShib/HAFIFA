import { range, filter, lte, __, lt, map, multiply, when, sort, uniq, nth, pipe, isNil, ifElse, modulo, equals, curry, length, gt } from 'ramda';

// write a function that gets an array of scores and removes any scores that are higher than 100.
export const removeOverScores = filter(lte(__, 100));

// write a function that gets an array of scores and multiplies by 10 all the scores that are below 10.
const isBelowTen = lt(__, 10);
const multByTen = multiply(10);

export const boostSingleScores = map(when(isBelowTen, multByTen));

// write a function that gets an array of scores returns the second largest value.
// const maxElem = (arr:number[]):number => Math.max(...arr);
// export const secondMaximum =(arr:number[]):number=>Math.max(...arr.filter(elem=>(elem<maxElem(arr))));
const sortNumArr = sort<number>((a, b) => b - a);
// const sortArr = sort(flip(subtract));
export const secondMaximum = pipe(
    sortNumArr,
    uniq,
    ifElse(pipe(
        nth(1), isNil
    ),
        nth(0), nth(1))
);
//export const secondMaximum = (arr: number[]): number => sortNumArr(arr)[1];

// write a function that gets a number and returns all number's dividers
const isDivider = curry(pipe(
    modulo,
    equals(0)
));


export const getDividers = (num: number): number[] => range(1, num + 1).filter(isDivider(num));


// write a function that gets a number and returns true if the number is prime, or else returns false
// export const isPrime = (num: number): boolean => (getDividers(num).length > 2);
export const isPrime = pipe(
    getDividers,
    length,
    gt(__, 2)
);