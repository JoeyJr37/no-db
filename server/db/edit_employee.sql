UPDATE staff
SET first_name = $2, last_name = $3, position = $4, county = $5, city = $6, email_address = $7, phone_number = $8, mentor = $9, birth_date = $10, image_url = $11
WHERE id = $1;

SELECT * FROM staff;