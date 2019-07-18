import { MarkersService } from './../../../services/markers.service';
import { MapService, marker } from './../../../services/map.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.css']
})
export class Tab2Component implements OnInit {

  isCircle: boolean = false;
  
  mapForm: FormGroup;
  
  markers: marker[]=[];
  zoom: number = 8;
  lat: number;
  lng: number;

  constructor(private mapSvc:MapService, private formBuilder: FormBuilder,
    private markerSvc:MarkersService) { }

  ngOnInit() {
    
    this.getLocations();

    this.mapForm = this.formBuilder.group({
      locationName: ['', Validators.required],  
      lat: ['', Validators.required],
      lng: ['', Validators.required]
    });

  }

  isDisabled:boolean = true;

  
protected map: any;
mapReady(map) {
 this.map = map;
}

public get f() { return this.mapForm.controls; }

  onSubmit() {
    console.log('Your form data : ', this.mapForm.value );
    let lat = this.mapForm.controls["lat"].value;
    let lng = this.mapForm.controls["lng"].value;
    let name = this.mapForm.controls["locationName"].value;
    /* if(name === "" || lat === "" || lng === ""){
      console.log("Missing values");
    } */
    if (this.mapForm.invalid) {
      console.log("Missing values", this.f.locationName.errors);
      return;
  }
      return;
    this.markers.push({
      lat: parseFloat(lat),
      lng: parseFloat(lng),
      name: name, 
    });
    console.log("markers", this.markers);

    if (this.map)
      this.map.setCenter({ lat: this.lat, lng: this.lng });

}

getLocations(){

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

  });
}

tempMarkers=[];
clearMarkers(){
  if(this.markers.length<=0){
    this.markers = this.tempMarkers;
  }
  else{
    this.tempMarkers = this.markers;
    this.markers = [];
  }
}

circleMarkers=[];
circle(){
  this.isCircle=!this.isCircle;
  var locs = {lat: this.lat, lng: this.lng};
  console.log("locs = ", locs);
  console.log("radius", this.radius);
  this.filterCircleMarkers();
}

filterCircleMarkers(){
  if(this.tempMarkers.length<=0){
    this.tempMarkers = this.markers;
  }
  else{
    this.markers = this.tempMarkers;
  }
  this.circleMarkers=[];
  if(this.isCircle){
    this.markers.forEach((item, index)=>{
      var locs = {lat: this.lat, lng: this.lng};
      var user = {lat: item.lat, lng: item.lng};
      var n = this.arePointsNear(user, locs, this.radius);
      if(n){
        this.circleMarkers.push({
          lat: item.lat,
          lng: item.lng,
          name: item.name, 
        });
      }
      else{
        
      }
    });
    this.markers = this.circleMarkers;
  }
  // console.log("this.markers = ", this.markers);
}


previous:any;
mapClicked($event: MouseEvent) {
  this.mapForm.controls["lat"].setValue($event["coords"].lat);
  this.mapForm.controls["lng"].setValue($event["coords"].lng);

  /* var locs = {lat: $event["coords"].lat, lng: $event["coords"].lng};
  var user = {lat: 33.98708, lng: 32.87687};
  var n = this.arePointsNear(user, locs, this.radius);
  console.log("n = ", n); */
}

radius: any = 100000;
circleDragEnd($event: any){
  console.log($event);
  this.filterCircleMarkers();
}

onCenterChanged($event: any){
  this.lat=$event.lat;
  this.lng=$event.lng;
}

onRadiusChanged($event: any){
  this.radius = $event;
  console.log($event);
  this.filterCircleMarkers();
}

mouseup($event: any){
  console.log("MOUSE", $event);
}
/////////////////////////////////

arePointsNear(checkPoint, centerPoint, m) { 
  var km = m/1000;
  var ky = 40000 / 360;
  var kx = Math.cos(Math.PI * centerPoint.lat / 180.0) * ky;
  var dx = Math.abs(centerPoint.lng - checkPoint.lng) * kx;
  var dy = Math.abs(centerPoint.lat - checkPoint.lat) * ky;
  return Math.sqrt(dx * dx + dy * dy) <= km;
}
}
