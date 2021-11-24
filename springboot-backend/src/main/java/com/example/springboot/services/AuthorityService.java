package com.example.springboot.services;

import com.example.springboot.model.Authority;
import com.example.springboot.model.Post;
import com.example.springboot.repository.AuthorityRepository;
import com.example.springboot.services.serviceInterfaces.IRoleService;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
public class AuthorityService implements IRoleService<Authority> {

    @Autowired
    private AuthorityRepository authorityRepository;

    @Override
    public Collection<Authority> findAll() {
        return authorityRepository.findAll();
    }

    @Override
    public Optional<Authority> findById(Long id) {
        return authorityRepository.findById(id);
    }

    @Override
    public Authority findByName(String name) {
        return authorityRepository.findByName(name);
    }

    @Override
    public Authority saveOrUpdate(Authority role) {
        return authorityRepository.saveAndFlush(role);
    }

    @Override
    public String deleteById(Long id) {
        JSONObject jsonObject = new JSONObject();
        try {
            authorityRepository.deleteById(id);
            jsonObject.put("message", "Role deleted successfully");
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return jsonObject.toString();
    }

}