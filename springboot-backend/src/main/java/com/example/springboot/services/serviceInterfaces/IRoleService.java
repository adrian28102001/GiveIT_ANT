package com.example.springboot.services.serviceInterfaces;

public interface IRoleService<T> extends IService<T> {
    T findByName(String name);
}
