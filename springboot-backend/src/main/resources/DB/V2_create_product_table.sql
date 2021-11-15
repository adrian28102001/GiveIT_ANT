CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    title varchar(100) UNIQUE NOT NULL,
    category varchar(20) NOT NULL,
    description varchar(1000),
    userid INT,
    FOREIGN KEY (userid) REFERENCES users(id)
)WITH (
    OIDS=FALSE
);

