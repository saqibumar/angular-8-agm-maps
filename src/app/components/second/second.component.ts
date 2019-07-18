import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {


  constructor(private router: Router) { }


  ngOnInit() {

  }

  
  goToMain(){
    this.router.navigate(['./main']);
   }

}
