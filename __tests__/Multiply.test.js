const multiply = require('../src/Multiply.js');
//const assert = require("chai").assert;

describe("multiply", () => {
  it("fixed tests", () => {
    expect(multiply(1,1)).toBe(1)
    expect(multiply(2,1)).toBe(2)
    expect(multiply(2,2)).toBe(4)
    expect(multiply(3,5)).toBe(15)
  });

  it('random tests', () => {
    for(let i=0; i<100; i++) {
      let [a,b] = [Math.random()*100|0, Math.random()*100|0];
     expect(multiply(a,b)).toBe (a*b);
    }
 });
});