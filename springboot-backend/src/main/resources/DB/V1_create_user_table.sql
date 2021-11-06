
CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    username varchar(40) UNIQUE NOT NULL,
    firstname varchar(30),
    lastname varchar(30),
    email varchar(50) UNIQUE not null,
    password varchar(265) not null,
    phone varchar(8),
    province varchar(40),
    birthday date,
    gender varchar(10)
)WITH (
     OIDS=FALSE
);
