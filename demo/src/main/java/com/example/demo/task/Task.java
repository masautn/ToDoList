package com.example.demo.task;


import javax.persistence.*;

@Entity
@Table
public class Task {
    //mapping
    @Id
    @SequenceGenerator(
            name = "task_sequence",
            sequenceName = "task_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "task_sequence"
    )

    private Long id;
    private String description;
    private boolean done;

    public Task() {
    }

    public Task(Long id, String description, boolean done) {
        this.id = id;
        this.description = description;
        this.done = done;

    }

    public Task(String description, boolean done) {
        this.description = description;
        this.done = done;

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Boolean getDone() {
        return done;
    }

    public void setDone(Boolean done) {
        this.done = done;
    }



    @Override
    public String toString() {
        return "Task{" +
                "id=" + id +
                ", description='" + description + '\'' +
                ", done='" + done + '\'' +
                '}';
    }
}
