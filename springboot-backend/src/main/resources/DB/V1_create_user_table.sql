CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    firstname varchar(30),
    lastname varchar(30),
    email varchar(50) UNIQUE not null,
    password varchar(265) not null,
    phone varchar(8),
    province varchar(40)
)WITH (
     OIDS=FALSE
);


