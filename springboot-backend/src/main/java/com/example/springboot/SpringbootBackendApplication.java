package com.example.springboot;

import com.example.springboot.model.Authority;
import com.example.springboot.model.Post;
import com.example.springboot.model.User;
import com.example.springboot.services.serviceInterfaces.IRoleService;
import com.example.springboot.services.serviceInterfaces.IService;
import com.example.springboot.utils.RolesEnum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

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
            user1.setPhone("068640640");
            user1.setAuthority(roleService.findByName(RolesEnum.USER.toString()));
            user1.setPassword(new BCryptPasswordEncoder().encode("testuser"));
            userService.saveOrUpdate(user1);

            User user2 = new User();
            user2.setEmail("test@admin.com");
            user2.setFirstName("Test Admin");
            user2.setPhone("068640640");
            user2.setAuthority(roleService.findByName(RolesEnum.ADMIN.toString()));
            user2.setPassword(new BCryptPasswordEncoder().encode("testadmin"));
            userService.saveOrUpdate(user2);

            User user3 = new User();
            user3.setEmail("george@admin.com");
            user3.setFirstName("George Vragalev");
            user3.setPhone("068640640");
            user3.setAuthority(roleService.findByName(RolesEnum.ADMIN.toString()));
            user3.setPassword(new BCryptPasswordEncoder().encode("george"));
            userService.saveOrUpdate(user3);

            User user4 = new User();
            user4.setEmail("valeria@admin.com");
            user4.setFirstName("Valeria Dubina");
            user4.setPhone("068640640");
            user4.setAuthority(roleService.findByName(RolesEnum.ADMIN.toString()));
            user4.setPassword(new BCryptPasswordEncoder().encode("valeria"));
            userService.saveOrUpdate(user4);

            User user5 = new User();
            user5.setEmail("valentina@admin.com");
            user5.setFirstName("Valentina Craevscaia");
            user5.setPhone("068640640");
            user5.setAuthority(roleService.findByName(RolesEnum.ADMIN.toString()));
            user5.setPassword(new BCryptPasswordEncoder().encode("valentina"));
            userService.saveOrUpdate(user5);

            User user6 = new User();
            user6.setEmail("adrian@admin.com");
            user6.setFirstName("Adrian Gherman");
            user6.setPhone("068640640");
            user6.setAuthority(roleService.findByName(RolesEnum.ADMIN.toString()));
            user6.setPassword(new BCryptPasswordEncoder().encode("adrian"));
            userService.saveOrUpdate(user6);
        }

        if (postService.findAll().isEmpty()) {
            Post post1 = new Post();
            post1.setTitle("Flori de camera");
            post1.setDescription("Flori de camera s simply dummy text of the h the release of Letraset sheets containi");
            post1.setCategory("Books");
            post1.setPhoto("https://i.ibb.co/vYdFjpH/1459347963-bust.jpg");
            post1.setUserid("george@admin.com");
            postService.saveOrUpdate(post1);

            Post post2 = new Post();
            post2.setTitle("Planta de camera Begonia Beleaf ");
            post2.setDescription("Planta de camera Begonia Beleaf. Floarea este iubitoare de lumina.");
            post2.setCategory("Plante");
            post2.setPhoto("https://i.ibb.co/whLYVx4/photo-2022-01-19-00-40-33.jpg");
            post2.setUserid("george@admin.com");
            postService.saveOrUpdate(post2);

            Post post3 = new Post();
            post3.setTitle("Planta de camera Cycas Palm");
            post3.setDescription("Planta de camera Cycas Palm. Planta se oferă în ghiveci de piatra. Nu este pretentioasa la ingrijire. Lumina indirecta.");
            post3.setCategory("Plante");
            post3.setPhoto("https://i.ibb.co/Cvh65P5/photo-2022-01-19-00-40-51.jpg");
            post3.setUserid("george@admin.com");
            postService.saveOrUpdate(post3);

            Post post4 = new Post();
            post4.setTitle("Planta de camera Croton Gold Dust");
            post4.setDescription("Planta de camera Croton Gold Dust. Foarte ușor se îngrijește. Planta se oferă în ghiveci simplu de fabrica. Iubitoare de multă  lumina.");
            post4.setCategory("Plante");
            post4.setPhoto("https://i.ibb.co/47N8pdm/photo-2022-01-19-00-40-55.jpg");
            post4.setUserid("adrian@admin.com");
            postService.saveOrUpdate(post4);

            Post post5 = new Post();
            post5.setTitle("Vaza din sticla");
            post5.setDescription("Vaza din sticla. Culoarea maronie. Starea ideala.");
            post5.setCategory("Plante");
            post5.setPhoto("https://i.ibb.co/848m6SS/photo-2022-01-19-00-41-00.jpg");
            post5.setUserid("adrian@admin.com");
            postService.saveOrUpdate(post5);

            Post post6 = new Post();
            post6.setTitle("Cărți în limba engleza");
            post6.setDescription("Dau cărțile în limba engleza cadou. Au fost citite, sunt unele notite\n" +
                    "1. At home in Joshua Tree \n" +
                    "2. The KINFOLK Home");
            post6.setCategory("Carti, manuale");
            post6.setPhoto("https://i.ibb.co/TtLC6B3/photo-2022-01-19-00-41-03.jpg");
            post6.setUserid("adrian@admin.com");
            postService.saveOrUpdate(post6);

            Post post7 = new Post();
            post7.setTitle("Ochelari");
            post7.setDescription("Toate perechile de ochelari sunt gata sa le dau.");
            post7.setCategory("Haine, incaltaminte, accesorii");
            post7.setPhoto("https://i.ibb.co/gJvwhhb/photo-2022-01-19-00-54-58.jpg");
            post7.setUserid("valentina@admin.com");
            postService.saveOrUpdate(post7);

            Post post8 = new Post();
            post8.setTitle("Pulovere");
            post8.setDescription("Pulovere pentru fetite. Marimea S");
            post8.setCategory("Haine, incaltaminte, accesorii");
            post8.setPhoto("https://i.ibb.co/tZR4Kb1/photo-2022-01-19-00-55-01.jpg");
            post8.setUserid("valentina@admin.com");
            postService.saveOrUpdate(post8);

            Post post9 = new Post();
            post9.setTitle("Jucarii din lemn");
            post9.setDescription("Jucarii din lemn pentru copii. 1+ anisori");
            post9.setCategory("Totul pentru copii");
            post9.setPhoto("https://i.ibb.co/BGw2hX2/photo-2022-01-19-00-55-04.jpg");
            post9.setUserid("valentina@admin.com");
            postService.saveOrUpdate(post9);

            Post post10 = new Post();
            post10.setTitle("Pisicuta");
            post10.setDescription("Pisicuta blablalbalalblalabllablalb");
            post10.setCategory("Animale de companie");
            post10.setPhoto("https://i.ibb.co/dtD1MdD/photo-1555685812-4b943f1cb0eb.jpg");
            post10.setUserid("valentina@admin.com");
            postService.saveOrUpdate(post10);

            Post post11 = new Post();
            post11.setTitle("Pisicuta maro");
            post11.setDescription("Pisicuta maro blablalbalalblalabllablalb");
            post11.setCategory("Animale de companie");
            post11.setPhoto("https://i.ibb.co/8xF01fm/photo-1548802673-380ab8ebc7b7.jpg");
            post11.setUserid("valeria@admin.com");
            postService.saveOrUpdate(post11);

            Post post12 = new Post();
            post12.setTitle("Pisicuta gri frumoasa");
            post12.setDescription("Pisicuta maro blablalbalalblalabllablalb");
            post12.setCategory("Animale de companie");
            post12.setPhoto("https://i.ibb.co/4mPQQbF/photo-2022-01-19-01-02-45.jpg");
            post12.setUserid("valeria@admin.com");
            postService.saveOrUpdate(post12);

            Post post13 = new Post();
            post13.setTitle("Gosa");
            post13.setDescription("Iti ridica dispozitia instant. Se merita");
            post13.setCategory("Animale de companie");
            post13.setPhoto("https://i.ibb.co/MDLMz9B/photo-2022-01-19-01-02-35.jpg");
            post13.setUserid("valeria@admin.com");
            postService.saveOrUpdate(post13);

            Post post14 = new Post();
            post14.setTitle("Puisor tare cute");
            post14.setDescription("Puisor loreum ispum.........");
            post14.setCategory("Animale de companie");
            post14.setPhoto("https://i.ibb.co/yFQtGGH/photo-2022-01-19-01-02-38.jpg");
            post14.setUserid("valeria@admin.com");
            postService.saveOrUpdate(post14);

            Post post15 = new Post();
            post15.setTitle("Porc");
            post15.setDescription("Porcusor tare frumos ");
            post15.setCategory("Animale de companie");
            post15.setPhoto("https://i.ibb.co/552MxSR/photo-2022-01-19-01-06-48.jpg");
            post15.setUserid("valeria@admin.com");
            postService.saveOrUpdate(post15);
        }
    }
}
