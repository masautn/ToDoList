package com.example.demo.task;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    private final TaskRepository taskRepository;
    @Autowired
    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Task> getTask() {
        return taskRepository.findAll();
    }

    public Task addNewTask(Task task){
        Optional<Task> taskTaken = taskRepository.findTaskByDescription(task.getDescription());
        if(taskTaken.isPresent()){
            throw new IllegalStateException("task already created");
        }
        return taskRepository.save(task);

    }

    public boolean deleteTask(Long taskId) {
       boolean taskExist = taskRepository.existsById(taskId);
       if(!taskExist){

           throw new IllegalStateException(
                   "task with id " + taskId + " not found"
           );
       }
        taskRepository.deleteById(taskId);
       return !taskRepository.existsById(taskId);
    }

    public Task modifyTask(Task modifiedTask) {

        boolean taskExist = taskRepository.existsById(modifiedTask.getId());
        if(!taskExist){

            throw new IllegalStateException(
                    "task with id " + modifiedTask.getId() + " not found"
            );
        }
        return taskRepository.save(modifiedTask);

    }
}
