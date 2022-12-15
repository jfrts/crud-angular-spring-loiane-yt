import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Course } from '../model/course.interface';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private readonly API_URL = '/assets/cursos.json';

  constructor(private httpClient: HttpClient) {}

  list(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.API_URL);
  }
}
