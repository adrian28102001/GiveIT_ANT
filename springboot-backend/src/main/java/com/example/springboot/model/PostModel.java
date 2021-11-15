package com.example.springboot.model;

import lombok.Data;

import javax.persistence.*;

//JPA annotations to map model to relational database table
@Entity
@Table(name = "product")
public @Data class PostModel {

    @Id // Primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "title")
    private String title;

    @Column(name = "category")
    private String category;

    @Column(name = "description")
    private String description;

}
