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


export const addPointsToScoreByName = (points: number, name: string, users: User[]): User[] =>{
    return users.map(user => {
        if (user.name === name) {
          return { ...user, score: user.score + points };
        }
        return user;
      });
    // var newArr:User[]=getByName(name,users);
    // for(var i=0;i=newArr.length;i++)
    // {
    //     newArr[i].score= newArr[i].score+points;
    // }
    // return newArr;
};


export const incrementTriesByName = (name: string, users: User[]): User[] =>{
    return users.map(user => {
        if (user.name === name) {
          return { ...user, score: user.score ++  };
        }
        return user;
      });
    // var newArr:User[]=getByName(name,users);
    // for(var i=0;i=newArr.length;i++)
    // {
    //     newArr[i].tries= newArr[i].tries++;
    // }
    // return newArr;
};


export const updateUsersTriesAndScore = (name: string, points: number, users: User[]): User[] =>
{
    var newArr:User[] =users;
    newArr = addPointsToScoreByName(points,name,newArr);
    newArr = incrementTriesByName(name,users);
    return newArr;
};


interface UserWithPassing extends User {
    passing: boolean;
}


// write a function that adds each user a new property ('passing'), which is equal to true if and only if the user's score >= 60
export const addPassingBooleanProperty = (usersArray: User[]): UserWithPassing[] => {
    return usersArray.map(user => ({
        ...user,
        passing: user.score >= 60
      }));
};


export const getHighestScore = (users: User[]): number =>
{
    var scoreArr:number[]= users.map(elem=>elem.score);
    return Math.max(...scoreArr);
};


export const sortByTriesDescendingOrder = (users: User[]): User[] =>users.slice().sort((a, b) => b.tries - a.tries); ;