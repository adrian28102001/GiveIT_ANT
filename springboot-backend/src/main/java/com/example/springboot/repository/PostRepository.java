package com.example.springboot.repository;

import com.example.springboot.model.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

    @Query("FROM Post p WHERE p.title LIKE %:searchText% OR p.category LIKE %:searchText%")
    Page<Post> findAllPosts(Pageable pageable, @Param("searchText") String searchText);
}
