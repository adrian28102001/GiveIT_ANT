package com.example.springboot.controller;

import com.example.springboot.controller.interfaces.Resource;
import com.example.springboot.model.Post;
import com.example.springboot.services.serviceInterfaces.IPageService;
import com.example.springboot.services.serviceInterfaces.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.awt.print.Book;
import java.util.Arrays;
import java.util.Set;
import java.util.TreeSet;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/posts")
public class PostController implements Resource<Post> {

    @Autowired
    private IService<Post> postService;

    @Autowired
    private IPageService<Post> postPageService;

    @Override
    public ResponseEntity<Page<Post>> findAll(Pageable pageable, String searchText) {
        return new ResponseEntity<>(postPageService.findAll(pageable, searchText), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Page<Post>> findAll(int pageNumber, int pageSize, String sortBy, String sortDir) {
        return new ResponseEntity<>(postPageService.findAll(
                PageRequest.of(
                        pageNumber, pageSize,
                        sortDir.equalsIgnoreCase("asc") ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending()
                )
        ), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Post> findById(Long id) {
        return new ResponseEntity<>(postService.findById(id).get(), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Post> save(Post post) {
        return new ResponseEntity<>(postService.saveOrUpdate(post), HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<Post> update(Post post) {
        return new ResponseEntity<>(postService.saveOrUpdate(post), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<String> deleteById(Long id) {
        return new ResponseEntity<>(postService.deleteById(id), HttpStatus.OK);
    }

    @GetMapping("/category")
    public  ResponseEntity<Set<String>> findAllCategories() {
        return new ResponseEntity<>(new TreeSet<>(Arrays.asList("Mobila", "Auto", "Altele")), HttpStatus.OK);
    }

    @GetMapping("/residence")
    public  ResponseEntity<Set<String>> findAllResidencies() {
        return new ResponseEntity<>(new TreeSet<>(Arrays.asList("Chisinau", "Balti", "Comrat", "Transnistria")), HttpStatus.OK);
    }
}
