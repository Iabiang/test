create table individuals(
    individualid SERIAL,
    firstName VARCHAR(30),
    lastname VARCHAR(30),
    gender VARCHAR(10),
    dob DATE,
    companyid BIGINT,
    teamid  BIGINT,
    projectid BIGINT,
    subprojectid BIGINT,
    supervisorid BIGINT,
    projectmanagerid BIGINT,
    taskid BIGINT,
    phoneno BIGINT,
    address TEXT
)