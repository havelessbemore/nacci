import { describe, expect, test } from "@jest/globals";
import { fillMatrix, initMatrix } from "./matrix";

describe("fillMatrix", () => {
  test("fills each element in the matrix with the specified value", () => {
    const matrix = initMatrix(2, 3);
    fillMatrix(matrix, 42);
    expect(matrix).toEqual([
      [42, 42, 42],
      [42, 42, 42],
    ]);
  });

  test("does nothing when trying to fill an empty matrix with zero dimensions", () => {
    const matrix: number[][] = [];
    fillMatrix(matrix, 42);
    expect(matrix).toEqual([]);
  });
});

describe("initMatrix", () => {
  test("creates a matrix with the specified number of rows and columns", () => {
    const result = initMatrix(3, 4);
    expect(result.length).toBe(3);
    expect(result.every((row) => row.length === 4)).toBe(true);
  });

  test("creates a square matrix when only one dimension is specified", () => {
    const result = initMatrix(3);
    expect(result.length).toBe(3);
    expect(result.every((row) => row.length === 3)).toBe(true);
  });

  test("creates an empty matrix for zero dimensions", () => {
    const result = initMatrix(0);
    expect(result.length).toBe(0);
  });
});
