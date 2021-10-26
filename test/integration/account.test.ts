import request from "supertest";
import app from "../../src/app";

const json = {
  fullName: "Luiz Rogério",
  email: "lrbengozi@gmail.com",
  senha: "senhasupersecreta",
};

describe("POST /api/v1/account - Success", () => {
  it("should create a new account", async () => {
    const response = await request(app).post("/api/v1/account").send(json);

    expect(response.status).toBe(201);
    expect(response.body.message).toBe("Account opened successfully");
    expect(parseInt(response.body.data.agency)).toEqual(expect.any(Number));
    expect(parseInt(response.body.data.account)).toEqual(expect.any(Number));
    expect(parseInt(response.body.data.accountDv)).toEqual(expect.any(Number));
  });
});

describe("POST /api/v1/account - Fail", () => {
  it("Don't should create a new account", async () => {
    const response = await request(app).post("/api/v1/account").send(json);

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("This email is already registered");
  });
});
