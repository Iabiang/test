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
  it("should check projectName existence", async () => {
    const response = await app.post("/api/v1/projects").send({
      projectManagerId: "1",
      companyId: "1",
    });
    expect(response.status).toEqual(400);
    expect(response.text).toEqual('["Required field"]');
  });
  it("should check projectName minimum length", async () => {
    const response = await app.post("/api/v1/projects").send({
      projectName: "S",
      projectManagerId: "1",
      companyId: "1",
    });
    expect(response.status).toEqual(400);
    expect(response.text).toEqual(
      '["The project name must be atleast 2 characters"]'
    );
  });
  it("should check projectManagerId existence", async () => {
    const response = await app.post("/api/v1/projects").send({
      projectName: "Maintenance Project",
      companyId: "1",
    });
    expect(response.status).toEqual(400);
    expect(response.text).toEqual('["Required field"]');
  });
  it("should check companyId existence", async () => {
    const response = await app.post("/api/v1/projects").send({
      projectName: "Maintenance Project",
      projectManagerId: "1",
    });
    expect(response.status).toEqual(400);
    expect(response.text).toEqual('["Required field"]');
  });
});

describe("get a list of projects", () => {
  it("should return a status code of 200 and respond with json containing a list of projects ", async () => {
    const response = await app.get("/api/v1/projects");
    expect(response.status).toEqual(200);
  });
});

describe("get the total number of projects", () => {
  it("should return a status code of 200 and the total number of projects", async () => {
    const response = await app.get(`/api/v1/projects/count`);
    expect(response.status).toEqual(200);
  });
});
describe("get a project", () => {
  it("should return a status code of 200 and a project", async () => {
    const project_id = "1";
    const response = await app.get(`/api/v1/projects/${project_id}`);
    expect(response.status).toEqual(200);
  });
});
