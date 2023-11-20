import { filter } from 'ramda';

// write a function that gets an array of scores and removes any scores that are higher than 100.
export const removeOverScores = (arr: number[]): number[] => arr.filter(elem => elem <= 100);



// write a function that gets an array of scores and multiplies by 10 all the scores that are below 10.
export const boostSingleScores = (arr: number[]):number[]=>{
    var newArr:number[]=arr;
    for(var i=0;i<arr.length;i++)
    {
        if(newArr[i]>10)
            newArr[i]=newArr[i]*10;
    }
    return newArr;
};


// write a function that gets an array of scores returns the second largest value.
// const maxElem = (arr:number[]):number => Math.max(...arr);
// export const secondMaximum =(arr:number[]):number=>Math.max(...arr.filter(elem=>(elem<maxElem(arr))));
const sortArr = (arr:number[]):number[] => arr.sort((a, b) => b - a);
export const secondMaximum =(arr:number[]):number=>sortArr(arr)[1];


// write a function that gets a number and returns all number's dividers
export const getDividers =(num:number):number[]=>{
    var arr:number[]=[];
    if(num<=1)
        return [];
    for(var i=1;i<=num;i++)
    {
        if(num%i==0)
            arr.push(num);
    }

    return arr;
};


// write a function that gets a number and returns true if the number is prime, or else returns false
export const isPrime =(num:number):boolean=>{
var dividersArr = getDividers(num);
if(dividersArr.length==2)
    return true;
return false;
};