import { Component, OnInit } from '@angular/core';
import { Task } from "src/app/tasks/task.model";
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(){
    return this.taskService.getTasks().
    subscribe( (tasks : any[]) => {
      this.tasks = tasks;
    },
    (error) => console.log(error));
  }

  getDueDateLabel(task : Task){

    return task.completed ? 'label-success' : 'label-primary';

  }

  onTaskChange(event, task: Task){

    //this.taskService.saveTask(task, event.target.checked).subscribe();

  }

}
