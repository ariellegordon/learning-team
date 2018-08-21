const expect = require("chai").expect;
const { db, Unicorn } = require("../server/unicorn");

describe("Unicorn", () => {
  before(() => {
    return db.sync({ force: true });
  });
  afterEach(() => {
    return db.sync({ force: true });
  });
});

describe("Model methods", function() {
  beforeEach(() => {
    return Promise.all([
      Unicorn.create({
        name: "Quirin",
        imageUrl:
          "https://about-mythical-creatures.weebly.com/uploads/9/3/4/7/9347709/7353641_orig.jpg",
        age: 5000
      }),
      Unicorn.create({
        name: "Dabby",
        imageUrl:
          "https://i.pinimg.com/originals/f4/a0/e8/f4a0e8658deda92fa9b21b003f148853.jpg",
        age: 8
      })
    ]);
  });
  describe("Hooks", () => {
    it("capitalizes the first letter of the Unicorn name", async () => {
      const rainicorn = await Unicorn.create({
        name: "lAdY rAinIcOrN",
        imageUrl:
          "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/f/f6/Jake_w_lady.png/revision/latest?cb=20120729200735",
        age: 18
      });
      expect(rainicorn.name).to.equal("Lady Rainicorn");
    });
  });
});
