package com.vikash.project.demo.ToDoDemo.Entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity
public class Todo {

	@Id
	@GeneratedValue
	private Long id;
	
	
	private String topic;
	private Date startDate;
	private Date endDate;
	private int level;
	private String comments;
	
	
	public Todo(){
		
	}
	

	public Todo(Long id, String topic, Date startDate, Date endDate, int level, String comments) {
		super();
		this.id = id;
		this.topic = topic;
		this.startDate = startDate;
		this.endDate = endDate;
		this.level = level;
		this.comments = comments;
	}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	public String getTopic() {
		return topic;
	}
	public void setTopic(String topic) {
		this.topic = topic;
	}
	public Date getStartDate() {
		return startDate;
	}
	
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	public int getLevel() {
		return level;
	}
	public void setLevel(int level) {
		this.level = level;
	}
	public String getComments() {
		return comments;
	}
	public void setComments(String comments) {
		this.comments = comments;
	}

	@Override
	public String toString() {
		return "Todo [id=" + id + ", topic=" + topic + ", startDate=" + startDate + ", endDate=" + endDate + ", level="
				+ level + ", comments=" + comments + "]";
	}
	
}
