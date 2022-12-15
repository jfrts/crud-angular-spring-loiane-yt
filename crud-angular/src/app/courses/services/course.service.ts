import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../model/course.interface';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private httpClient: HttpClient) {}

  list(): Course[] {
    return [
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
}
