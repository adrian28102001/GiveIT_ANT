package com.example.springboot.config;

import com.example.springboot.services.CustomUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Autowired
    private CustomUserService userService;

    @Autowired
    private JWTTokenHelper jwtTokenHelper;

    @Autowired
    private AuthenticationEntryPoint authenticationEntryPoint;

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



    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        //http.authorizeRequests().anyRequest().permitAll();


        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
                .exceptionHandling().authenticationEntryPoint(authenticationEntryPoint).and()
                .authorizeRequests((request) -> request.antMatchers("/api/v1/auth/login").permitAll()
                        .antMatchers(HttpMethod.OPTIONS, "/**")
                        .permitAll().anyRequest().authenticated())
                .addFilterBefore(new JWTAuthenticationFilter(userService, jwtTokenHelper), UsernamePasswordAuthenticationFilter.class);

        http.cors();
        http.formLogin();
        //http.httpBasic();

        //h2-console
        http.csrf().disable().headers().frameOptions().disable();
    }
}
