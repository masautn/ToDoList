package com.example.demo.task;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping(path = "api/tasks")

public class TaskController {

    private final TaskService taskService; 

    @Autowired
    public TaskController(TaskService taskService){ 
        this.taskService = taskService;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping
    public List<Task> getTask() {
        return taskService.getTask();
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping
    public Task registerNewTask(@RequestBody Task task) {
       return taskService.addNewTask(task);
    }
    
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(path = "{taskId}")
    public boolean deleteTask(@PathVariable("taskId") Long taskId){
      return   taskService.deleteTask(taskId);
    }
    @CrossOrigin(origins = "http://localhost:3000")


    @PutMapping(path = "{taskId}")
    public Task updateTask(@PathVariable("taskId") Long taskId, @RequestBody Task modifiedTask){
        return taskService.modifyTask(modifiedTask);
    }

}