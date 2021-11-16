package com.example.springboot.controller;

import com.example.springboot.exception.ResourceNotFoundException;
import com.example.springboot.model.User;
import com.example.springboot.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/")


public class UserController {

    @GetMapping
    public String testApp() {
        return "Hello Spring Security!";
    }

    //Inject rep by spring container
    @Autowired
    private UserRepository userRepository;
    private User user = new User();

    //get all users on the screen
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    //create user rest api
    @PostMapping("/users") //Handle http post request
    public User createUser(
            @RequestBody
                    User user) {
        return userRepository.save(user);
    }

    //get user by id rest api
    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserId(@PathVariable Long id) {
        User user = userRepository.findById(id).
                orElseThrow(() -> new ResourceNotFoundException("User with id:" + id + " doesn't exist."));
        return ResponseEntity.ok(user);
    }

    //update user rest api
    @PutMapping("/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        User user = userRepository.findById(id).
                orElseThrow(() -> new ResourceNotFoundException("User with id:" + id + " doesn't exist."));
        user.setFirstName(userDetails.getFirstName());
        user.setLastName(userDetails.getLastName());
        user.setEmail(userDetails.getEmail());
        user.setPassword(userDetails.getPassword());
        user.setPhone(userDetails.getPhone());
        user.setProvince(userDetails.getProvince());

        User updatedUser = userRepository.save(user);
        return ResponseEntity.ok(updatedUser);
    }

    //delete user rest api
    @DeleteMapping("/users/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long id) {
        User user = userRepository.findById(id).
                orElseThrow(() -> new ResourceNotFoundException("User with id:" + id + " doesn't exist."));

        userRepository.delete(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
