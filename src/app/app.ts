import { NgFor, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TodoList } from './components/todo-list/todo-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
