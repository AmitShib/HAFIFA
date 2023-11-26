type PersonalNumber = `${string}@idf.ts`;

const validString1: PersonalNumber = 'example@idf.ts';

console.log(validString1);

type DayOfWeek = 'sunday' | 'monday' | 'tuesday';

type Weather = 'snowy' | 'rainy' | 'cloudy' | 'sunny';

type DayWeatherCombo = `${DayOfWeek} ${Weather}`;

type FirstWord<S extends string> = S extends `${infer FirstWord} ${infer Rest}` ? FirstWord : S;
type MyName = "john doe";
type MyFirstName = FirstWord<MyName>;

//const try1 : MyFirstName = "john";

//type OnlyFunctionsOf<Obj extends {}> =  Obj[] extends Function ? OnlyFunctionsOf : never;
type OnlyFunctionsOf<Obj extends {}> = {
    [K in keyof Obj]: Obj[K] extends Function ? K : never;
}[keyof Obj];

type MyInterFace = {
    firstName: string;
    greet: () => string;
};

type OnlyFunctionsOfMyInterFace = OnlyFunctionsOf<MyInterFace>;
const try2: OnlyFunctionsOfMyInterFace = "greet";