import request from "supertest";
import app from "../../src/app";

describe("GET /v1/status - Success", () => {
  it("should return status code 200", async () => {
    const response = await request(app).get("/v1/status");

    expect(response.status).toBe(200);
  });

  it("should return message ok", async () => {
    const response = await request(app).get("/v1/status");

    expect(response.body.message).toBe("ok");
  });
});
