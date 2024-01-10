import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {TaskService} from "../../services/task/task.service";
import {TaskActions} from './task.actions';
import {catchError, map, concatMap, of} from "rxjs";

@Injectable()
export class TaskEffects {

  loadTasks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TaskActions.loadTasks),
      concatMap(() =>
        this.taskService.getAllTasks().pipe(
          map(data => TaskActions.loadTasksSuccess({data})),
          catchError(error => of(TaskActions.loadTasksFailure({error}))))
      )
    );
  });

  constructor(private actions$: Actions, private taskService: TaskService) {
  }
}