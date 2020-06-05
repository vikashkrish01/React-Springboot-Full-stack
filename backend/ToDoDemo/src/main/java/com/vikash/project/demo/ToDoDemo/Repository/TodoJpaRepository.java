package com.vikash.project.demo.ToDoDemo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vikash.project.demo.ToDoDemo.Entity.Todo;

@Repository
public interface TodoJpaRepository extends JpaRepository<Todo, Long>{

	
	
}
