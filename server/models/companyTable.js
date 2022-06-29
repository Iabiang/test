const { Client } = require("pg");

const client = new Client({
  host: "127.0.0.1",
  user: "postgres",
  database: "pts",
  password: "password",
  port: 5432,
});

const execute = async (query) => {
  try {
    await client.connect(); // gets connection
    await client.query(query); // sends queries
    return true;
  } catch (error) {
    console.error(error.stack);
    return false;
  } finally {
    await client.end(); // closes connection
  }
};
const Table = `
create table company(
    companyid	SERIAL PRIMARY KEY,
    companyName	TEXT,
    companyDescription	TEXT,
    companyPhoneNo	BIGINT,
    companyEmail	VARCHAR(50),
    companyStatus	VARCHAR(50)
);`;

execute(Table).then((result) => {
  if (result) {
    console.log("Table created");
  }
});
