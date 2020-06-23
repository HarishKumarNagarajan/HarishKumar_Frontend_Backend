import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as CanvasJS from '../../assets/canvasjs.min';
import { environment } from 'src/environments/environment';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  past=[];
  pastresult = [];
  range=0;
  height=0;
  distance = [];
  totalbounce=[];
  coordinates = [];
  dataPoints = []
  dpsLength = 0;
  chart: any;
  constructor(
    private api: ApiService,
    private route: Router 
  ) { }

  ngOnInit() {
    this.chart = new CanvasJS.Chart("chartContainer",{
      animationEnabled: true,
      exportEnabled: true,
      title:{
        text:"Ball Bouncing Chart"
      },
      axisX: {
        title: "Time",
        suffix : "s"
      },
      axisY: {
        title: "BounceHeight",
        titleFontColor: "#4F81BC",
        suffix : " m",
        lineColor: "#4F81BC",
        tickColor: "#4F81BC"
      },
      data: [{
        type: "spline",
        dataPoints : this.dataPoints,
      }]
    });
  }

  check(){
    this.dataPoints.push({label: 0, y: this.height});
    this.api.getApiCall(environment.apiBaseURL + '/bounces?height='+this.height+'&coefficient='+this.range).then((res)=> {
      this.distance=Object(res).distance;
      this.totalbounce=Object(res).totalbounce;
      this.coordinates= Object(res).GraphDetails;
      for (var i=0;i<this.coordinates.length;i++){
        this.dataPoints.push({label: this.coordinates[i].co_ordinate, y: this.coordinates[i].nextBounceH });
        // this.dataPoints.push({x: this.coordinates[i].co_ordinate, y: this.coordinates[i].nextBounceH });
      }
      console.log(this.chart.data)
      this.dpsLength = this.dataPoints.length;
      this.chart.render();
  });
}

previous(){
  this.route.navigate(['/past']);
  
}

}
