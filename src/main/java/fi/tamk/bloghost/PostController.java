package fi.tamk.bloghost;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class PostController {

    @Autowired
    PostRepository postRepository;

    // Get All Posts
    @GetMapping("/posts")
    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }
    // Create a new Post
    @PostMapping("/posts")
    public Post createPost(@Valid @RequestBody Post post) {
        return postRepository.save(post);
    }

    // Get a Single Post
    @GetMapping("/posts/{id}")
    public Post getPostById(@PathVariable(value = "id") Long postId) {
        return postRepository.findById(postId)
                .orElseThrow(() -> new ResourceNotFoundException("Post", "id", postId));
    }

    // Update a Post

    @PutMapping("/posts/{id}")
    public Post updatePost(@PathVariable(value = "id") Long postId,
                           @Valid @RequestBody Post postDetails) {

        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new ResourceNotFoundException("Post", "id", postId));
        /*
        * Original longitude, latitude, and dates cant be updated
        * Modification date gets auto-updated with JPA
        * */
        post.setCreator(postDetails.getCreator());
        post.setTitle(postDetails.getTitle());
        post.setContent(postDetails.getContent());

        Post updatedPost = postRepository.save(post);
        return updatedPost;
    }

    // Delete a Post
    @DeleteMapping("/posts/{id}")
    public ResponseEntity<?> deletePost(@PathVariable(value = "id") Long postId) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new ResourceNotFoundException("Post", "id", postId));

        postRepository.delete(post);

        return ResponseEntity.ok().build();
    }
}
