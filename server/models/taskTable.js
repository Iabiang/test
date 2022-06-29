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
create table task(
    taskId	SERIAL PRIMARY KEY,
    taskName VARCHAR(150),
    taskDescription	VARCHAR(150),
    assignedTo	VARCHAR(150),
    assignedBy	VARCHAR(150),
    buildingId	BIGINT,
    floorId	BIGINT,
    zoneId	BIGINT,
    taskPriority	VARCHAR(150),
    taskSeverity	VARCHAR(150),
    startDate	DATE,
    endDate	DATE,
    taskStatus	VARCHAR(150),
    actionTaken	VARCHAR(150),
    actionComment	VARCHAR(150),
    actionDate	VARCHAR(150),
    projectId	BIGINT,
    subProjectId	BIGINT,
    individualsid BIGINT REFERENCES individuals(individualsid)
);`;

execute(Table).then((result) => {
  if (result) {
    console.log("Table created");
  }
});

module.exports = { Tables };
const tablename = `
`;
