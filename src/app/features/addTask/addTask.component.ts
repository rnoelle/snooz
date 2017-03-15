import { Component } from '@angular/core';

import { Task } from '/app/classes/task';


@Component({
  selector: 'add-task',
  templateUrl: '/app/features/addTask/addTask.html'
})

export class AddTaskComponent {
  newTask:Task = {};

  addTask(): void {
    
  }
};
