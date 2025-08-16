import { sum } from "./Sum";

test("Testing sum file.", () => {
    let a = 10;
    let b = 20;
    let opt = 30;
    expect(sum(a,b)).toBe(opt)
});

test("Testing sum file 2", () => {
    let a = 40;
    let b = 20;
    let opt = 60;
    expect(sum(a,b)).toBe(opt)
});