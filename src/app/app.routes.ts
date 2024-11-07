import { Routes } from '@angular/router';

import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { HomeComponent } from './Components/home/home.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { CourseComponent } from './Components/course/course.component';
import { StudentprofileComponent } from './Components/studentprofile/studentprofile.component';
import { LoginComponent } from './Components/login/login.component';

export const routes: Routes = [
   
    {
        path: 'home', // No leading slash
        component: HomeComponent
    },
    {
        path: 'login', // No leading slash
        component: LoginComponent
    },
    
   {
        path: 'registration', // No leading slash
        component: RegistrationComponent
    },
    {
        path: 'about', // No leading slash
        component: AboutComponent
    },
    {
        path: 'contact', // No leading slash
        component: ContactComponent
    },
    {
        path: 'course', // No leading slash
        component: CourseComponent
    },
    {
        path: 'student-profile', // No leading slash
        component: StudentprofileComponent
    },

    {
        path: '', // Optionally, you can add a default route
        redirectTo: 'home', // Redirect to home
        pathMatch: 'full' // Ensure it matches the whole URL
    }
];
