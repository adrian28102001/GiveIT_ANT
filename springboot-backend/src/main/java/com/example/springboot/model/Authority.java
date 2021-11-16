package com.example.springboot.model;

import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;

@Table(name = "authority")
@Entity
public class Authority implements GrantedAuthority {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "rolecode")
    private String roleCode;

    @Column(name = "roledescription")
    private String roleDescription;


    @Override
    public String getAuthority() {
        return null;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getRoleCode() {
        return roleCode;
    }

    public void setRoleCode(String roleCode) {
        this.roleCode = roleCode;
    }

    public String getRoleDescription() {
        return roleDescription;
    }

    public void setRoleDescription(String roleDescription) {
        this.roleDescription = roleDescription;
    }
}
