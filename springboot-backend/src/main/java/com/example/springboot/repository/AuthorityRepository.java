package com.example.springboot.repository;

import com.example.springboot.model.Authority;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface AuthorityRepository extends JpaRepository<Authority, Long> {

    @Query("FROM Authority WHERE name=:name")
    Authority findByName(@Param("name") String name);
}
