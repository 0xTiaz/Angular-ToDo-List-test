import { NgFor, NgStyle } from '@angular/common';
import { Component, NgModule, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

export interface TodoItem {
  id: number;
  task: string;
  desc: string;
  completed: boolean;
}

import {
  LucideAngularModule,
  File,
  House,
  Menu,
  UserCheck,
} from 'lucide-angular';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [NgFor, NgStyle, FormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  todoList: TodoItem[] = [];
  newTask: string = '';
  newDesc: string = '';

  addTask(): void {
    if (this.newTask.trim() !== '' && this.newDesc.trim() !== '') {
      const newTodoItem: TodoItem = {
        id: Date.now(),
        task: this.newTask,
        desc: this.newDesc,
        completed: false,
      };

      this.todoList.push(newTodoItem);
      this.newTask = '';
      console.log(this.todoList);
    }
  }

  toggleCompleted(index: number): void {
    this.todoList[index].completed = !this.todoList[index].completed;
  }

  deleteTask(id: number): void {
    this.todoList = this.todoList.filter((item) => item.id !== id);
  }
}
