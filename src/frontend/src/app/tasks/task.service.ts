import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";
import { map } from "rxjs/operators";
import { Task } from './task.model';
import { EventEmitter } from '@angular/core';

@Injectable()
export class TaskService{

  onTaskAdded = new EventEmitter<Task>();
  
  constructor(private http: HttpClient){}

  getTasks(){
      return this.http.get('/tasks').pipe(map(response => response));
  }

  saveTask(task : Task, checked: boolean){
      task.completed = checked;
      return this.http.post('tasks/save', task).pipe(map( (response: Response) => response) );
  }

  addTask(task : Task){
    return this.http.post('/tasks/save', task).pipe(map(response => response));
  }

}
