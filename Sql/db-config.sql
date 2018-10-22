-- CREATE TABLE emps (
--     id VARCHAR(255) NOT NULL,
--     firstName VARCHAR(50) NOT NULL,
--     lastName VARCHAR(50) NOT NULL,
--     email VARCHAR(150) NOT NULL,
--     hash VARCHAR(255) NOT NULL,
--     PRIMARY KEY (id),
--     UNIQUE KEY email (email)
-- );
-- CREATE TABLE busns (
--     id VARCHAR(255) NOT NULL,
--     name VARCHAR(50) NOT NULL,
--     email VARCHAR(150) NOT NULL,
--     hash VARCHAR(255) NOT NULL,
--     lat FLOAT(11, 7) NOT NULL,
--     lng FLOAT(11, 7) NOT NULL,
--     PRIMARY KEY (id),
--     UNIQUE KEY email (email)
-- );
CREATE TABLE busnEmps (
    id int NOT NULL AUTO_INCREMENT,
    empId VARCHAR(255) NOT NULL,
    busnId VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    INDEX empsAndBusns (empId, busnId),
    FOREIGN KEY (empId) 
        REFERENCES emps(id)
        ON DELETE CASCADE,
    FOREIGN KEY (busnId) 
        REFERENCES busns(id)
        ON DELETE CASCADE
);
CREATE TABLE empTimes (
    id int NOT NULL AUTO_INCREMENT,
    empId VARCHAR(255) NOT NULL,
    busnId VARCHAR(255) NOT NULL,
    clockIn BIGINT(20) NOT NULL,
    clockOut BIGINT(20),
    PRIMARY KEY (id),
    INDEX empsAndBusns (empId, busnId),
    FOREIGN KEY (empId) 
        REFERENCES emps(id)
        ON DELETE CASCADE,
    FOREIGN KEY (busnId) 
        REFERENCES busns(id)
        ON DELETE CASCADE
);