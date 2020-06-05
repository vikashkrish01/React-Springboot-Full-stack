package com.vikash.project.demo.ToDoDemo.ToDoService;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.vikash.project.demo.ToDoDemo.Entity.Todo;

@Service
public class ToDoService {

	
	private static List<Todo> todos = new ArrayList<Todo>();
	private static long idCounter =0;
	
	static{
		 todos.add(new Todo(++idCounter, "java springboot" , new Date(), new Date(), 2, "easy" ));
		 todos.add(new Todo(++idCounter,"react" , new Date(), new Date(), 2, "easy" ));
		 todos.add(new Todo(++idCounter,"python" , new Date(), new Date(), 2, "easy" ));
		 todos.add(new Todo(++idCounter,"AWS" , new Date(), new Date(), 2, "easy" ));
	}
	
	public List<Todo> findAll(){
		return todos;
	}
}
