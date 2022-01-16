package com.example.springboot.controller;

import com.example.springboot.model.Post;
import com.example.springboot.repository.PostRepository;
import com.example.springboot.services.serviceInterfaces.IService;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;

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

            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

            String currentUserName = authentication.getName();
            post.setUserid(currentUserName);
            System.out.println(currentUserName);


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
}
