CREATE TABLE staff(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(25) NOT NULL,
    last_name VARCHAR(25) NOT NULL,
    position VARCHAR(15) NOT NULL,
    country VARCHAR(50) NOT NULL,
    city VARCHAR(50),
    email_address VARCHAR(50) NOT NULL,
    phone_number VARCHAR(25),
    mentor VARCHAR(50),
    birth_date DATE,
    image_url TEXT
);

CREATE TABLE updates(
    update_id SERIAL PRIMARY KEY,
    staff_id INT,
    message_text TEXT NOT NULL,
    updated_by VARCHAR(25) NOT NULL,
    updated_on DATE,
    concern_level VARCHAR(10),
    FOREIGN KEY (staff_id) REFERENCES staff(id) ON DELETE CASCADE
);


Initial inserts:

INSERT INTO staff
(first_name, last_name, position, country, city, email_address, phone_number, mentor, birth_date)
VALUES
('J', 'Rey', 'Team Leader', 'Turkey', 'Antalya', 'jwreyn18@fastmail.com', '+90-531-824-7862', 'Paul Hopkins', '1984-12-30'),
('A', 'Rey', 'Team Leader', 'Turkey', 'Antalya', 'acreyn@fastmail.com', '+90-531-824-7983', 'Becca Nelson', '1985-09-09'),
('A', 'Spr', 'Team Member', 'Turkey', 'Antalya', 'audrea@fastmail.com', '+90-537-456-9357', 'Karen Mahler', '1993-12-27'),
('P', 'Ra', 'Team Member', 'Turkey', 'Antalya', 'ptrask@fastmail.com', '+90-537-720-7607', 'Thomas Flippin', '1998-08-21'),
('M', 'Lar', 'Team Leader', 'Turkey', 'Izmir', 'mlarsen@fastmail.com', '+90-538-033-1195', 'Daniel Senneff', '1989-10-06'),
('A', 'Lar', 'Team Leader', 'Turkey', 'Izmir', 'alo16@fastmail.com', '+90-538-055-1082', 'Teresa Sieh', '1989-09-01'),
('J', 'Pet', 'Team Member', 'Morocco', 'Unknown', 'jhtx@protonmail.com', '+212-621-569-753', 'Cole Marshall', '1989-10-26'),
('B', 'Pet', 'Team Member', 'Morocco', 'Unknown', 'bhtx@protonmail.com', '832-303-9293', 'Patricia Marshall', '1991-03-03'),
('N', 'Ngu', 'Team Leader', 'India', 'Siliguri', 'namhai@fastmail.com', '512-738-4532', 'Unknown', '1994-08-08'),
('M', 'Ngu', 'Team Leader', 'India', 'Siliguri', 'mollyrachel@fastmail.com', '512-738-4457', 'Unknown', '1992-08-19'),
('E', 'Bin', 'Team Member', 'UAE', 'Dubai', 'emberlen@fastmail.com', '+971-58-589-1849', 'Keisha Pierce', '1993-05-05'),
('J', 'Lov', 'Team Member', 'Nepal', 'Unknown', 'jubilove@protonmail.com', '320-441-9952', 'Mallory Flippin', '1999-01-14'),
('Z', 'Hod', 'Team Member', 'India', 'Raj', 'zach2394@protonmail.com', '+91-973-813-0257', 'Unknown', '1994-02-03'),
('T', 'Hod', 'Team Member', 'India', 'Raj', 'tracy1031@protonmail.com', '+977-982-320-7862', 'Unknown', '2021-08-18'),
('C', 'Dil', 'Team Leader', 'Israel', 'Unknown', 'Unknown', '719-822-7256', 'Unknown', '2021-08-18'),
('V', 'Dil', 'Team Leader', 'Israel', 'Unknown', 'Unknown', '719-822-7257', 'Unknown', '2021-08-18'),
('Z', 'Kau', 'Team Member', 'Turkey', 'Izmir', 'kaufmanz@protonmail.com', '+1-847-530-7621', 'Unknown', '1996-12-21'),
('A', 'Kau', 'Team Member', 'Turkey', 'Izmir', 'kaufman.a@protonmail.com', '+1-281-467-7098', 'Unknown', '1996-07-01'),
('A', 'Mor', 'Team Member', 'India', 'Raj', 'axmorrow@gmail.com', '+1-281-685-5941', 'Unknown', '1993-10-31'),
('L', 'Mor', 'Team Member', 'India', 'Raj', 'lmorrow0604@gmail.com', '+1-713-705-6643', 'Unknown', '1994-07-10'),
('S', 'Ing', 'Team Leader', 'Cuba', 'Unknown', 'singram3@gmail.com', '713-459-4278', 'Unknown', '1961-02-06'),
('B', 'Ing', 'Team Leader', 'Cuba', 'Unknown', 'barbara.b.ingram@gmail.com', '+1-281-788-7382', 'Unknown', '1957-02-13'),
('M', 'Nic', 'Team Leader', 'Indonesia', 'Bandung', 'mlnicosia@fastmail.com', '+62-853-1740-1166', 'Scott Ingram', '1989-06-07'),
('L', 'Nic', 'Team Leader', 'Indonesia', 'Bandung', 'mlnicosia@fastmail.com', 'Unknown', 'Barbara Ingram', '1990-06-29'),
('A', 'Tsi', 'Team Member', 'Greece', 'Athens', 'alexiat12@gmail.com', '+1-305-338-7633', 'Unknown', '2021-08-18'),
('A', 'Hill', 'Team Member', 'Japan', 'Unknown', 'alexhill.1951@gmail.com', '+1-281-386-7410', 'Unknown', '2021-08-18'),
('V', 'Ben', 'Team Member', 'Thailand', 'Unknown', 'Unknown', 'Unknown', 'Unknown', '2021-08-18'),
('J', 'Pier', 'Team Leader', 'Unknown', 'Unknown', 'jared5and2@gmail.com', 'Unknown', 'Unknown', '2021-08-18'),
('K', 'Pier', 'Team Leader', 'Unknown', 'Unknown', 'keishabpierce@gmail.com', 'Unknown', 'Unknown', '2021-08-18'),
('M', 'Hoop', 'Team Member', 'Greece', 'Athens', 'masonhooper@gmail.com', 'Unknown', 'Unknown', '2021-08-18');