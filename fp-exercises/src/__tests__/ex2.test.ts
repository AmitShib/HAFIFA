import { addPassingBooleanProperty, addPointsToScoreByName, getByName, getHighestScore, incrementTriesByName, sortByTriesDescendingOrder, updateUsersTriesAndScore } from '../ex2';

const users = [
    { name: 'James', score: 30, tries: 1 },
    { name: 'Mary', score: 110, tries: 4 },
    { name: 'Mary', score: 330, tries: 7 },
    { name: 'Mary', score: 500, tries: 10 },
    { name: 'Mary', score: 700, tries: 6 },
    { name: 'Henry', score: 80, tries: 3 },
    { name: 'Mary', score: 220, tries: 5 }
];

describe("ex2", () => {
    test("getByName", () => {
        const maryUsers = [
            { name: 'Mary', score: 110, tries: 4 },
            { name: 'Mary', score: 330, tries: 7 },
            { name: 'Mary', score: 500, tries: 10 },
            { name: 'Mary', score: 700, tries: 6 },
            { name: 'Mary', score: 220, tries: 5 }
        ];
        expect(getByName('Mary', users)).toEqual(maryUsers);
    });

    test("addPointsToScoreByName", () => {
        const points = 13;
        const updatedUsers = [
            { name: 'James', score: 30, tries: 1 },
            { name: 'Mary', score: 110 + points, tries: 4 },
            { name: 'Mary', score: 330 + points, tries: 7 },
            { name: 'Mary', score: 500 + points, tries: 10 },
            { name: 'Mary', score: 700 + points, tries: 6 },
            { name: 'Henry', score: 80, tries: 3 },
            { name: 'Mary', score: 220 + points, tries: 5 }
        ];
        expect(addPointsToScoreByName(points, 'Mary', users)).toEqual(updatedUsers);
    });

    test("incrementTriesByName", () => {
        const incTries = 1;
        const updatedUsers = [
            { name: 'James', score: 30, tries: 1 },
            { name: 'Mary', score: 110, tries: 4 + incTries },
            { name: 'Mary', score: 330, tries: 7 + incTries },
            { name: 'Mary', score: 500, tries: 10 + incTries },
            { name: 'Mary', score: 700, tries: 6 + incTries },
            { name: 'Henry', score: 80, tries: 3 },
            { name: 'Mary', score: 220, tries: 5 + incTries }
        ];
        expect(incrementTriesByName('Mary', users)).toEqual(updatedUsers);
    });

    test("updateUsersTriesAndScore", () => {
        const points = 13, incTries = 1;
        const updatedUsers = [
            { name: 'James', score: 30, tries: 1 },
            { name: 'Mary', score: 110 + points, tries: 4 + incTries },
            { name: 'Mary', score: 330 + points, tries: 7 + incTries },
            { name: 'Mary', score: 500 + points, tries: 10 + incTries },
            { name: 'Mary', score: 700 + points, tries: 6 + incTries },
            { name: 'Henry', score: 80, tries: 3 },
            { name: 'Mary', score: 220 + points, tries: 5 + incTries }
        ];
        expect(updateUsersTriesAndScore('Mary', points, users)).toEqual(updatedUsers);
    });

    test("addPassingBooleanProperty", () => {
        const usersWithoutPassing = [
            { name: 'James', score: 30, tries: 1 },
            { name: 'Mary', score: 110, tries: 4 },
            { name: 'Mary', score: 330, tries: 7 },
            { name: 'Mary', score: 59, tries: 10 },
            { name: 'Mary', score: 29, tries: 6 },
            { name: 'Henry', score: 80, tries: 3 },
            { name: 'Mary', score: 220, tries: 5 },
            { name: 'Henry', score: 60, tries: 8 }
        ];
        const updatedUsers = [
            { name: 'James', score: 30, tries: 1, passing: false },
            { name: 'Mary', score: 110, tries: 4, passing: true },
            { name: 'Mary', score: 330, tries: 7, passing: true },
            { name: 'Mary', score: 59, tries: 10, passing: false },
            { name: 'Mary', score: 29, tries: 6, passing: false },
            { name: 'Henry', score: 80, tries: 3, passing: true },
            { name: 'Mary', score: 220, tries: 5, passing: true },
            { name: 'Henry', score: 60, tries: 8, passing: true }
        ];
        expect(addPassingBooleanProperty(usersWithoutPassing)).toEqual(updatedUsers);
    });

    test("getHighestScore", () => {
        expect(getHighestScore(users)).toEqual(700);
    });

    test("sortByTriesDescendingOrder", () => {
        const sortedUsers = [
            { name: 'Mary', score: 500, tries: 10 },
            { name: 'Mary', score: 330, tries: 7 },
            { name: 'Mary', score: 700, tries: 6 },
            { name: 'Mary', score: 220, tries: 5 },
            { name: 'Mary', score: 110, tries: 4 },
            { name: 'Henry', score: 80, tries: 3 },
            { name: 'James', score: 30, tries: 1 }
        ];
        expect(sortByTriesDescendingOrder(users)).toEqual(sortedUsers);
    });
});