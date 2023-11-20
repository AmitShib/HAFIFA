import { map, filter } from '../ex4';

const users = [
    { name: 'James', score: 30, tries: 1 },
    { name: 'Mary', score: 110, tries: 4 },
    { name: 'Mary', score: 330, tries: 7 },
    { name: 'Mary', score: 500, tries: 10 },
    { name: 'Mary', score: 700, tries: 6 },
    { name: 'Henry', score: 80, tries: 3 },
    { name: 'Mary', score: 220, tries: 5 }
];

describe("ex4", () => {
    test("map", () => {
        const names = ['James', 'Mary', 'Mary', 'Mary', 'Mary', 'Henry', 'Mary'];
        expect(map(users, ({ name }) => name)).toEqual(names);
    });
    test("filter", () => {
        const usersWithScoreAbove220 = [
            { name: 'Mary', score: 330, tries: 7 },
            { name: 'Mary', score: 500, tries: 10 },
            { name: 'Mary', score: 700, tries: 6 },
        ];
        expect(filter(users, ({ score }) => score > 220)).toEqual(usersWithScoreAbove220);
    });
});
