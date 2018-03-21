package fi.tamk.bloghost;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
/*
* TODO refactor bloghost to Urakka-backend
*
*
* */
@EnableJpaAuditing
@SpringBootApplication
public class BloghostApplication {

	public static void main(String[] args) {
		SpringApplication.run(BloghostApplication.class, args);
	}
}
