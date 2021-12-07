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

            User user3 = new User();
            user3.setEmail("george@admin.com");
            user3.setFirstName("Test Admin");
            user3.setPhone("9787456545");
            user3.setAuthority(roleService.findByName(RolesEnum.ADMIN.toString()));
            user3.setPassword(new BCryptPasswordEncoder().encode("george"));
            userService.saveOrUpdate(user3);

            User user4 = new User();
            user4.setEmail("valeria@admin.com");
            user4.setFirstName("valeria Admin");
            user4.setPhone("9787456545");
            user4.setAuthority(roleService.findByName(RolesEnum.ADMIN.toString()));
            user4.setPassword(new BCryptPasswordEncoder().encode("valeria"));
            userService.saveOrUpdate(user4);

            User user5 = new User();
            user5.setEmail("valentina@admin.com");
            user5.setFirstName("valentina Admin");
            user5.setPhone("9787456545");
            user5.setAuthority(roleService.findByName(RolesEnum.ADMIN.toString()));
            user5.setPassword(new BCryptPasswordEncoder().encode("valentina"));
            userService.saveOrUpdate(user5);

            User user6 = new User();
            user6.setEmail("adrian@admin.com");
            user6.setFirstName("adrian Admin");
            user6.setPhone("9787456545");
            user6.setAuthority(roleService.findByName(RolesEnum.ADMIN.toString()));
            user6.setPassword(new BCryptPasswordEncoder().encode("adrian"));
            userService.saveOrUpdate(user6);
        }

        if (postService.findAll().isEmpty()) {
            for (int i = 1; i <= 10; i++) {
                Post post = new Post();
                post.setTitle("Spring Microservices in Action " + i);
                post.setDescription("Author: John Carnell the " + i);
                post.setCategory("Books");
                post.setPhoto( "https://cdn.shopify.com/s/files/1/1556/1715/products/Assets_0016_RALPH-LAUREN-POLO-BLUE_1024x.png");
                postService.saveOrUpdate(post);
            }
        }
    }
}
