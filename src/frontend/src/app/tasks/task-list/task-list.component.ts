import { Component, OnInit } from '@angular/core';
import { Task } from "src/app/tasks/task.model";
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [ {completed:true , dueDate: "2222-22-22", name: "getThisDone", id: 1}];

  constructor(private taskService: TaskService) { }

  ngOnInit(){
    
    this.taskService.getTasks()
      .subscribe( 
        (tasks : any[]) => {
          this.tasks = tasks;
        },
        (error) => console.log(error)
    );

    this.taskService.onTaskAdded.subscribe(
      (task: Task) => this.tasks.push(task)
    );

  }

  getDueDateLabel(task : Task){
    return task.completed ? 'badge-success' : 'badge-danger';
  }

  onTaskChange(event, task: Task){
    this.taskService.saveTask(task, event.target.checked).subscribe();
  }

}
