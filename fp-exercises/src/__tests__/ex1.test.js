"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ramda_1 = require("ramda");
var ex1_1 = require("../ex1");
var scores = [-10, 6, 20, 50, 100, -3, 75, 170, 80, 96, 0, 100, 89, 9, 219];
describe("ex1", function () {
    test("removeOverScores", function () {
        expect((0, ex1_1.removeOverScores)(scores)).toEqual([-10, 6, 20, 50, 100, -3, 75, 80, 96, 0, 100, 89, 9]);
        expect((0, ex1_1.removeOverScores)([])).toEqual([]);
        expect((0, ex1_1.removeOverScores)([20, 100, -3])).toEqual([20, 100, -3]);
    });
    test("boostSingleScores", function () {
        expect((0, ex1_1.boostSingleScores)(scores)).toEqual([-100, 60, 20, 50, 100, -30, 75, 170, 80, 96, 0, 100, 89, 90, 219]);
        expect((0, ex1_1.boostSingleScores)([])).toEqual([]);
    });
    test("secondMaximum", function () {
        expect((0, ex1_1.secondMaximum)([10, 5, 7, 3, 6])).toEqual(7);
        expect((0, ex1_1.secondMaximum)([10, 10, 9])).toEqual(9);
        expect((0, ex1_1.secondMaximum)([10, 10])).toEqual(10);
    });
    test("getDividers", function () {
        expect((0, ex1_1.getDividers)(-5)).toEqual([]);
        expect((0, ex1_1.getDividers)(0)).toEqual([]);
        expect((0, ex1_1.getDividers)(1)).toEqual([]);
        expect((0, ex1_1.getDividers)(2)).toEqual([1]);
        expect((0, ex1_1.getDividers)(3)).toEqual([1]);
        expect((0, ex1_1.getDividers)(4)).toEqual([1, 2]);
        expect((0, ex1_1.getDividers)(5)).toEqual([1]);
        expect((0, ex1_1.getDividers)(6)).toEqual([1, 2, 3]);
        expect((0, ex1_1.getDividers)(7)).toEqual([1]);
        expect((0, ex1_1.getDividers)(8)).toEqual([1, 2, 4]);
        expect((0, ex1_1.getDividers)(9)).toEqual([1, 3]);
        expect((0, ex1_1.getDividers)(10)).toEqual([1, 2, 5]);
        expect((0, ex1_1.getDividers)(11)).toEqual([1]);
        expect((0, ex1_1.getDividers)(12)).toEqual([1, 2, 3, 4, 6]);
        expect((0, ex1_1.getDividers)(13)).toEqual([1]);
        expect((0, ex1_1.getDividers)(14)).toEqual([1, 2, 7]);
        expect((0, ex1_1.getDividers)(15)).toEqual([1, 3, 5]);
        expect((0, ex1_1.getDividers)(16)).toEqual([1, 2, 4, 8]);
        expect((0, ex1_1.getDividers)(17)).toEqual([1]);
        expect((0, ex1_1.getDividers)(18)).toEqual([1, 2, 3, 6, 9]);
        expect((0, ex1_1.getDividers)(19)).toEqual([1]);
        expect((0, ex1_1.getDividers)(20)).toEqual([1, 2, 4, 5, 10]);
    });
    test("isPrime", function () {
        var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409];
        var numbers = (0, ramda_1.range)(-10, 409);
        expect(numbers.map(ex1_1.isPrime)).toEqual(numbers.map((0, ramda_1.includes)(ramda_1.__, primes)));
    });
});
