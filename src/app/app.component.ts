import { Component } from '@angular/core';
import { MarkerService } from './services/marker.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MarkerService]
})
export class AppComponent {
  title = 'app works!';

  constructor(private markerService:MarkerService) {
    console.log(window.localStorage);
    this.setLocalStorage();
    this.setSession();
  }

  setLocalStorage() {
    var students = [
        { name:'Student One'},
        { name:'Studnet two'},
        { name:'Student three'}
    ];

    this.markerService.setLocalStorage('students', students);
  }

  getLocalStorage(){
    var students = this.markerService.getLocalStorage('students');
    console.log(students);
  }

  setSession() {
    this.markerService.setSession('name', 'John');
  }

  getSession() {
    var name = this.markerService.getSession('name');
    console.log(name);
  }
}
