USE employees_db;

INSERT INTO department (name)
VALUES 
    ('Marketing/Sales'),
    ('Legal'),
    ('Engineering'),
    ('Human Resources'),
    ('Accounting/Finance'),
    ('Executive Department');

-- other departments in a business/company
-- production
-- research and development 
-- IT
-- Operations
-- Management

INSERT INTO role (title, salary, department_id)
VALUES 
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Legal Team Lead', 250000, 2),
    ('Lawyer', 190000, 2),
    ('Lead Engineer', 150000, 3),
    ('Software Engineer', 120000, 3),
    ('HR Manager', 100000, 4),
    ('HR', 60000, 4),
    ('Account Manager', 160000, 5),
    ('Accountant', 125000, 5),
    ('CEO', 300000, 6);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    ('Admiral', 'Ackbar', 1, NULL),
    ('Lando', 'Calrissian', 2, 1),
    ('Leia', 'Organa', 3, NULL),
    ('Mace', 'Windu', 4, 3),
    ('Han', 'Solo', 5, NULL),
    ('Sabine', 'Wren', 6, 5),
    ('Poe', 'Dameron', 6, 5),
    ('ObiWan', 'Kenobi', 7, NULL),
    ('Ahsoka', 'Tano', 8, 7),
    ('Luke', 'Skywalker', 11, NULL);