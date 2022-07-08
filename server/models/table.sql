create table company(
    companyId SERIAL PRIMARY KEY,
    companyName VARCHAR(60),
    companyDescription TEXT,
    companyPhoneNo VARCHAR(20),
    companyEmailId VARCHAR(100),
    status VARCHAR(50),
    createdBy VARCHAR(60),
    createdDate DATE
)

create table individual(
    individualId SERIAL PRIMARY KEY,
    firstName VARCHAR(20),
    middleName VARCHAR(20),
    lastName VARCHAR(20),
    gender VARCHAR(10),
    dob DATE,
    emailId VARCHAR(100),
    phoneNo VARCHAR(20),
    address TEXT,
    tokenId BIGINT REFERENCES token(tokenId) ,
    companyId BIGINT REFERENCES company(companyId),
    createdBy VARCHAR(50),
    createdDate DATE
)


CREATE TABLE task(
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
    individualId BIGINT REFERENCES individuals(individualId)
)

create table team(
	teamid SERIAL PRIMARY KEY,
	teamName VARCHAR(60),
	teamdescription TEXT,
	activitystatus VARCHAR(60),
	supervisorId BIGINT REFERENCES supervisor(supervisorId),
	projectManagerId BIGINT REFERENCES projectManager(projectManagerId)
)

create table token(
    tokenId SERIAL PRIMARY KEY,
    tokenName VARCHAR(60),
    tokenDescription TEXT
)

create table projectManager(
    projectManagerId SERIAL PRIMARY KEY,
    firstName VARCHAR(30),
    middleName VARCHAR(30),
    lastName VARCHAR(30),
    gender VARCHAR(10),
    dob DATE,
    emailId VARCHAR(100),
    phoneNo VARCHAR(20),
    address TEXT,
    tokenId BIGINT REFERENCES token(tokenId),
    companyId BIGINT REFERENCES company(companyId)   
)

create table supervisor(
    supervisorId SERIAL PRIMARY KEY,
    firstName VARCHAR(30),
    middleName VARCHAR(30),
    lastName VARCHAR(30),
    gender VARCHAR(10),
    dob DATE,
    companyId BIGINT REFERENCES company(companyId),
    tokenId BIGINT REFERENCES token(tokenId),
    phoneNo VARCHAR(20),
    emailId VARCHAR(100),
    address TEXT
)

create table project(
    projectId SERIAL PRIMARY KEY,
    projectName VARCHAR(30),
    projectManagerId BIGINT REFERENCES projectManager(projectManagerId),
    companyId BIGINT REFERENCES company(companyid)
)

create table subProject(
    subProjectId SERIAL PRIMARY KEY,
    subProjectName VARCHAR(50),
    subProjectDetails TEXT,
    supervisorId BIGINT REFERENCES supervisor(supervisorId),
    companyId BIGINT REFERENCES company(companyId),
    projectId BIGINT REFERENCES project(projectId),
    projectManagerId BIGINT REFERENCES projectmanager(projectManagerId)
)

create table task(
    taskid SERIAL PRIMARY KEY,
    taskName VARCHAR(50),
    taskDescription TEXT,
    assignedTo VARCHAR(50),
    assignedBy VARCHAR(50),
    buildingId BIGINT,
    floorId BIGINT,
    zoneid BIGINT,
    taskPriority VARCHAR(50),
    taskSeverity VARCHAR(50),
    startDate DATE,
    endDate DATE,
    taskStatus VARCHAR(50),
    actionTaken VARCHAR(50),
    actionComment VARCHAR(50),
    actionDate DATE,
    projectId BIGINT REFERENCES project(projectId),
    subProjectId BIGINT REFERENCES subProject(subProjectId)
)