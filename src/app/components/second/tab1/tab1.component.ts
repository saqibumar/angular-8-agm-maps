import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MapService, marker } from './../../../services/map.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css']
})
export class Tab1Component implements OnInit {
  markers: marker[]=[];
  zoom: number = 8;
  lat: number;
  lng: number;
  isLoading: boolean = true;

  displayedColumns = ['lat', 'lng', 'name'];
  dataSource = new MatTableDataSource<marker>(this.markers);
  @ViewChild(MatPaginator,null) paginator: MatPaginator;


  constructor(private mapSvc:MapService) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    console.log("dataSource = ", this.dataSource);
  }

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
        setTimeout(() => {          
          this.dataSource = new MatTableDataSource<any>(this.markers);
          this.dataSource.paginator = this.paginator;
          this.isLoading=false;
        }, 1000);
       
        
      }
    }, error=>{
      console.log("ERROR = ", error);
    },()=>{
      console.log("success");
      console.log("markers", this.markers.length);
    });
  }

}
