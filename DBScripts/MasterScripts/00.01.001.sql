-- #################################################################
-- ### Server version: 			5.7
-- ### Date (DD-MM-YYYY): 		28/09/2020
-- ### Developer Name: 			Ganesh Takale
-- ### Comments:				Create schema and intial tables
-- #################################################################

create schema ipl_db;

create table teams
(
    id  bigint auto_increment primary key,
    name varchar(100) DEFAULT NULL,
    code varchar(10) DEFAULT NULL
);

create table players
(
    id  bigint auto_increment primary key,
    name varchar(100) DEFAULT NULL,
    credits varchar(10) DEFAULT NULL,
    type varchar(30) DEFAULT null,
    team_id bigint,
    FOREIGN KEY (team_id) REFERENCES teams(ID)
);