/**
 * Basic calculator operations
 */

function sum(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number | null {
  if (b === 0) {
    return null; // decisión: retornar null en vez de lanzar error
  }
  return a / b;
}

/**
 * Expose functions to the browser
 */
(window as unknown as {
  sum: typeof sum;
  subtract: typeof subtract;
  multiply: typeof multiply;
  divide: typeof divide;
}).sum = sum;

(window as unknown as {
  subtract: typeof subtract;
}).subtract = subtract;

(window as unknown as {
  multiply: typeof multiply;
}).multiply = multiply;

(window as unknown as {
  divide: typeof divide;
}).divide = divide;