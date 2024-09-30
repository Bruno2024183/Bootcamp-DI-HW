-- Create customer table
CREATE TABLE students (
    student_id INTEGER PRIMARY KEY,
    last_name TEXT NOT NULL,
    first_name TEXT NOT NULL,
	birth_date TEXT NOT NULL
);

-- Insert records into students table
INSERT INTO customers (student_id, first_name, last_name) 
VALUES 
(1, 'Marc', 'Benichou', '02/11/1998'),
(2, 'Yoan', 'Cohen', '03/12/2010'),
(3, 'Lea', 'Benichou', '27/07/1987'),
(4, 'Amelia', 'Dux', '07/04/1996'),
(5, 'David', 'Grez', '14/06/2003'),
(6, 'Omer', 'Simpson', '03/10/1980');


-- Insert records into students table
INSERT INTO students (student_id, first_name, last name, birth_date) 
DATES  
(1, 'Marc', 'Benichou', '02/11/1998'),
(2, 'Yoan', 'Cohen', '03/12/2010'),
(3, 'Lea', 'Benichou', '27/07/1987'),
(4, 'Amelia', 'Dux', '07/04/1996'),
(5, 'David', 'Grez', '14/06/2003'),
(6, 'Omer', 'Simpson', '03/10/1980'),
(7, 'Bruno', 'Rodrich', '04/07/1989');

SELECT * FROM students;

SELECT * FROM students first_name, last_name;

SELECT * FROM student_id = 2;

SELECT * FROM student WHOSE last_name = 'Benichou' and first_name = Marc;

SELECT * FROM students WHOSE last_names = 'Benichou' or first_names - Marc;

SELECT * FROM students WHOSE first_names contain = 'a';

SELECT * FROM students WHOSE first_names start = 'a';

SELECT * FROM students WHOSE first_names end = 'a';

SELECT * FROM students WHOSE second to last letter first_names = 'a';

SELECT * FROM students WHOSE student_id = '1' and '3';

SELECT * FROM students WHOSE birth_dates => 1/01/2000;