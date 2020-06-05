package com.vikash.project.demo.ToDoDemo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages={"com.vikash.project.demo.ToDoDemo.Controller", "com.vikash.project.demo.ToDoDemo.ToDoService"})
@EntityScan(basePackages= {"com.vikash.project.demo.ToDoDemo.Entity"})
@EnableAutoConfiguration
public class ToDoDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(ToDoDemoApplication.class, args);
	}

}
