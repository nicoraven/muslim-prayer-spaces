DROP TABLE space;

CREATE TABLE space(
	id SERIAL PRIMARY KEY,
	name TEXT,
	type TEXT,
	address TEXT,
	latitude FLOAT,
	longitude FLOAT,
	telephone TEXT,
	email TEXT,
	website TEXT,
	directions TEXT,
	details TEXT,
	createdBy TEXT,
	modifiedBy TEXT
);

INSERT INTO space (name, type, address, latitude, longitude, telephone, email, website, directions, details, createdBy, modifiedBy) VALUES ('Al-Falah', 'mosque', '22 Bideford Road #01-01 Singapore 229923', '1.3035161', '103.8368274', '62353172', 'alfalah@alfalah.mosque.org.sg', 'http://www.alfalah.org.sg', NULL, NULL, 'admin', NULL);
INSERT INTO space (name, type, address, latitude, longitude, telephone, email, website, directions, details, createdBy, modifiedBy) VALUES ('Abdul Hamid Kampung Pasiran', 'mosque',  '10 Gentle Road Singapore 309194', '1.3200149', '103.8409176', '62512729', 'info@mahkp.org.sg', 'https://www.mahkp.org.sg', NULL, NULL, 'admin', NULL);
INSERT INTO space (name, type, address, latitude, longitude, telephone, email, website, directions, details, createdBy, modifiedBy) VALUES ('Muhajirin', 'mosque', '275 Braddell Road Singapore 579704', '1.3431004', '103.8520367', '62561166', 'lpm@muhajirin.mosque.org.sg', 'https://www.facebook.com/muhajirinsg', NULL, NULL, 'admin', NULL);
INSERT INTO space (name, type, address, latitude, longitude, telephone, email, website, directions, details, createdBy, modifiedBy) VALUES ('International Plaza', 'musollah', '10 Anson Rd, Singapore 079903', '1.2757202', '103.845673', NULL, NULL, NULL, 'Level 7, carpark. Take carpark lift 19 and 20 near Watsons store. Upon exiting the lift lobby on level 7 and facing the carpark, turn right, there is a small corner on the left of Staircase G which is the musollah.', 'Sejadah, slippers and telekong are provided. No toilet on the same level, so either can use the toilet on level 1, 6 & 8 for ablution.', 'admin', NULL);
INSERT INTO space (name, type, address, latitude, longitude, telephone, email, website, directions, details, createdBy, modifiedBy) VALUES ('Fairmont Singapore', 'musollah', '80 Bras Basah Rd, Singapore 189560', '1.2941399', '103.8535693', NULL, NULL, NULL, 'The prayer room is located on the left side of the corridor passage outside the Asian Market Cafe at Level 2 Fairmont Hotel.', 'Ablution at the toilet and prayer garment is provided. A separate prayer room for males is available across a narrow hall next to ladies.', 'admin', NULL);
INSERT INTO space (name, type, address, latitude, longitude, telephone, email, website, directions, details, createdBy, modifiedBy) VALUES ('Centennial Tower', 'musollah', '3 Temasek Ave, Singapore 039190', '1.2924649', '103.8586237', NULL, NULL, NULL, 'Take the lift to Level B1, and use the left Exit door. At the end of the carpark on the right towards Lot 27, you will see a surau available.', 'Muslimin can pray on the outside carpeted area, muslimah can pray in the room. Prayer mats and telekung are provided. Ablution can be done at the wash area 3 lots to the left of the musollah.', 'admin', NULL);

-- DROP TABLE changelog;

-- CREATE TABLE changelog(
-- 	id SERIAL PRIMARY KEY,
-- 	name TEXT,
-- 	createdBy TEXT,
-- 	modifiedBy TEXT
-- );

-- DROP TABLE deleterequest;

-- CREATE TABLE deleterequest(
-- 	id SERIAL PRIMARY KEY,
-- 	name TEXT,
-- 	spaceId INT,
-- 	reason TEXT
-- );

-- DROP TABLE users;

-- CREATE TABLE users(
-- 	id SERIAL PRIMARY KEY,
-- 	name TEXT,
-- 	email TEXT,
-- 	password TEXT
-- );