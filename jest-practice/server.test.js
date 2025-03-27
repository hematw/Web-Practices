const request = require("supertest");
const app = require("./server");
const { describe, it, expect, beforeAll, beforeEach } = require("@jest/globals");

describe("GET /", () => {
  it("status code should be 200", async () => {
    const response = await request(app)
      .get("/")
      .expect(200)
      .expect("Content-Type", /text/);

    expect(response.text).toBe("get route");
    // expect(response.statusCode).toBe(200);
  });
});

describe("POST /", () => {
  beforeEach(() => {
    console.log("beforeAll 😂😂😂😂");
  });

  it("should return post route", async () => {
    const res = await request(app)
      .post("/")
      .send({ name: "Hemat" })
      .expect(200);
    expect(res.body).toEqual({ name: "Hello Hemat" });
  });

  it("should return bad request", async () => {
    const res = await request(app)
      .post("/")
      .send({ name1: "Hemat" })
      .expect(400);
    expect(res.body).toEqual({ error: "name is required" });
  });
});
