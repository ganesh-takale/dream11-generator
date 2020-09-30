-- #################################################################
-- ### Server version: 			5.7
-- ### Date (DD-MM-YYYY): 		30/09/2020
-- ### Developer Name: 			Ganesh Takale
-- ### Comments:				insert ipl schedule
-- #################################################################

create table matches
(
    id  bigint auto_increment primary key,
    team1_id bigint,
    team2_id bigint,
    date_time datetime DEFAULT NULL,
    location varchar(10) DEFAULT NULL,
    FOREIGN KEY (team1_id) REFERENCES teams(ID),
    FOREIGN KEY (team2_id) REFERENCES teams(ID)
);

insert into matches (team1_id,team2_id,date_time,location) values
(1,2,'2020-09-19 7:30:00','Abu Dhabi'),
(4,8,'2020-09-20 7:30:00','Dubai'),
(6,5,'2020-09-21 7:30:00','Dubai'),
(3,2,'2020-09-22 7:30:00','Sharjah'),
(7,1,'2020-09-23 7:30:00','Abu Dhabi'),
(8,5,'2020-09-24 7:30:00','Dubai'),
(2,4,'2020-09-25 7:30:00','Dubai'),
(7,6,'2020-09-26 7:30:00','Abu Dhabi'),
(3,8,'2020-09-27 7:30:00','Sharjah'),
(5,1,'2020-09-28 7:30:00','Dubai'),
(4,6,'2020-09-29 7:30:00','Abu Dhabi'),
(3,7,'2020-09-30 7:30:00','Dubai'),
(8,1,'2020-10-1 7:30:00','Abu Dhabi'),
(2,6,'2020-10-2 7:30:00','Dubai'),
(5,3,'2020-10-3 3:30:00','Abu Dhabi'),
(4,7,'2020-10-3 7:30:00','Sharjah'),
(1,6,'2020-10-4 3:30:00','Sharjah'),
(8,2,'2020-10-4 7:30:00','Dubai'),
(5,4,'2020-10-5 7:30:00','Dubai'),
(1,3,'2020-10-6 7:30:00','Abu Dhabi'),
(7,2,'2020-10-7 7:30:00','Abu Dhabi'),
(6,8,'2020-10-8 7:30:00','Dubai'),
(3,4,'2020-10-9 7:30:00','Sharjah'),
(8,7,'2020-10-10 3:30:00','Abu Dhabi'),
(2,5,'2020-10-10 7:30:00','Dubai'),
(6,3,'2020-10-11 3:30:00','Dubai'),
(1,4,'2020-10-11 7:30:00','Abu Dhabi'),
(5,7,'2020-10-12 7:30:00','Sharjah'),
(6,2,'2020-10-13 7:30:00','Dubai'),
(4,3,'2020-10-14 7:30:00','Dubai'),
(5,8,'2020-10-15 7:30:00','Sharjah'),
(1,7,'2020-10-16 7:30:00','Abu Dhabi'),
(3,5,'2020-10-17 3:30:00','Dubai'),
(4,2,'2020-10-17 7:30:00','Sharjah'),
(6,7,'2020-10-18 3:30:00','Abu Dhabi'),
(1,8,'2020-10-18 7:30:00','Dubai'),
(2,3,'2020-10-19 7:30:00','Abu Dhabi'),
(8,4,'2020-10-20 7:30:00','Dubai'),
(7,5,'2020-10-21 7:30:00','Abu Dhabi'),
(3,6,'2020-10-22 7:30:00','Dubai'),
(2,1,'2020-10-23 7:30:00','Sharjah'),
(7,4,'2020-10-24 3:30:00','Abu Dhabi'),
(8,6,'2020-10-24 7:30:00','Dubai'),
(5,2,'2020-10-25 3:30:00','Dubai'),
(3,1,'2020-10-25 7:30:00','Abu Dhabi'),
(7,8,'2020-10-26 7:30:00','Sharjah'),
(6,4,'2020-10-27 7:30:00','Dubai'),
(1,5,'2020-10-28 7:30:00','Abu Dhabi'),
(2,7,'2020-10-29 7:30:00','Dubai'),
(8,3,'2020-10-30 7:30:00','Abu Dhabi'),
(4,1,'2020-10-31 3:30:00','Dubai'),
(5,6,'2020-10-31 7:30:00','Sharjah'),
(2,8,'2020-11-1 3:30:00','Abu Dhabi'),
(7,3,'2020-11-1 7:30:00','Dubai'),
(4,5,'2020-11-2 7:30:00','Abu Dhabi'),
(6,1,'2020-11-3 7:30:00','Sharjah');