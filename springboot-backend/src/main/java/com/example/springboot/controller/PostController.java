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
import java.util.List;
import java.util.Set;
import java.util.TreeSet;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/posts")
public class PostController  {

    @Autowired
    private IService<Post> postService;

    @Autowired
    private IPageService<Post> postPageService;


    @GetMapping("/category")
    public  ResponseEntity<Set<String>> findAllCategories() {
        return new ResponseEntity<>(new TreeSet<>(Arrays.asList("Mobila", "Auto", "Altele")), HttpStatus.OK);
    }

    @GetMapping("/residence")
    public  ResponseEntity<Set<String>> findAllResidencies() {
        return new ResponseEntity<>(new TreeSet<>(Arrays.asList("Chisinau", "Balti", "Comrat", "Transnistria")), HttpStatus.OK);
    }
    @GetMapping
    public List<Post> findAll(){
        return (List<Post>) postService.findAll();
    }
}
