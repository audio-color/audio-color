const app = require("../app.js");

describe("This is an app test", () => {
  it("this should test the range function", () => {
    const number1 = 0;
    const number2 = 4;
    expect(app.range(number1, number2)).toStrictEqual([0, 1, 2, 3]);
  });

  it("This should test something in app", () => {
    const num = 1;
    expect(app.validateParam(num)).toStrictEqual(true);
  });

  it("This should throw in validateParam function", () => {
    const num = 11;
    if (num < 0 || num > 10) {
      console.log("from validate param", app.validateParam(num));
      expect(app.validateParam(num)).toEqual("invalid parameter");
    }
  });
});


