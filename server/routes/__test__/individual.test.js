// @ts-nocheck
const request = require("supertest");
const app = request("http://localhost:8000");

const individualPayload = {
  firstName: "Alice",
  middleName: "Lisa",
  lastName: "Thomson",
  gender: "Female",
  dob: "1999-12-31T18:30:00.000Z",
  emailId: "abc@gmail.com",
  phoneNo: "1234567890",
  tokenId: "1",
  companyId: "1",
};

describe("add an individual", () => {
  it("should return a status code 201 and Individual Created", async () => {
    const response = await app
      .post("/api/v1/individuals")
      .send(individualPayload);
    expect(response.status).toEqual(201);
    expect(response.text).toEqual("Individual Created");
  });
  it("should check firstName existence", async () => {
    const response = await app.post("/api/v1/individuals").send({
      middleName: "Lisa",
      lastName: "Thomson",
      gender: "Female",
      dob: "1999-12-31T18:30:00.000Z",
      emailId: "abc@gmail.com",
      phoneNo: "1234567890",
      tokenId: "1",
      companyId: "1",
    });
    expect(response.status).toEqual(400);
    expect(response.text).toEqual('["Required field"]');
  });
  it("should check firstName minimum length", async () => {
    const response = await app
      .post("/api/v1/individuals")
      .send({ ...individualPayload, firstName: "A" });
    expect(response.status).toEqual(400);
    expect(response.text).toEqual(
      '["The first name must be atleast 2 characters"]'
    );
  });
  it("should check middleName minimum length", async () => {
    const response = await app.post("/api/v1/individuals").send({
      ...individualPayload,
      middleName: "A",
    });
    expect(response.status).toEqual(400);
    expect(response.text).toEqual(
      '["The middle name must be atleast 2 characters"]'
    );
  });
  it("should check lastName existence", async () => {
    const response = await app.post("/api/v1/individuals").send({
      firstName: "Alice",
      middleName: "Lisa",
      gender: "Female",
      dob: "1999-12-31T18:30:00.000Z",
      emailId: "abc@gmail.com",
      phoneNo: "1234567890",
      tokenId: "1",
      companyId: "1",
    });
    expect(response.status).toEqual(400);
    expect(response.text).toEqual('["Required field"]');
  });
  it("should check lastName minimum length", async () => {
    const response = await app.post("/api/v1/individuals").send({
      ...individualPayload,
      lastName: "A",
    });
    expect(response.status).toEqual(400);
    expect(response.text).toEqual(
      '["The last name must be atleast 2 characters"]'
    );
  });
  it("should check gender existence", async () => {
    const response = await app.post("/api/v1/individuals").send({
      firstName: "Alice",
      middleName: "Lisa",
      lastName: "Thomson",
      dob: "1999-12-31T18:30:00.000Z",
      emailId: "abc@gmail.com",
      phoneNo: "1234567890",
      tokenId: "1",
      companyId: "1",
    });
    expect(response.status).toEqual(400);
    expect(response.text).toEqual('["Required field"]');
  });
  it("should check invalid gender", async () => {
    const response = await app.post("/api/v1/individuals").send({
      ...individualPayload,
      gender: "M",
    });
    expect(response.status).toEqual(400);
    expect(response.text).toEqual(
      '["Gender must match one of the following: Male, Female or Others"]'
    );
  });
  it("should check dob existence", async () => {
    const response = await app.post("/api/v1/individuals").send({
      firstName: "Alice",
      middleName: "Lisa",
      lastName: "Thomson",
      gender: "Female",
      emailId: "abc@gmail.com",
      phoneNo: "1234567890",
      tokenId: "1",
      companyId: "1",
    });
    expect(response.status).toEqual(400);
    expect(response.text).toEqual('["Required field"]');
  });
  it("should check invalid email", async () => {
    const response = await app.post("/api/v1/individuals").send({
      ...individualPayload,
      emailId: "abcgmail.com",
    });
    expect(response.status).toEqual(400);
    expect(response.text).toEqual('["Email is not valid"]');
  });

  it("should check phoneNo existence", async () => {
    const response = await app.post("/api/v1/individuals").send({
      firstName: "Alice",
      middleName: "Lisa",
      lastName: "Thomson",
      gender: "Female",
      dob: "1999-12-31T18:30:00.000Z",
      emailId: "abc@gmail.com",
      tokenId: "1",
      companyId: "1",
    });
    expect(response.status).toEqual(400);
    expect(response.text).toEqual('["Required field"]');
  });
  it("should check phoneNo minimum length", async () => {
    const response = await app.post("/api/v1/individuals").send({
      ...individualPayload,
      phoneNo: "123456789",
    });
    expect(response.status).toEqual(400);
    expect(response.text).toEqual('["Minimum 10 numbers required"]');
  });
  it("should check tokenId existence", async () => {
    const response = await app.post("/api/v1/individuals").send({
      firstName: "Alice",
      middleName: "Lisa",
      lastName: "Thomson",
      gender: "Female",
      dob: "1999-12-31T18:30:00.000Z",
      emailId: "abc@gmail.com",
      phoneNo: "1234567890",
      companyId: "1",
    });
    expect(response.status).toEqual(400);
    expect(response.text).toEqual('["Required field"]');
  });
  it("should check companyId existence", async () => {
    const response = await app.post("/api/v1/individuals").send({
      firstName: "Alice",
      middleName: "Lisa",
      lastName: "Thomson",
      gender: "Female",
      dob: "1999-12-31T18:30:00.000Z",
      emailId: "abc@gmail.com",
      phoneNo: "1234567890",
      tokenId: "1",
    });
    expect(response.status).toEqual(400);
    expect(response.text).toEqual('["Required field"]');
  });
});
describe("get a list of individuals", () => {
  it("should return a status code of 200 and respond with json containing a list of individuals ", async () => {
    const response = await app.get("/api/v1/individuals");
    expect(response.status).toEqual(200);
  });
});
