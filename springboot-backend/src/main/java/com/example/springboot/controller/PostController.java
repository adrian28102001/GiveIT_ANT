package com.example.springboot.controller;


import com.example.springboot.exception.ResourceNotFoundException;
import com.example.springboot.model.PostModel;
import com.example.springboot.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/posts/")
public class PostController {

    //Inject rep by spring container
    @Autowired
    private PostRepository postRepository;
    private PostModel postModel = new PostModel();

    //get all posts on the screen
    @GetMapping("/all")
    public List<PostModel> getAllPosts(){
        return postRepository.findAll();
    }

    //create post rest api
    @PostMapping("/all") //Handle http post request
    public PostModel createPost(
            @RequestBody
                    PostModel post){
        return postRepository.save(post);
    }

    //get post by id rest api
    @GetMapping("/all/{id}")
    public ResponseEntity<PostModel> getUserId(@PathVariable Long id){
        PostModel postModel = postRepository.findById(id).
                orElseThrow(() -> new ResourceNotFoundException("Post with id:" + id + " doesn't exist."));
        return ResponseEntity.ok(postModel);
    }
}
