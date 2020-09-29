-- #################################################################
-- ### Server version: 			5.7
-- ### Date (DD-MM-YYYY): 		29/09/2020
-- ### Developer Name: 			Ganesh Takale
-- ### Comments:				alter table players
-- #################################################################

alter table players add column in_playing11 tinyint(1) default 0;

-- KXIP
insert into players (name,credits,type,team_id) values
('Mandeep Singh','8','BAT','8'),
('Karun Nair','8.5','BAT','8'),
('Sarfaraz Khan','8','BAT','8'),
('Mayank Agarwal','9.5','BAT','8'),
('Chris Gayle','9.5','BAT','8'),
('Harpreet Brar','8','ALL','8'),
('James Neesham','8.5','ALL','8'),
('Tajinder Singh','7.5','ALL','8'),
('Deepak Hooda','8','ALL','8'),
('Glenn Maxwell','9','ALL','8'),
('Krishnappa Gowtham','8.5','ALL','8'),
('KL Rahul','10.5','WK','8'),
('Nicholas Pooran','9','WK','8'),
('Simran Singh','7.5','WK','8'),
('Ishan Porel','8','BOW','8'),
('Chris Jordan','8.5','BOW','8'),
('Ravi Bishnoi','8','BOW','8'),
('Arshdeep Singh','7.5','BOW','8'),
('Mujeeb Ur Rahman ','9','BOW','8'),
('Sheldon Cottrell ','8.5','BOW','8'),
('Mohammed Shami','9','BOW','8'),
('Darshan Nalkande','8','BOW','8'),
('Murugan Ashwin','8','BOW','8'),
('Jagadeesha Suchith','8','BOW','8'),
('Hardus Viljoen','8','BOW','8');