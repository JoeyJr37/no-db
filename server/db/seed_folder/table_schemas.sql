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
    image_url TEXT,
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