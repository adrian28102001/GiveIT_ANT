package com.example.springboot.model;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

//JPA annotations to map model to relational database table
@Entity
@Table(name = "users")
public @Data class User {

    @Id // Primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private long id;

    @Column(name = "firstname")
    private String firstName;

    @Column(name = "lastname")
    private String lastName;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "phone")
    private String phone;

    @Column(name = "province")
    private String province;


    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "userid", referencedColumnName = "id")
    private List<PostModel> postModelList = new ArrayList<>();
    //Getters Setters and constructors are created automatically by lombok library
}