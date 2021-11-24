package com.example.springboot;

import com.example.springboot.model.Authority;
import com.example.springboot.model.Post;
import com.example.springboot.model.User;
import com.example.springboot.repository.UserRepository;
import com.example.springboot.services.serviceInterfaces.IRoleService;
import com.example.springboot.services.serviceInterfaces.IService;
import com.example.springboot.utils.RolesEnum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.awt.print.Book;

@SpringBootApplication
public class SpringbootBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringbootBackendApplication.class, args);
    }

}
