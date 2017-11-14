import { fibonacci } from "../src/main";

describe('fibonacci', () => {
  it('seq #0 should be 0', () =>
    expect(fibonacci(0)).toEqual(0)
  );

  it('seq #1 should be 1', () =>
    expect(fibonacci(1)).toEqual(1)
  );

  it('seq #2 should be 1', () =>
    expect(fibonacci(2)).toEqual(1)
  );

  it('seq #3 should be 2', () =>
    expect(fibonacci(3)).toEqual(2)
  );

  it('seq #4 should be 3', () =>
    expect(fibonacci(4)).toEqual(3)
  );

  it('seq #20 should be 6765', () =>
    expect(fibonacci(20)).toEqual(6765)
  );
});