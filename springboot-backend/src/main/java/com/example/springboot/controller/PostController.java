package com.example.springboot.controller;

import com.example.springboot.model.Post;
import com.example.springboot.model.User;
import com.example.springboot.repository.PostRepository;
import com.example.springboot.services.serviceInterfaces.IService;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/posts")
public class PostController {

    @Autowired
    private IService<Post> postService;

    //Inject rep by spring container
    @Autowired
    private PostRepository postRepository;


    @GetMapping("/category")
    public ResponseEntity<Set<String>> findAllCategories() {
        return new ResponseEntity<>(new TreeSet<>(Arrays.asList("Mobila", "Auto", "Altele")), HttpStatus.OK);
    }

    @GetMapping("/residence")
    public ResponseEntity<Set<String>> findAllResidencies() {
        return new ResponseEntity<>(new TreeSet<>(Arrays.asList("Chisinau", "Balti", "Comrat", "Transnistria")), HttpStatus.OK);
    }

    @PostMapping(value = "/add-post", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> savePost(@RequestBody Post post) {
        JSONObject jsonObject = new JSONObject();
        try {
            post.setTitle(post.getTitle());
            post.setDescription(post.getDescription());
            post.setCategory(post.getCategory());
            post.setPhoto(post.getPhoto());
            post.setCreated(post.getCreated());
            post.setUserid(post.getUserid());

            Post savedPost = postRepository.saveAndFlush(post);
            jsonObject.put("message", savedPost.getTitle() + " saved succesfully");
            return new ResponseEntity<>(jsonObject.toString(), HttpStatus.OK);
        } catch (JSONException e) {
            try {
                jsonObject.put("exception", e.getMessage());
            } catch (JSONException e1) {
                e1.printStackTrace();
            }
            return new ResponseEntity<String>(jsonObject.toString(), HttpStatus.UNAUTHORIZED);
        }
    }

    @GetMapping
    public List<Post> findAll() {
        return (List<Post>) postService.findAll();
    }

    @GetMapping("/posts/{id}")
    public Optional<Post> findById(@PathVariable Long id){
        return postRepository.findById(id);
    }

    @DeleteMapping("/{id}")
    public String deleteById( @PathVariable Long id) {
        JSONObject jsonObject = new JSONObject();
        try {
            postRepository.deleteById(id);
            jsonObject.put("message", "Post deleted successfully");
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return jsonObject.toString();
    }

}
