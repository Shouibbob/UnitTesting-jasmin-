var MathUtils = require("../index");

describe("testing math utilities", () => {
  let pos_vals;
  let neg_vals;
  let vals;
  let sum_of_vals;
  // at before all assign pos vals with array of positive numbers,

  // and assign negative vals with negative array of numbers,

  // assign vals to pos_vals.concat(neg_vals);

  // assign  sum_of_vals to vals.reduce((x, y) => x + y, 0));

  // at before each console.log all vals

  // at after each console.log done

  // at after all set all variables to 0
  beforeAll(() => {
    pos_vals = [1, 2, 3, 4, 5, 6];
    neg_vals = [-1, -2, -3, -4, -5, -6];
    vals = [2, 4, 3];
    sum_of_vals = vals.reduce((x, y) => x + y, 0);
  });
  beforeEach(() => {
    pos_vals.filter((item) => {
      console.log(item);
    });
    neg_vals.filter((item) => {
      console.log(item);
    });
    console.log(sum_of_vals);
  });
  afterAll(() => {
    pos_vals = 0;
    console.log(pos_vals);
    neg_vals = 0;
    console.log(neg_vals);
    vals = 0;
    console.log(vals);
    sum_of_vals = 0;
    console.log(sum_of_vals);
  });
  afterEach(() => {
    console.log("done");
  });
  describe("test sum function", () => {
    it("sum function should equal to sum of the values", () => {
      expect(MathUtils.sum(vals)).toEqual(9);
    });
  });
  describe("test positive function", () => {
    it("positive function should equal to positive values", () => {
      expect(MathUtils.positive(vals)).toEqual(vals);
      expect(MathUtils.positive([-1, 4, -2])).toEqual([4]);
      //expect(MathUtils.positive([-1, -2, -2])).toEqual([-1, -2, -2]);
    });
  });
});
