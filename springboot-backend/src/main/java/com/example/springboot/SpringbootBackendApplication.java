package com.example.springboot;

import com.example.springboot.model.Authority;
import com.example.springboot.model.User;
import com.example.springboot.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class SpringbootBackendApplication {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    public static void main(String[] args) {

        SpringApplication.run(SpringbootBackendApplication.class, args);
    }

    @PostConstruct
    protected void init() {
        List<Authority> authorities = new ArrayList<>();
        authorities.add(createAuthority("USER", "User role"));
        authorities.add(createAuthority("ADMIN", "Admin role"));

        User user = new User();
        user.setEmail("user@gmail.com");
        user.setFirstName("user");
        user.setLastName("sexy");
        user.setProvince("Chisinau");
        user.setPhone("37383232");
        user.setPassword(passwordEncoder.encode("password"));
        user.setEnabled(true);
        //user.setAuthorities(authorities);

        userRepository.save(user);
    }

    private Authority createAuthority(String roleCode, String roleDescription) {
        Authority authority = new Authority();
        authority.setRoleCode(roleCode);
        authority.setRoleDescription(roleDescription);
        return authority;
    }
}
