package com.vikash.project.demo.ToDoDemo.Controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.vikash.project.demo.ToDoDemo.Entity.Todo;
import com.vikash.project.demo.ToDoDemo.Repository.TodoJpaRepository;
import com.vikash.project.demo.ToDoDemo.ToDoService.ToDoService;

@RestController
@RequestMapping("todo")
@CrossOrigin(origins="http://localhost:4200", allowedHeaders="*")
public class ToDoJpaController {
	
	@Autowired
	TodoJpaRepository toDoJpaRepository;
	
	@GetMapping("/jpa/welcome/vikash")
     public String welcomeTo(){
		return "welcome";
	}
	
	@GetMapping("/jpa/worklist/{username}/getAllTodos")
	public List<Todo> getAllTodos(){
		return toDoJpaRepository.findAll();
		
	}
	@GetMapping("/jpa/worklist/{username}/getTodo/{id}")
	public Todo getTodo(@PathVariable String username , @PathVariable long id){
		return toDoJpaRepository.findById(id).get();
		
	}
	
	@PostMapping("/jpa/worklist/addTodo")
	public ResponseEntity<Void> addTodo(@RequestBody Todo todo){
		Todo addedTodo = toDoJpaRepository.save(todo);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(addedTodo.getId()).toUri();
		return ResponseEntity.created(uri).build();
		
	}
	@PutMapping("/jpa/worklist/editTodo/{id}")
	public ResponseEntity<Todo> editTodo(@PathVariable long id, @RequestBody Todo todo){
	       	
		Todo todoUpdated = toDoJpaRepository.save(todo);
		return new ResponseEntity<Todo>(todoUpdated,HttpStatus.OK);
		
	}
	@DeleteMapping("/jpa/worklist/{username}/deleteTodo/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id){
		toDoJpaRepository.deleteById(id);
		return ResponseEntity.noContent().build();
		
	}
}

