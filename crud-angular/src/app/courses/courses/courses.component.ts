import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent, IError } from './../../shared/components/error-dialog/error-dialog.component';
import { Course } from './../model/course.interface';
import { CourseService } from './../services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  public displayedColumns = ['name', 'category'];
  public courses$: Observable<Course[]>;

  constructor(private coursesService: CourseService, public dialog: MatDialog) {
    this.courses$ = this.coursesService.list().pipe(
      catchError((error) => {
        this.onError({
          errorTitle: 'An error was found',
          errorMessage: 'Error loading courses',
        });
        return of([]);
      })
    );
  }

  onError(data: IError) {
    this.dialog.open(ErrorDialogComponent, { data });
  }
}
