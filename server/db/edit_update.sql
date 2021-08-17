UPDATE updates
SET message_text = $2, updated_by = $3, updated_on = $4, concern_level = $5
WHERE id = $1;

SELECT * FROM staff;