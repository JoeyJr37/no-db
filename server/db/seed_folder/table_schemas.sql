CREATE TABLE staff(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(25) NOT NULL,
    last_name VARCHAR(25) NOT NULL,
    image_url TEXT,
    position VARCHAR(15) NOT NULL,
    city VARCHAR(50),
    country VARCHAR(50) NOT NULL,
    phone_number VARCHAR(25),
    email_address VARCHAR(50) NOT NULL,
    mentor VARCHAR(50),
    birth_date DATE
);

CREATE TABLE updates(
    id SERIAL PRIMARY KEY,
    text TEXT NOT NULL,
    updated_by VARCHAR(25) NOT NULL,
    updated_on DATE,
    concern_level VARCHAR(10),
    FOREIGN KEY (staff_id) REFERENCES staff(id) ON DELETE CASCADE
);