INSERT INTO staff
(first_name, last_name, position, country, city, email_address, phone_number, mentor, birth_date, image_url )
VALUES
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);

SELECT staff.id, staff.first_name, staff.last_name, staff.position,
        staff.country, staff.city, staff.email_address, staff.phone_number, staff.mentor, staff.birth_date
    , json_agg(json_build_object(
    'updates_id', updates.update_id,
    'message_text', updates.message_text,
    'updated_by', updates.updated_by,
    'updated_on', updates.updated_on,
    'concern_level', updates.concern_level
  )) AS messages
FROM staff
LEFT JOIN updates ON updates.staff_id = staff.id
GROUP BY staff.id;