-- #################################################################
-- ### Server version: 			5.7
-- ### Date (DD-MM-YYYY): 		30/09/2020
-- ### Developer Name: 			Ganesh Takale
-- ### Comments:				create team strategy table and insert strategy
-- #################################################################

create table team_strategy
(
    id  bigint auto_increment primary key,
    wicketkeeper bigint,
    batsman bigint,
    allrounder bigint,
    bowler bigint
);

insert into team_strategy (wicketkeeper,batsman,allrounder,bowler) values
('1','3','3','4'),
('1','4','3','3'),
('1','4','2','4'),
('2','3','3','3'),
('2','3','2','4'),
('2','4','2','3'),
('3','3','2','3'),
('3','4','1','3'),
('3','3','1','4'),
('2','4','1','4'),
('2','5','1','3'),
('2','3','1','5'),
('1','5','1','4'),
('1','4','1','5'),
('4','3','1','3');