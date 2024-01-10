import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {TaskInterface} from "../../model/task.interface";
import {TaskActions} from "../../state/tasks/task.actions";
import { AppState } from 'src/app/state/app-state';
import { Router } from '@angular/router';



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{

  task$!: Observable<TaskInterface | undefined>;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {}


  ngOnInit(): void {

  // load tasks 
  }

}
