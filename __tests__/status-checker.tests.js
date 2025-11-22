import {
  isGameOver,
  checkRow,
  checkColumn,
  checkDiagonal,
} from "../status-checker";

describe("to check if the game is over ", () => {
  test("is the game over?", () => {
    expect(
      isGameOver([
        [0, 0],
        [0, 1],
        [0, 2],
      ])
    ).toBe(true);
    expect(
      isGameOver([
        [0, 1],
        [1, 1],
        [2, 1],
      ])
    ).toBe(true);
    expect(
      isGameOver([
        [0, 0],
        [1, 1],
        [2, 2],
      ])
    ).toBe(true);
  });
  test("is game not over yet", () => {
    expect(
      isGameOver([
        [0, 0],
        [0, 1],
        [1, 1],
      ])
    ).toBe(false);
    expect(
      isGameOver([
        [1, 0],
        [0, 1],
        [1, 1],
      ])
    ).toBe(false);
    expect(
      isGameOver([
        [0, 0],
        [2, 1],
        [1, 1],
      ])
    ).toBe(false);
  });
});

describe("");
