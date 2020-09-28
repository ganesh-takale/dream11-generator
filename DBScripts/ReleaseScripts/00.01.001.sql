-- #################################################################
-- ### Server version: 			5.7
-- ### Date (DD-MM-YYYY): 		28/09/2020
-- ### Developer Name: 			Ganesh Takale
-- ### Comments:				insert teams and players
-- #################################################################

insert into teams (name,code) values
('Mumbai Indains','MI'), -- 1
('Chennai Super Kings','CSK'), -- 2
('Rajasthan Royals','RR'), -- 3
('Delhi Capitals','DC'), -- 4
('Royal Challengers Banglore','RCB'), -- 5
('Sunrisers Hyderabad','SRH'), -- 6
('Kolkata Knight Riders','KKR'), -- 7
('Kings XI Punjab','KXIP'); -- 8

insert into players (name,credits,type,team_id) values
('Rohit Sharma','10.5','BAT',1),
('Sourabh Tiwary','8','BAT',1),
('Chris Lynn','9','BAT',1),
('Anmolpreet Singh','8','BAT',1),
('Suryakumar Yadav','9','BAT',1),
('Sherfane Rutherford','8','BAT',1),

('Krunal Pandya','8.5','ALL',1),
('Kieron Pollard','9','ALL',1),
('Hardik Pandya','9.5','ALL',1),
('Hardik Pandya','9.5','ALL',1),
('Anukul Roy','8','ALL',1),

('Quinton De Kock','9.5','WK',1),
('Aditya Tare','7.5','WK',1),
('Ishan Kishan','8.5','WK',1),

('Prince Balwant Rai','7.5','BOW',1),
('Digvijay Deshmukh','7.5','BOW',1),
('Jasprit Bumrah','9','BOW',1),
('James Pattinson','8','BOW',1),
('Rahul Chahar','8','BOW',1),
('Mohsin Khan','8','BOW',1),
('Mitchell McClenaghan','8.5','BOW',1),
('Dhawal Kulkarni','8','BOW',1),
('Trent Boult','8.5','BOW',1),
('Jayant Yadav','8','BOW',1),
('Nathan Coulter-Nile','8.5','BOW',1);
