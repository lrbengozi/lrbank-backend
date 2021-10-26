import request from "supertest";
import app from "../../src/app";

const json = {
  fullName: "Luiz Rogério",
  email: "lrbengozi@gmail.com",
  senha: "senhasupersecreta",
};

describe("POST /v1/account - Success", () => {
  it("should create a new account", async () => {
    const response = await request(app).post("/v1/status").send(json);

    expect(response.status).toBe(201);
    expect(response.body.message).toBe("Account opened successfully");
    expect(response.body.data.agency).toBe(Number);
    expect(response.body.data.account).toBe(Number);
    expect(response.body.data.accountDv).toBe(Number);
  });
});

describe("POST /v1/account - Fail", () => {
  it("Don't should create a new account", async () => {
    const response = await request(app).post("/v1/status").send(json);

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("This email is already registered");
  });
});
