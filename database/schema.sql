DROP DATABASE IF EXISTS mvp;

CREATE DATABASE mvp;

\c mvp;

CREATE TABLE IF NOT EXISTS poses (
  id SERIAL PRIMARY KEY,
  selected BOOLEAN DEFAULT false,
  duration INT DEFAULT 60000,
  picture TEXT NOT NULL
);