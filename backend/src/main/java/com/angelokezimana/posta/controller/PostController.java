package com.angelokezimana.posta.controller;

import com.angelokezimana.posta.model.Post;
import com.angelokezimana.posta.service.PostService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/posts")
public class PostController {

    @Autowired
    private PostService postService;

    private static final Logger log = LogManager.getLogger(PostController.class);

    @PostMapping("")
    private Post create(@RequestBody Post post) {
        log.info("Received POST request with post: {}", post);
        log.info("Received POST request with photoPosts: {}", post.getPhotoPosts());
        return postService.createPost(post);
    }

    @GetMapping("/{postId}")
    private ResponseEntity<Post> findById(@PathVariable Long postId) {
        Post post = postService.getPost(postId);
        return ResponseEntity.ok(post);
    }
}
