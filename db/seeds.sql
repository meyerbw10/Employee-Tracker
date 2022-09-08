INSERT INTO department (name)
VALUES ("Operations"), 
        ("Marketing"), 
        ("HR");

INSERT INTO roles (title, salary, department_id)
VALUE ("GM", 100000.00, 1), 
        ("Sceduler", 70000.00, 1), 
        ("Closer", 53000.00, 1), 
        ("Marketing Rep", 65000.00, 2), 
        ("HR Rep", 65000.00, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUE ("Raven", "Hensley", 1, null), 
        ("Dylan", "McGill", 2, null), 
        ("Bradley", "Meyer", 3, 1), 
        ("Wesley", "Meyer", 4, 2), 
        ("Lydia", "Brooks", 5, 2);