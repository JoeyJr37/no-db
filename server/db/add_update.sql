INSERT INTO updates
(staff_id, message_text, updated_by, updated_on, concern_level)
VALUES
($1, $2, $3, $4, $5);

SELECT * FROM staff;