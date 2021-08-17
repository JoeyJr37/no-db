INSERT INTO staff
(first_name, last_name, position, country, city, email_address, phone_number, mentor, birth_date, image_url )
VALUES
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);

SELECT max(id) FROM staff;