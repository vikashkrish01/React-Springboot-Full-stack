package com.vikash.project.demo.ToDoDemo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vikash.project.demo.ToDoDemo.Entity.Todo;
import com.vikash.project.demo.ToDoDemo.ToDoService.ToDoService;

@RestController
@RequestMapping("todo")
@CrossOrigin(origins="http://localhost:4200")
public class ToDoController {
	
	@Autowired
    ToDoService toDoService;
	
	@GetMapping("/welcome/vikash")
     public String welcomeTo(){
		return "welcome";
	}
	
	@GetMapping("/worklist/{username}/getAllTodos")
	public List<Todo> getAllTodos(@PathVariable String username){
		return toDoService.findAll();
		
	}
	
	@PostMapping("/worklist/{username}/getAllTodos")
	public List<Todo> createTodos(@PathVariable String username){
		return toDoService.findAll();
		
	}
}
