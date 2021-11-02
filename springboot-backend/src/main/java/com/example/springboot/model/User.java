package com.example.springboot.model;
import lombok.Data;
import javax.persistence.*;

//JPA annotations to map model to relational database table
@Entity
@Table(name = "users")
public @Data class User {

    @Id // Primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private long id;
    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "birthday")
    private String birthday;

    @Column(name = "gender")
    private String gender;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    //Getters Setters and constructors are created automatically by lombok library
}
