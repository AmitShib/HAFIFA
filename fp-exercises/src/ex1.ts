import { range, filter } from 'ramda';

// write a function that gets an array of scores and removes any scores that are higher than 100.
export const removeOverScores = (arr: number[]): number[] => arr.filter(elem => elem <= 100);



// write a function that gets an array of scores and multiplies by 10 all the scores that are below 10.
const isBelowTen =(num :number) => num < 10;
const multByTen = (num:number):number=> num*10;

export const boostSingleScores = (arr: number[]):number[]=>arr.map((num: number) => (isBelowTen(num) ? multByTen(num) : num));


// write a function that gets an array of scores returns the second largest value.
// const maxElem = (arr:number[]):number => Math.max(...arr);
// export const secondMaximum =(arr:number[]):number=>Math.max(...arr.filter(elem=>(elem<maxElem(arr))));
const sortArr = (arr:number[]):number[] => arr.sort((a, b) => b - a);
export const secondMaximum =(arr:number[]):number=>sortArr(arr)[1];


// write a function that gets a number and returns all number's dividers
const isDivider = (num:number, div: number) => num % div === 0;
export const getDividers =(num:number):number[]=> filter((i: number) => isDivider(num, i), range(1, num + 1));


// write a function that gets a number and returns true if the number is prime, or else returns false
export const isPrime =(num:number):boolean=> (getDividers(num).length > 2) ;