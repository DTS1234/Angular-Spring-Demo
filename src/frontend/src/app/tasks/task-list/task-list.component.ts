import { Component, OnInit } from '@angular/core';
import { Task } from "src/app/tasks/task.model";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];

  constructor() { }

  ngOnInit(): void {
    this.tasks.push( new Task(1, "Task 1", true, "07/09/2020" ));
    this.tasks.push( new Task(2, "Task 2", false, "13/10/2020" ));
    this.tasks.push( new Task(3, "Task 3", false, "21/12/2020" ));
  }

  getDueDateLabel(task : Task){

    return task.completed ? 'label-success' : 'label-primary';

  }

  onTaskChange(event, task: Task){

    //this.taskService.saveTask(task, event.target.checked).subscribe();

  }

}
