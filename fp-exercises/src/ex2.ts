import { add, apply, assoc, descend, filter, inc, lensProp, map, over, pipe, pluck, prop, propEq, sort, when } from 'ramda';

interface User {
    name: string;
    score: number;
    tries: number;
}

/*
    Example of users array:
    const users = [
        { name: 'James', score: 30, tries: 1 },
        { name: 'Mary', score: 110, tries: 4 },
        { name: 'Mary', score: 330, tries: 7 },
        { name: 'Mary', score: 500, tries: 10 },
        { name: 'Mary', score: 700, tries: 6 },
        { name: 'Henry', score: 80, tries: 3 },
        { name: 'Mary', score: 220, tries: 5 }
    ];
*/


export const getByName = (name: string) => filter(propEq(name, "name"));

// const updateScore = (points: number) => (user: User): User => ({ ...user, score: user.score + points });
const updateScore = (points: number) => over<User, number>(lensProp("score"), add(points));

const whenNameEqThen = (func: (user: User) => User) => (name: string) => when(propEq(name, "name"), func);
const whenNameEqAddPoints = (points: number) => whenNameEqThen(updateScore(points));

export const addPointsToScoreByName = (points: number, name: string) => map(whenNameEqAddPoints(points)(name));
const incrementTries = over<User, number>(lensProp("score"), inc);
const whenNameEqIncrementTries = whenNameEqThen(incrementTries);


export const incrementTriesByName = (name: string) => map(whenNameEqIncrementTries(name));




export const updateUsersTriesAndScore = (name: string, points: number) => pipe(
    addPointsToScoreByName(points,name),
    incrementTriesByName(name)
);


interface UserWithPassing extends User {
    passing: boolean;
}


// write a function that adds each user a new property ('passing'), which is equal to true if and only if the user's score >= 60
export const addPassingBooleanProperty = map<User, UserWithPassing>(user => assoc("passing", user.score>=60, user));


const getMaxElem = apply(Math.max);
export const getHighestScore = pipe(
    pluck("score")<User>,
    getMaxElem
);



export const sortByTriesDescendingOrder = sort<User>(descend(prop("tries")));