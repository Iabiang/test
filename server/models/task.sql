create table company(
    companyId SERIAL PRIMARY KEY,
    companyName VARCHAR(60),
    companyDescription VARCHAR(200),
    companyPhoneno BIGINT,
    companyEmailid VARCHAR(50),
    status VARCHAR(50),
    createdBy VARCHAR(60),
    createdDate DATE
)

create table individual(
    individualid SERIAL PRIMARY KEY,
    firstName VARCHAR(20),
    middleName VARCHAR(20),
    lastname VARCHAR(20),
    gender VARCHAR(10),
    dob DATE,
    emailid VARCHAR(50),
    phoneno BIGINT,
    address TEXT,
    tokenid BIGINT REFERENCES token(tokenid) ,
    companyid BIGINT REFERENCES company(companyid),
    createdBy VARCHAR(50),
    createdDate DATE
)


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
)

create table team(
	teamid SERIAL PRIMARY KEY,
	teamName VARCHAR(60),
	teamdescription TEXT,
	activitystatus VARCHAR(60),
	supervisorid BIGINT,
	projectmanagerid BIGINT
)

create table token(
    tokenid SERIAL PRIMARY KEY,
    tokenname VARCHAR(60),
    tokendescription TEXT,
    hardwareid BIGINT
)