package com.example.springboot.model;

import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;
import java.util.Set;

@Table(name = "authority")
@Entity
public class Authority{
    @Id
    @GeneratedValue
    private Long id;
    @Column(nullable = false)
    private String name;

    @OneToMany(targetEntity = User.class, mappedBy = "authority", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<User> users;

    public Authority() {}

    public Authority(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
