import { maxValue } from '../ex3';

describe("ex3", () => {
    test("maxValue", () => {
        expect(maxValue("id,name,age,act.,room,dep.\n1,Jack,68,T,13,8\n17,Betty,28,F,15,7", "age")).toEqual(68);
        expect(maxValue("id,name,age,act.,room,dep.\n1,Jack,68,T,13,8\n17,Betty,28,F,15,7", "room")).toEqual(15);
        expect(maxValue("id,name,age,act.,room,dep.\n1,Jack,68,T,13,8\n17,Betty,28,F,15,7", "dep.")).toEqual(8);
    });
});
