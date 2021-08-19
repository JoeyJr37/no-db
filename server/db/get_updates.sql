SELECT staff.first_name, staff.last_name, staff.id, updates.message_text, updates.updated_by,
    updates.updated_on, updates.concern_level FROM staff
    INNER JOIN updates ON updates.staff_id = staff.id
    ORDER BY updates.updated_on DESC;