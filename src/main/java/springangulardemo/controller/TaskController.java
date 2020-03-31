package springangulardemo.controller;

import org.springframework.web.bind.annotation.*;
import springangulardemo.model.Task;
import springangulardemo.service.TaskService;

@RestController
@RequestMapping("tasks")
public class TaskController {

    private TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping( value = {"", "/"})
    public Iterable<Task> listTasks(){
        return this.taskService.list();
    }

    @PostMapping("/save")
    public Task saveTask(@RequestBody Task task){
        return this.taskService.save(task);
    }




}
