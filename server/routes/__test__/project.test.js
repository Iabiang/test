// @ts-nocheck
const request = require("supertest");
const app = request("http://localhost:8000");

describe("add a project", () => {
  it("should return a status code 201 and Project Created", async () => {
    const response = await app.post("/api/v1/projects").send({
      projectName: "Maintenance Project",
      projectManagerId: "1",
      companyId: "1",
    });
    expect(response.status).toEqual(201);
    expect(response.text).toEqual("Project Created");
  });

  it("should return a status code 400", async () => {
    const response = await app.post("/api/v1/projects").send({
      projectName: "A",
      projectManagerId: "1",
      companyId: "1",
    });
    expect(response.status).toEqual(400);
  });
});

describe("get a list of projects", () => {
  it("should return a status code of 200 and respond with json containing a list of projects ", async () => {
    const response = await app.get("/api/v1/projects");
    expect(response.status).toEqual(200);
  });
});
