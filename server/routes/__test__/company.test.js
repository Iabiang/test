// @ts-nocheck
const request = require("supertest");
const app = request("http://localhost:8000");

describe("add a company", () => {
  it("should return a status code 201 and Company Created", async () => {
    const response = await app.post("/api/v1/companies").send({
      companyName: "NCC",
      companyDescription: "Construction Company",
      companyPhoneNo: "8837426635",
      companyEmailId: "ncc@gmail.com",
      status: "Active",
    });
    expect(response.status).toEqual(201);
    expect(response.text).toEqual("Company Created");
  });

  it("should return a status code 400", async () => {
    const response = await app.post("/api/v1/companies").send({
      companyName: "A",
      companyDescription: "Construction Company",
      companyPhoneNo: "8837426635",
      companyEmailId: "ncc@gmail.com",
      status: "Active",
    });
    expect(response.status).toEqual(400);
  });
});

describe("get a list of companies", () => {
  it("should return a status code of 200 and respond with json containing a list of companies ", async () => {
    const response = await app.get("/api/v1/companies");
    expect(response.status).toEqual(200);
  });
  it("should return a status code of 200 and respond with json containing a list of companies where status is Active", async () => {
    const status = "Active";
    const response = await app.get(
      `/api/v1/companies/findByStatus?status=${status}`
    );
    expect(response.status).toEqual(200);
  });
  it("should return a status code of 200 and respond with json containing a list of companies where status is Inactive", async () => {
    const status = "Inactive";
    const response = await app.get(
      `/api/v1/companies/findByStatus?status=${status}`
    );
    expect(response.status).toEqual(200);
  });
});

describe("get the total number of companies", () => {
  it("should return a status code of 200 and the total number of companies", async () => {
    const response = await app.get(`/api/v1/companies/count`);
    expect(response.status).toEqual(200);
  });
});

describe("get a company", () => {
  it("should return a status code of 200 and the company", async () => {
    const company_id = "1";
    const response = await app.get(`/api/v1/companies/${company_id}`);
    expect(response.status).toEqual(200);
  });
});
