-- When developing, it's best to do drop before creating --
DROP DATABASE IF EXISTS employees_db;
-- Creates "employees_db" database --
CREATE DATABASE employees_db;

-- Makes it so all of the following code will affect employees_db --
USE employees_db;



-- Creates the table "department" within employees_db --
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, -- Creates numeric column that automatically increments its default value when creating new rows --
    name VARCHAR(30) NOT NULL -- Makes a string column called "name" which cannot contain null -- might need to rename name to employee_name
);

-- Creates the table "role" within employees_db --
CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
);

-- Creates the table "employee" within employees_db --
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    FOREIGN KEY (role_id)
    REFERENCES role(id),
    -- ON DELETE SET NULL -- don't set null beacuse it might lose reference?
    manager_id INT, -- need to reference employee table, will have foreign key
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
);