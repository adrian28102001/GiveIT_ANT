package com.example.springboot.services.serviceInterfaces;

import com.example.springboot.model.Post;
import java.util.Collection;
import java.util.Optional;
import java.util.Set;


public interface IService<T> {
    Collection<T> findAll();

    Optional<T> findById(Long id);

    T saveOrUpdate(T t);

    String deleteById(Long id);




}
