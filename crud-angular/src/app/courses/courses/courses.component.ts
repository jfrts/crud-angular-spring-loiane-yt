import { Component } from '@angular/core';
import { Observable } from 'rxjs';

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

  constructor(private coursesService: CourseService) {
    this.courses$ = this.coursesService.list();
  }
}
