var counter = {
  currentValues: function (val) {
    return val;
  },
};

function sumOfValues(val) {
  return counter.currentValues(val);
}

describe("mock and spy", function () {
  //spy on counter object currentValue property and mock its implementation to equal [100]
  // expect some of values is returning the right value (new mocked value 100) after mocking
  // and expect that we called the spy function for one time
  it("spying", function () {
    var Counter = counter;
    expect(sumOfValues(20)).toEqual(20);
    spyOn(Counter, "currentValues");
    sumOfValues(100);
    expect(Counter.currentValues).toHaveBeenCalledOnceWith(100);
    expect(Counter.currentValues).toHaveBeenCalledTimes(1);
  });
});
