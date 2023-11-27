import { prop } from 'ramda';

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


export const getByName = (name: string, users: User[]): User[] =>users.filter(elem =>elem.name==name);

const isSameName = (name :string , nameToCheck : string) => name === nameToCheck;
const updateScore = (user : User , points : number) => user.score += points;

export const addPointsToScoreByName = (points: number, name: string, users: User[]): User[] => users.map(user => (isSameName(prop('name', user), name) ? updateScore(user, points) : user) as User);

// export const addPointsToScoreByName = (points: number, name: string, users: User[]): User[] =>
// {
//     return users.map(user => {
//         if (user.name === name) {
//           return { ...user, score: user.score + points };
//         }
//         return user;
//       });
// };

const updateTries = (user : User) => user.tries++;

export const incrementTriesByName = (name: string, users: User[]): User[] =>users.map(user => (isSameName(prop('name', user), name) ? updateTries(user) : user) as User);

// export const incrementTriesByName = (name: string, users: User[]): User[] =>{
//     return users.map(user => {
//         if (user.name === name) {
//           return { ...user, score: user.score ++  };
//         }
//         return user;
//       });
// };


export const updateUsersTriesAndScore = (name: string, points: number, users: User[]): User[] =>{
    addPointsToScoreByName(points , name , users);
    incrementTriesByName(name,users);
    return users;
    };

// export const updateUsersTriesAndScore = (name: string, points: number, users: User[]): User[] =>
// {
//     var newArr:User[] =users;
//     newArr = addPointsToScoreByName(points,name,newArr);
//     newArr = incrementTriesByName(name,users);
//     return newArr;
// };


interface UserWithPassing extends User {
    passing: boolean;
}


// write a function that adds each user a new property ('passing'), which is equal to true if and only if the user's score >= 60
export const addPassingBooleanProperty = (usersArray: User[]): UserWithPassing[] => usersArray.map(user => ({...user,passing: user.score >= 60}));


const getMaxElem = (arr : number[]) : number => Math.max(...arr);
export const getHighestScore = (users: User[]): number => getMaxElem(users.map(elem=>elem.score));
    


export const sortByTriesDescendingOrder = (users: User[]): User[] =>users.slice().sort((a, b) => b.tries - a.tries);