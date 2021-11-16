
CREATE TABLE Users (
	id integer NOT NULL,
	First_name VARCHAR(50) NOT NULL,
	Last_name VARCHAR(50) NOT NULL,
	Birthday DATE NOT NULL,
	gender VARCHAR(255),
	email VARCHAR(50) NOT NULL UNIQUE,
	password VARCHAR(30) NOT NULL,
	CONSTRAINT Users_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE Categories (
	id integer NOT NULL,
	Category_name integer NOT NULL,
	CONSTRAINT Categories_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE Subcategories (
	id integer NOT NULL,
	category_id integer NOT NULL,
	subcategory_name VARCHAR(50) NOT NULL,
	CONSTRAINT Subcategories_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE Product (
	id integer NOT NULL,
	Product_owner_id integer NOT NULL,
	Title text NOT NULL,
	Description TEXT NOT NULL,
	Status VARCHAR(255),
	category_id integer NOT NULL,
	subcategory_id integer NOT NULL,
	Chat_id integer,
	CONSTRAINT Product_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE Fav_items (
	product_id integer NOT NULL,
	user_id integer NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE BlackList (
	owner_id integer NOT NULL,
	blocked_id integer NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE Chat (
	id integer NOT NULL,
	product_id integer NOT NULL,
	owner_id integer NOT NULL,
	costumer_id integer NOT NULL,
	CONSTRAINT Chat_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);


CREATE TABLE Messages (
	Chat_id integer NOT NULL,
	messgaes integer NOT NULL,
	date_time DATE NOT NULL,
	seen BYTEA NOT NULL,
	unseen_nr integer NOT NULL
) WITH (
  OIDS=FALSE
);


ALTER TABLE Subcategories ADD CONSTRAINT Subcategories_fk0 FOREIGN KEY (category_id) REFERENCES Categories(id);

ALTER TABLE Product ADD CONSTRAINT Product_fk0 FOREIGN KEY (Product_owner_id) REFERENCES Users(id);
ALTER TABLE Product ADD CONSTRAINT Product_fk1 FOREIGN KEY (category_id) REFERENCES Categories(id);
ALTER TABLE Product ADD CONSTRAINT Product_fk2 FOREIGN KEY (subcategory_id) REFERENCES Subcategories(id);

ALTER TABLE Fav_items ADD CONSTRAINT Fav_items_fk0 FOREIGN KEY (product_id) REFERENCES Product(id);
ALTER TABLE Fav_items ADD CONSTRAINT Fav_items_fk1 FOREIGN KEY (user_id) REFERENCES Users(id);

ALTER TABLE BlackList ADD CONSTRAINT BlackList_fk0 FOREIGN KEY (owner_id) REFERENCES Users(id);
ALTER TABLE BlackList ADD CONSTRAINT BlackList_fk1 FOREIGN KEY (blocked_id) REFERENCES Users(id);

ALTER TABLE Chat ADD CONSTRAINT Chat_fk0 FOREIGN KEY (product_id) REFERENCES Product(id);
ALTER TABLE Chat ADD CONSTRAINT Chat_fk1 FOREIGN KEY (owner_id) REFERENCES Users(id);
ALTER TABLE Chat ADD CONSTRAINT Chat_fk2 FOREIGN KEY (costumer_id) REFERENCES Users(id);

ALTER TABLE Messages ADD CONSTRAINT Messages_fk0 FOREIGN KEY (Chat_id) REFERENCES Chat(id);
