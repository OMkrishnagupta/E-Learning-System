// course.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from './course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  // Mock data to simulate API response
  private courses: Course[] = [
    { id: 1, title: 'Angular Basics', description: 'Learn Angular framework', instructor: 'John Doe', duration: '4 weeks' },
    { id: 2, title: 'Advanced Angular', description: 'Deep dive into Angular', instructor: 'Jane Smith', duration: '6 weeks' },
    { id: 3, title: 'React for Beginners', description: 'Introduction to React', instructor: 'Michael Brown', duration: '3 weeks' },
    { id: 4, title: 'Vue.js Crash Course', description: 'Getting started with Vue.js', instructor: 'Emily White', duration: '2 weeks' }
  ];

  constructor() { }

  // Method to fetch course data
  getCourses(): Observable<Course[]> {
    return of(this.courses);
  }
}
