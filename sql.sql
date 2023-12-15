-- SELECTION QUERYING --

    -- selects column (or all) from table
    SELECT * FROM friends;
    -- selects column with an alias
    SELECT birthday AS 'b-days' FROM friends;
    -- selecting columns and leaving out duplicate entries (distinct filter)
    SELECT DISTINCT birthday FROM friends;
    -- selecting with a filter WHERE condition is True 
    SELECT * FROM friends WHERE birthday > '1990';
    -- selecting with pattern " _ " is exactly one character (LIKE is not case sensitive)
    SELECT * FROM friends WHERE name LIKE 'R__a';
    -- selecting with pattern " % " is any number of character
    SELECT * FROM friends WHERE name LIKE 'R%';
    -- selecting NULL values
    SELECT name FROM friends WHERE birthday IS NOT NULL;
    -- selecting ranges (BETWEEN includes the ending parameter) and multiple conditions
    SELECT * FROM friends WHERE birthday BETWEEN '1990' AND '1999' AND/OR name BETWEEN 'A' AND 'G';
    -- sorting query from highest to lowest (descending) or alphabetically (ascending)
    SELECT * FROM friends ORDER BY birthday DESC;
    SELECT * FROM friends WHERE birthday > '1980' ORDER BY name ASC; --always needs to go after WHERE
    -- specifying how many rows to return as result (LIMIT may not be supported in all SQL databases) has to go at the very end of query
    SELECT * FROM friends LIMIT 5;

    -- if statements using CASE
    SELECT name,
    CASE -- will create new column and fill values as below
    WHEN imdb_rating > 8 THEN 'Fantastic'
    WHEN imdb_rating > 6 THEN 'Poorly Received'
    ELSE 'Avoid at All Costs'
    END AS 'Review' -- always close CASE with END, rename the new column to 'Review'
    FROM movies;

-- --

-- creates a table called friends with column names in brackets and their data type followed by a constraint
CREATE TABLE friends (
    id INTEGER PRIMARY KEY,
    social_id INTEGER UNIQUE,
    name TEXT NOT NULL,
    birthday DATE DEFAULT 'N/A');

-- inserts new row
INSERT INTO friends (id, social_id, name, birthday)
VALUES (1,003,'Raja','1994-12-08');

-- adds new column
ALTER TABLE friends ADD phone_number INTEGER;

-- updates a value of a row
UPDATE TABLE friends SET name = 'Reza', birthday = '1991-03-18' WHERE id = 1;

-- deletes a row 
DELETE FROM friends WHERE id = 1;
