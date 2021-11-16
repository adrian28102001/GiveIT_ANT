package com.example.springboot.config;

import com.example.springboot.services.CustomUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Autowired
    private CustomUserService userService;
    @Override
    //default login
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        //define username and password for in memory auth
        //won't be used in production. default configuration
        auth.inMemoryAuthentication().withUser("user").password(passwordEncoder().encode("password")).authorities("USER", "ADMIN");

        //Database authentication
        auth.userDetailsService(userService).passwordEncoder(passwordEncoder());
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        //http.authorizeRequests().anyRequest().permitAll();

        http.authorizeRequests((request)->request.antMatchers("/h2- console/**").permitAll().anyRequest().authenticated()).httpBasic(); //to permit login

        http.formLogin();
        //http.httpBasic();

        //h2-console
        http.csrf().disable().headers().frameOptions().disable();
    }
}
