SELECT * FROM customer;

SELECT first_name || ' ' || last_name AS full_name FROM customer;

SELECT * FROM customer;

SELECT first_name || ' ' || last_name AS full_name FROM customer;

SELECT DISTINCT create_date FROM customer;

SELECT * FROM customer
ORDER BY first_name DESC;

SELECT film_id, title, description, release_year, rental_rate 
FROM film
ORDER BY rental_rate ASC;

SELECT address, phone 
FROM address
WHERE district = 'Texas';

SELECT * FROM film
WHERE film_id IN (15, 150);

SELECT film_id, title, description, length, rental_rate 
FROM film
WHERE title = 'My Favorite Movie';

SELECT film_id, title, description, length, rental_rate 
FROM film
WHERE title LIKE 'My%';

SELECT film_id, title, rental_rate 
FROM film
ORDER BY rental_rate ASC
LIMIT 10;

SELECT film_id, title, rental_rate 
FROM film
ORDER BY rental_rate ASC
OFFSET 10 ROWS FETCH NEXT 10 ROWS ONLY;

SELECT c.first_name, c.last_name, p.amount, p.payment_date
FROM customer c
JOIN payment p ON c.customer_id = p.customer_id
ORDER BY c.customer_id;

SELECT f.film_id, f.title
FROM film f
LEFT JOIN inventory i ON f.film_id = i.film_id
WHERE i.film_id IS NULL;

SELECT ci.city, co.country 
FROM city ci
JOIN country co ON ci.country_id = co.country_id;

SELECT p.customer_id, c.first_name, c.last_name, p.amount, p.payment_date, p.staff_id
FROM payment p
JOIN customer c ON p.customer_id = c.customer_id
ORDER BY p.staff_id