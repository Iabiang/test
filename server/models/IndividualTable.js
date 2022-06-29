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
create table individual(
  individualid SERIAL PRIMARY KEY,
  firstName VARCHAR(20),
  lastname VARCHAR(20),
  gender VARCHAR(10),
  dob DATE,
  phoneno BIGINT,
  emailid VARCHAR(50),
  address TEXT,
  tokenid BIGINT REFERENCES token(tokenid)
  companyid BIGINT REFERENCES company(companyid),
  teamid BIGINT REFERENCES team(teamid),
  projectid BIGINT REFERENCES project(projectid),
  subprojectid ,
  supervisorid ,
  projectmanagerid ,
);`;

execute(Table).then((result) => {
  if (result) {
    console.log("Table created");
  }
});
