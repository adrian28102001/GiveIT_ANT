package com.example.springboot.services;

import com.example.springboot.model.Post;
import com.example.springboot.repository.PostRepository;
import com.example.springboot.services.serviceInterfaces.IPageService;
import com.example.springboot.services.serviceInterfaces.IService;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
public class PostService implements IService<Post>, IPageService<Post> {
    @Autowired
    private PostRepository postRepository;

    @Override
    public Collection<Post> findAll() {
        return (Collection<Post>) postRepository.findAll();
    }

    @Override
    public Page<Post> findAll(Pageable pageable, String searchText) {
        return postRepository.findAllPosts(pageable, searchText);
    }

    @Override
    public Page<Post> findAll(Pageable pageable) {
        return postRepository.findAll(pageable);
    }

    @Override
    public Optional<Post> findById(Long id) {
        return postRepository.findById(id);
    }

    @Override
    public Post saveOrUpdate(Post post) {
        return postRepository.save(post);
    }

    @Override
    public String deleteById(Long id) {
        JSONObject jsonObject = new JSONObject();
        try {
            postRepository.deleteById(id);
            jsonObject.put("message", "Post deleted successfully");
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return jsonObject.toString();
    }

}
