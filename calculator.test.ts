declare global {
  interface Window {
    sum: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
    multiply: (a: number, b: number) => number;
    divide: (a: number, b: number) => number | null;
  }
}

import "./calculator.js";

describe("Calculator", () => {

  test("sum positive numbers", () => {
    expect(window.sum(2, 3)).toBe(5);
  });

  test("subtract positive numbers", () => {
    expect(window.subtract(5, 3)).toBe(2);
  });

  test("multiply positive numbers", () => {
    expect(window.multiply(4, 3)).toBe(12);
  });

  test("divide positive numbers", () => {
    expect(window.divide(10, 2)).toBe(5);
  });

  test("operations with zero", () => {
    expect(window.sum(5, 0)).toBe(5);
    expect(window.multiply(5, 0)).toBe(0);
  });

  test("operations with negative numbers", () => {
    expect(window.sum(-3, 2)).toBe(-1);
    expect(window.subtract(-3, -3)).toBe(0);
    expect(window.multiply(-2, 4)).toBe(-8);
  });

  test("division by zero", () => {
    expect(window.divide(10, 0)).toBeNull();
  });

});

export {};