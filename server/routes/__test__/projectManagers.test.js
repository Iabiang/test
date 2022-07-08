// @ts-nocheck
const request = require("supertest");
const app = request("http://localhost:8000");

describe("add a project manager", () => {
  it("returns a status code 201 if post query is successful", async () => {
    const response = await app.post("/api/v1/project_managers/").send({
      firstName: "pay",
      middleName: "ray",
      lastName: "pay",
      gender: "Male",
      dob: "1999-12-31T18:30:00.000Z",
      companyId: "1",
      tokenId: "1",
      phoneNo: "7894512365",
      emailId: "abc@gmailc.om",
      address: "malkei",
    });
    expect(response.status).toEqual(201);
    expect(response.text).toEqual("Project Manager Created");
  });
  it("checks firstname existence", async () => {
    const res = await app.post("/api/v1/project_managers/").send({
      middleName: "ray",
      lastName: "pay",
      gender: "Male",
      dob: "1999-12-31T18:30:00.000Z",
      companyId: "1",
      tokenId: "1",
      phoneNo: "7894512365",
      emailId: "abc@gmailc.om",
      address: "malkei",
    });
    expect(res.status).toEqual(400);
    expect(res.text).toEqual('["Required field"]');
  });

  it("checks firstname  min length", async () => {
    const res = await app.post("/api/v1/project_managers/").send({
      firstName: "h",
      middleName: "ray",
      lastName: "pay",
      gender: "Male",
      dob: "1999-12-31T18:30:00.000Z",
      companyId: "1",
      tokenId: "1",
      phoneNo: "7894512365",
      emailId: "abc@gmailc.om",
      address: "malkei",
    });
    expect(res.status).toEqual(400);
    expect(res.text).toEqual('["The first name must be atleast 2 characters"]');
  });
});
