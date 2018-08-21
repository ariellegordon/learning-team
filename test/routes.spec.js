const expect = require("chai").expect;
const request = require("supertest");

const app = require("../server/app");
const agent = request.agent(app);

const { db, Unicorn } = require("../server/unicorn");

describe("All Unicorn Route: ", () => {
  before(() => {
    return db.sync({ force: true });
  });

  afterEach(() => {
    return db.sync({ force: true });
  });

  describe("GET /unicorns", () => {
    it("responds with an array via JSON", () => {
      return agent
        .get("/api/unicorns")
        .expect("Content-Type", /json/)
        .expect(200)
        .expect(res => {
          expect(res.body).to.be.an.instanceOf(Array);
          expect(res.body).to.have.length(0);
        });
    });
    it("returns unicorn if there is one", () => {
      let unicorn = Unicorn.create({
        name: "Mr. Unicorn",
        age: 30
      });
      return agent
        .get("/api/unicorns")
        .expect(200)
        .expect(res => {
          expect(res.body).to.be.an.instanceOf(Array);
          expect(res.body).to.have.length(1);
          expect(res.body[0].name).to.equal("Mr. Unicorn");
        });
    });
  });
});
