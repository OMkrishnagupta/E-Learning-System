import { Component, OnInit, Input } from '@angular/core';
import { Observable, of } from 'rxjs';

// Define the Course model interface
export interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  duration: string;
}

// Course Service (simulated for this example)
 class CourseService {
  private courses: Course[] = [
    { id: 1, title: 'Angular Basics', description: 'Learn Angular framework', instructor: 'John Doe', duration: '4 weeks' },
    { id: 2, title: 'Advanced Angular', description: 'Deep dive into Angular', instructor: 'Jane Smith', duration: '6 weeks' },
    { id: 3, title: 'React for Beginners', description: 'Introduction to React', instructor: 'Michael Brown', duration: '3 weeks' },
    { id: 4, title: 'Vue.js Crash Course', description: 'Getting started with Vue.js', instructor: 'Emily White', duration: '2 weeks' }
  ];

  // Simulated service method to fetch courses
  getCourses(): Observable<Course[]> {
    return of(this.courses); // Return mocked course data
  }
}

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit {
  @Input() course!: Course; // Input property to accept course data from parent

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    // If you want to fetch the data from the service, you can do so here
    // For now, the data will be passed directly from the parent component
  }
}