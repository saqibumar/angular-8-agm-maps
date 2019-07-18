import { MapService, marker } from './../../services/map.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  markers: marker[]=[];
  zoom: number = 8;
  lat: number;
  lng: number;
  
  toggleCol: boolean=false;
  fsMap: string = "col-12";

  constructor(private mapSvc:MapService, private router: Router) { }

  ngOnInit() {

    this.markers=[];
    this.mapSvc.getJSON().subscribe(parsedData => {
      if(parsedData)
      {
        this.lat = parsedData[0].coordinates[0]
        this.lng = parsedData[0].coordinates[1]
        
        parsedData.forEach(element => {
          
        // console.log("parsedData", element.coordinates);
        this.markers.push({
          lat: parseFloat(element.coordinates[0]),
          lng: parseFloat(element.coordinates[1]),
          name: element.name, 
        });
        });
       
        
      }
    }, error=>{
      console.log("ERROR = ", error);
    },()=>{
      console.log("success");
      console.log("markers", this.markers);

    });
    
  }


displayInfo:any;
  clickedMarker(clickEvent, label, index, infoWindow) {
    this.displayInfo = this.markers[index];
    console.log("clickEvent = ", this.displayInfo);
    this.toggleCol = true;
   }

   closeCol(){
    this.toggleCol = false;
   }

   goToSecond(){
    this.router.navigate(['./second']);
   }
  

}


/* interface marker {
	lat: number;
  lng: number;
  name: string;
} */