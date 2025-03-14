import { add, subtract, multiply, divide } from "./index";

// Test for add()

test("add() correctly adds two numbers", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});

test("add() returns a negative value if the greater argument is negative", () => {
  const result = add(2, -3);
  expect(result).toBeLessThan(0);
});

test("add() returns a value close to 0.3 if called with add(0.1, 0.2)", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});

// Test for substract()

test("subtract() correctly subtracts two numbers", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});

test("subtract() returns a negative value if the second argument is greater than the first one", () => {
  const result = subtract(-15, 5);
  expect(result).toBeLessThan(0);
});

// Test for multiply()

test("multiply() correctly multiplies two numbers", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});

test("multiply() returns a negative value if only the first argument is negative", () => {
  const result = multiply(-2, 4);
  expect(result).toBeLessThan(0);
});

test("multiply() returns a negative value if only the second argument is negative", () => {
  const result = multiply(2, -4);
  expect(result).toBeLessThan(0);
});

test("multiply() returns a positive value if called with two negative arguments", () => {
  const result = multiply(-2, -4);
  expect(result).toBeGreaterThan(0);
});

// Test for divide()

test("divide() divides two numbers correctly", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});

test("divide() returns 'You should not do this!' if called with 0 as second argument", () => {
  const result = divide(9, 0);
  expect(result).toBe("You should not do this!");
});
//   export function subtract(a, b) {
//     return a - b;
//   }

//   export function multiply(a, b) {
//     return a * b;
//   }

//   export function divide(a, b) {
//     if (b === 0) {
//       return "You should not do this!";
//     }

//     return a / b;
//   }
