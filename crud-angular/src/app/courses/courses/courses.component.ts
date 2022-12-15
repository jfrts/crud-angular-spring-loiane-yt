import { Component } from '@angular/core';

import { Course } from './../model/course.interface';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  public displayedColumns = ['name', 'category'];
  public courses: Course[] = [
    {
      _id: '1',
      name: 'Crud Angular + Spring',
      category: 'Fullstack',
    },
    {
      _id: '2',
      name: 'Angular - Loiane',
      category: 'Frontend',
    },
  ];
}
