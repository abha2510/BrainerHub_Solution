import { Component } from '@angular/core';
import { AuthService } from './auth.service';


  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',   // Correct this path
    styleUrls: ['./app.component.scss']
  })

export class AppComponent {
  title = 'barinerhub';
  constructor(public authService: AuthService) { } 
}
