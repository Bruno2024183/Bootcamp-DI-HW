--1
SELECT * FROM language;

--2
SELECT f.title AS film_title, f.description, l.name AS language_name
FROM film f
JOIN language l ON f.language_id = l.language_id;

--3
SELECT f.title AS film_title, f.description, l.name AS language_name
FROM language l
LEFT JOIN film f ON l.language_id = f.language_id;

--4
CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
-- Add some new films to the table
INSERT INTO new_film (name) VALUES ('Inception'), ('The Matrix'), ('Interstellar');

--5
CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INT REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INT REFERENCES language(language_id),
    title VARCHAR(255),
    score INT CHECK (score >= 1 AND score<= 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Agregar 2 reseñas de películas
INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES 
(1, 1, 'Amazing Sci-Fi', 9, 'Inception is a mind-bending masterpiece.'),
(2, 2, 'A Classic', 10, 'The Matrix redefined the sci-fi genre.');

--6
DELETE FROM new_film WHERE id = 1;

-- La(s) reseña(s) correspondiente(s) para esta película también se eliminarán de la tabla customer_review debido a la restricción ON DELETE CASCADE.
