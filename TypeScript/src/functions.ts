// Let matan check


const isEven = (str:string) => str.length % 2;
const halfLenString = (str:string) => Math.floor(str.length / 2);
const halfString = (str:string) => str.slice(0, halfLenString(str));
const evenLenBringHalfSrtring = (str: string): string | null => isEven(str) ? halfString(str) : null;


const result: string | null = evenLenBringHalfSrtring('validi');
console.log(result);

type UnionType = string | null;

const duplicateString = (str:string) => str+str ;
const checkExist =(str: UnionType): UnionType => str ? duplicateString(str) : '' ;

const result1: UnionType = checkExist('null');
console.log(result1);

const getFirstObject = <T>(arr: T[]): T | null => arr.length ? arr[0] : null;


const arrayOfStrings: string[] = ['apple', 'banana', 'orange'];
console.log(getFirstObject(arrayOfStrings));

const isMyUnion = (value: any): value is UnionType => typeof value === 'string';

