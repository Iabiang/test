const request = require("supertest");
const app = request("http://localhost:8000");

describe("getlistProject and create project", () => {
  it("returns status code 200 if get query is success", async () => {
    const res = await app.get("/api/v1/project_managers/");
    expect(res.statusCode).toEqual(200);
  });
  it("returns a status code 201 if post query is success", async () => {
    const res = await app.post("/api/v1/project_managers/").send({
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
    expect(res.statusCode).toEqual(201);
    expect(res.text).toEqual("Project Manager Created");
  });
  it("checks firstname existance", async () => {
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
    expect(res.statusCode).toEqual(400);
    expect(res.text).toEqual('["firstName is a required field"]');
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
    expect(res.statusCode).toEqual(400);
    expect(res.text).toEqual('["firstName must be at least 2 characters"]');
  });

  it("checks firstname max length", async () => {
    const res = await app.post("/api/v1/project_managers/").send({
      firstName:
        "halkdsfjlkajfljdfkjdfklsdklfaskfjklsafklsjfjsa;kflsakjfljf;lkja;lksfj",
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
    expect(res.statusCode).toEqual(400);
    expect(res.text).toEqual('["firstName must be at most 20 characters"]');
  });

  it("checks middlename max length", async () => {
    const res = await app.post("/api/v1/project_managers/").send({
      firstName: "Ronaldo",
      lastName: "pay",
      gender: "Male",
      dob: "1999-12-31T18:30:00.000Z",
      companyId: "1",
      tokenId: "1",
      phoneNo: "7894512365",
      emailId: "abc@gmailc.om",
      address: "malkei",
    });
    expect(res.statusCode).toEqual(400);
    expect(res.text).toEqual('["middlename is a required field"]');
  });
});
