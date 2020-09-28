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

insert into players (name,credits,type,team_id) values
-- RCB
('Virat Kohli','10.5','BAT','5'),
('Aaron Finch','9','BAT','5'),
('Dedutt Padikkal','8','BAT','5'),
('Gurkeerat Singh Mann','8','BAT','5'),
('Ab De Villiers','10','BAT','5'),
('Moeen Ali','8.5','ALL','5'),
('Washington Sundar','8','ALL','5'),
('Pavan Deshpande','8','ALL','5'),
('Chris Morris','9','ALL','5'),
('Shabaz Ahmed','7.5','ALL','5'),
('Pawan Negi','8','ALL','5'),
('Shivam Dube','8.5','ALL','5'),
('Parthiv Patel ','8.5','WK','5'),
('Josh Phillippe','8','WK','5'),
('Mohammed Siraj','8','BOW','5'),
('Yuzvendra Chahal','9','BOW','5'),
('Navdeep Saini','8.5','BOW','5'),
('Dale Steyn','8.5','BOW','5'),
('Umesh Yadav','8.5','BOW','5'),
('Adam Zampa','8.5','BOW','5'),
('Isuru Udana','8','BOW','5'),

-- SRH
('Kane Williamson','9.5','BAT','6'),
('David Warner','10.5','BAT','6'),
('Manish Pandey','9','BAT','6'),
('Priyam Garg','8','BAT','6'),
('Virat Singh','8','BAT','6'),
('Abdul Samad','7.5','BAT','6'),
('Vijay Shankar','8.5','ALL','6'),
('Mitchell Marsh','','ALL','6'),
('Bavanaka Sandeep','8','ALL','6'),
('Fabian Allen','8','ALL','6'),
('Mahammad Nabi','9','ALL','6'),
('Abhishek Sharma','','ALL','6'),
('Sanjay Yadav','7.5','ALL','6'),
('Jason Holder','8.5','ALL','6'),
('Jonny Bairstow','9.5','WK','6'),
('Wriddhiman Saha ','8','WK','6'),
('Shreevats Goswami','7.5','WK','6'),
('Bhuvneshwar Kumar','9','BOW','6'),
('Basil Thampi','8','BOW','6'),
('Billy Stanlake','8','BOW','6'),
('Sandeep Sharma','8','BOW','6'),
('Shahbaz Nadeem','8','BOW','6'),
('Siddharth Kaul','8.5','BOW','6'),
('K Khaleel Ahmed','8','BOW','6'),
('T Natarajan','8','BOW','6'),
('Rashid khan','9.5','BOW','6'),

-- DC
('Shreyas Iyer','9.5','BAT','4'),
('Ajinkya Rahane','9','BAT','4'),
('Shikhar Dhawan','10','BAT','4'),
('Shimron Hetmyer','8.5','BAT','4'),
('Pritvi Shaw','8.5','BAT','4'),
('Marcus Stoinis','8.5','ALL','4'),
('Lalit Yadav','7.5','ALL','4'),
('Ravichandran Ashwin','9','ALL','4'),
('Axar Patel','8.5','ALL','4'),
('Keemo Paul','8','ALL','4'),
('Daniel Sams','8','ALL','4'),
('Alex Carey','8.5','WK','4'),
('Rishabh Pant ','9.5','WK','4'),
('Kagiso Rabada','9.5','BOW','4'),
('Sandeep Lamichhane','8.5','BOW','4'),
('lshant Sharma','8.5','BOW','4'),
('Mohit Sharma','8','BOW','4'),
('Avesh Khan','8','BOW','4'),
('Tushar Deshpande','7.5','BOW','4'),
('Harshal Patel','8','BOW','4'),
('Amit Mishra','8.5','BOW','4'),
('Anich Nortje','8','BOW','4'),

-- RR
('Steven Smith','10','BAT','3'),
('Riyan Parag','8','BAT','3'),
('Yashasvi jaiswal','8','BAT','3'),
('David Miller','8.5','BAT','3'),
('Manan Vohra','8','BAT','3'),
('Shashank Singh','7.5','BAT','3'),
('Ben Stokes','9.5','ALL','3'),
('Mashipal Lomror','8','ALL','3'),
('Shreyas Gopal','8.5','ALL','3'),
('Tom Curran','8.5','ALL','3'),
('Aniruddha Joshi','7.5','ALL','3'),
('Jos Buttler','10.5','WK','3'),
('Sanju Samson','9.5','WK','3'),
('Anuj Rawat','8','WK','3'),
('Robin Uthappa','8.5','WK','3'),
('Andrew Tye','8.5','BOW','3'),
('Kartik Tyagi','8','BOW','3'),
('Ankit Rajpoot','8','BOW','3'),
('Rahul Tewatia','8.5','BOW','3'),
('Jaydev Unadkat','8.5','BOW','3'),
('Mayank Markande','8','BOW','3'),
('Oshane Thomas','8','BOW','3'),
('Akash Singh','7.5','BOW','3'),
('Varun Aaron','8','BOW','3'),
('Jofra Archer','9','BOW','3'),

-- KKR
('Eoin Morgan','9','BAT','7'),
('Nikhil Naik','8','BAT','7'),
('Shubman Gill','8.5','BAT','7'),
('Nitish Rana','9','BAT','7'),
('Siddhesh Lad ','8','BAT','7'),
('Rinku Singh','8','BAT','7'),
('Rahul Tripathi','8','BAT','7'),
('Shivam Mavi','8','ALL','7'),
('Andre Russell','10.5','ALL','7'),
('Chris Green','8','ALL','7'),
('Dinesh Karthik','9','WK','7'),
('Tom Bantom','8','WK','7'),
('Sandeep Warrier','8','BOW','7'),
('Kuldeep Yadav','8.5','BOW','7'),
('Pat Cummins','9','BOW','7'),
('Sunil Narine','10','BOW','7'),
('Manimaran Siddharth','7.5','BOW','7'),
('Lockie Ferguson','8.5','BOW','7'),
('Prasidh Krishna','8','BOW','7'),
('Kamlesh Nagarkoti','8','BOW','7'),
('Varun Chakravrthy','8','BOW','7'),
('Ali khan','8','BOW','7');