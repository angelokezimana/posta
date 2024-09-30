package com.angelokezimana.posta.controller.blog;

import com.angelokezimana.posta.dto.ResponseDTO;
import com.angelokezimana.posta.dto.blog.CommentDTO;
import com.angelokezimana.posta.dto.blog.CommentRequestDTO;
import com.angelokezimana.posta.dto.blog.CommentWithPostDTO;
import com.angelokezimana.posta.service.blog.CommentService;
import jakarta.validation.Valid;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/comments")
public class CommentController {

    private static final Logger log = LogManager.getLogger(CommentController.class);

    private final CommentService commentService;

    @Autowired
    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping("/posts/{postId}")
    private ResponseEntity<List<CommentDTO>> findCommentsByPost(
            @PathVariable Long postId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id,desc") String[] sort
    ) {

        String sortBy = sort[0];
        String sortOrder = sort.length > 1 ? sort[1] : "asc";
        Sort parseSortParameter = Sort.by(Sort.Direction.fromString(sortOrder), sortBy);

        Pageable pageable = PageRequest.of(page, size, parseSortParameter);
        Page<CommentDTO> commentDTOs = commentService.getCommentsByPost(postId, pageable);

        return ResponseEntity.ok(commentDTOs.getContent());
    }

    @PostMapping("/posts/{postId}")
    private ResponseEntity<CommentDTO> create(@PathVariable Long postId,
                                              @RequestBody @Valid CommentRequestDTO newPost) {

        CommentDTO commentDTO = commentService.createComment(postId, newPost);
        return ResponseEntity.ok(commentDTO);
    }

    @GetMapping("/{commentId}")
    private ResponseEntity<CommentWithPostDTO> findById(@PathVariable Long commentId) {

        CommentWithPostDTO commentWithPostDTO = commentService.getComment(commentId);
        return ResponseEntity.ok(commentWithPostDTO);
    }

    @PutMapping("/{commentId}")
    private ResponseEntity<CommentDTO> update(@PathVariable Long commentId,
                                              @RequestBody @Valid CommentRequestDTO updatedComment) {

        CommentDTO updatedCommentResult = commentService.updateComment(commentId, updatedComment);
        return ResponseEntity.ok(updatedCommentResult);
    }

    @DeleteMapping("/{commentId}")
    private ResponseEntity<ResponseDTO> delete(@PathVariable Long commentId) {

        commentService.deleteComment(commentId);
        return ResponseEntity.ok(new ResponseDTO("message", "Comment deleted successfully"));
    }
}
