create table company(
    companyId SERIAL PRIMARY KEY,
    companyName VARCHAR(60),
    companyDescription TEXT,
    companyPhoneno VARCHAR(20),
    companyEmailid VARCHAR(50),
    status VARCHAR(50),
    createdBy VARCHAR(60),
    createdDate DATE
)

create table individual(
    individualid SERIAL PRIMARY KEY,
    firstName VARCHAR(20),
    middleName VARCHAR(20),
    lastName VARCHAR(20),
    gender VARCHAR(10),
    dob DATE,
    emailId VARCHAR(50),
    phoneNo VARCHAR(20),
    address TEXT,
    tokenId BIGINT REFERENCES token(tokenid) ,
    companyId BIGINT REFERENCES company(companyid),
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
    individualId BIGINT REFERENCES individuals(individualsid)
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
    tokenId SERIAL PRIMARY KEY,
    tokenName VARCHAR(60),
    tokenDescription TEXT,
    hardwareId BIGINT
)

create table projectManager(
    projectManagerId SERIAL PRIMARY KEY,
    firstName VARCHAR(30),
    middleName VARCHAR(30),
    lastName VARCHAR(30),
    gender VARCHAR(10),
    dob DATE,
    companyId BIGINT REFERENCES company(companyid),
    tokenid BIGINT REFERENCES token(tokenid),
    phoneNo VARCHAR(20),
    emailId VARCHAR(30),
    address TEXT
)

create table superVisor(
    superVisorId SERIAL PRIMARY KEY,
    firstName VARCHAR(30),
    middleName VARCHAR(30),
    lastName VARCHAR(30),
    gender VARCHAR(10),
    dob DATE,
    companyId BIGINT REFERENCES company(companyid),
    tokenid BIGINT REFERENCES token(tokenid),
    phoneNo VARCHAR(20),
    emailId VARCHAR(30),
    address TEXT
)