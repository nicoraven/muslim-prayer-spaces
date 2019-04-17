DROP TABLE mosque;

CREATE TABLE mosque(
    id SERIAL PRIMARY KEY,
    name TEXT,
    address TEXT,
    latitude FLOAT,
    longitude FLOAT,
    telephone TEXT,
    email TEXT,
    website TEXT
);

INSERT INTO mosque (name, address, latitude, longitude, telephone, email, website) VALUES ('Masjid Al-Falah', '22 Bideford Road #01-01 Singapore 229923', '1.303590', '103.836908', '62353172', 'alfalah@alfalah.mosque.org.sg', 'http://www.alfalah.org.sg');
INSERT INTO mosque (name, address, latitude, longitude, telephone, email, website) VALUES ('Masjid Abdul Hamid Kampung Pasiran', '10 Gentle Road Singapore 309194', '1.320033', '103.841059', '62512729', 'info@mahkp.org.sg', 'https://www.mahkp.org.sg');

DROP TABLE mussolah;

-- CREATE TABLE mussolah(
--     id SERIAL PRIMARY KEY,
--     name TEXT,
--     address TEXT,
--     latitude FLOAT,
--     longitude FLOAT,
--     directions TEXT,
--     details TEXT
-- );

-- INSERT INTO mussolah (name, address, latitude, longitude, directions, details) VALUES ('City Square Mall', 'Kitchener Rd, S208539', );