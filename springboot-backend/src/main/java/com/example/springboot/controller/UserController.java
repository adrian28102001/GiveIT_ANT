package com.example.springboot.controller;

import com.example.springboot.config.JwtTokenProvider;
import com.example.springboot.model.User;
import com.example.springboot.repository.AuthorityRepository;
import com.example.springboot.repository.UserRepository;
import com.example.springboot.utils.RolesEnum;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/user")


public class UserController {

    private static Logger log = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenProvider tokenProvider;

    @Autowired
    private AuthorityRepository authorityRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping(value = "/register", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> register(@RequestBody User user) {
        log.info("UserResourceImpl : register");
        JSONObject jsonObject = new JSONObject();
        try {
            user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
            user.setAuthority(authorityRepository.findByName(RolesEnum.USER.toString()));
            user.setProvince(user.getProvince());
            User savedUser = userRepository.saveAndFlush(user);
            jsonObject.put("message", savedUser.getEmail() + " saved succesfully");
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

    @PostMapping(value = "/authenticate", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> authenticate(@RequestBody User user) {
        log.info("UserController : authenticate");
        JSONObject jsonObject = new JSONObject();
        try {
            Authentication authentication = authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));
            if (authentication.isAuthenticated()) {
                String email = user.getEmail();
                jsonObject.put("name", authentication.getName());
                jsonObject.put("authorities", authentication.getAuthorities());
                jsonObject.put("token", tokenProvider.createToken(email, userRepository.findByEmail(email).getAuthority()));
                return new ResponseEntity<String>(jsonObject.toString(), HttpStatus.OK);
            }
        } catch (JSONException e) {
            try {
                jsonObject.put("exception", e.getMessage());
            } catch (JSONException e1) {
                e1.printStackTrace();
            }
            return new ResponseEntity<String>(jsonObject.toString(), HttpStatus.UNAUTHORIZED);
        }
        return null;
    }

    //get details of currently logged in user
    @GetMapping("/MyProfile")
    @ResponseBody
    public ResponseEntity<User> currentUserDetails(Principal principal){
        User user = userRepository.findByEmail(principal.getName());
        return ResponseEntity.ok(user);
    }

    //get user by id rest api
    @GetMapping("/MyProfile/{id}")
    public ResponseEntity<User> getUserId(@PathVariable Long id){
        User user = userRepository.findById(id).
                orElseThrow(() -> new ResourceNotFoundException("User with id:" + id + " doesn't exist."));
        return ResponseEntity.ok(user);
    }

    //get email of currently logged in user
    @RequestMapping(value = "/username", method = RequestMethod.GET)
    @ResponseBody
    public String currentUserName(Authentication authentication) {
        return authentication.getName();
    }

    @PutMapping("/MyProfile")
    public ResponseEntity<User> updateUser(Principal principal, @RequestBody User userDetails){
        User user = userRepository.findByEmail(principal.getName());

        user.setFirstName(userDetails.getFirstName());
        user.setLastName(userDetails.getLastName());
        user.setPhone(userDetails.getPhone());
        user.setProvince(userDetails.getProvince());

        User updatedUser = userRepository.save(user);
        return ResponseEntity.ok(updatedUser);
    }

    @GetMapping("/post/{email}")
    public ResponseEntity<User> getUserByEmail(@PathVariable String email){
        User user = userRepository.findByEmail(email);
        return ResponseEntity.ok(user);
    }
}