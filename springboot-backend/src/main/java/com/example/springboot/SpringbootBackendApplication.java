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
public class SpringbootBackendApplication implements CommandLineRunner{

    @Autowired
    private IService<User> userService;

    @Autowired
    private IRoleService<Authority> roleService;

    @Autowired
    private IService<Post> postService;

    public static void main(String[] args) {
        SpringApplication.run(SpringbootBackendApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        if (roleService.findAll().isEmpty()) {
            roleService.saveOrUpdate(new Authority(RolesEnum.ADMIN.toString()));
            roleService.saveOrUpdate(new Authority(RolesEnum.USER.toString()));
        }

        if (userService.findAll().isEmpty()) {
            User user1 = new User();
            user1.setEmail("test@user.com");
            user1.setFirstName("Test User");
            user1.setPhone("9787456545");
            user1.setAuthority(roleService.findByName(RolesEnum.USER.toString()));
            user1.setPassword(new BCryptPasswordEncoder().encode("testuser"));
            userService.saveOrUpdate(user1);

            User user2 = new User();
            user2.setEmail("test@admin.com");
            user2.setFirstName("Test Admin");
            user2.setPhone("9787456545");
            user2.setAuthority(roleService.findByName(RolesEnum.ADMIN.toString()));
            user2.setPassword(new BCryptPasswordEncoder().encode("testadmin"));
            userService.saveOrUpdate(user2);
        }

        if (postService.findAll().isEmpty()) {
            for (int i = 1; i <= 10; i++) {
                Post post = new Post();
                post.setTitle("Spring Microservices in Action " + i);
                post.setDescription("Author: John Carnell the " + i);
                post.setCategory("Books");
                post.setPhoto(
                        "https://images-na.ssl-images-amazon.com/images/I/417zLTa1uqL._SX397_BO1,204,203,200_.jpg");
                postService.saveOrUpdate(post);
            }
        }
    }
}
