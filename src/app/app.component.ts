import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'maps';

  
  constructor(private router: Router) { }

  goToMain(){
    this.router.navigate(['./main']);
   }
}
