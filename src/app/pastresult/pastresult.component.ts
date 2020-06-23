import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pastresult',
  templateUrl: './pastresult.component.html',
  styleUrls: ['./pastresult.component.css']
})
export class PastresultComponent implements OnInit {

  pastresult=[]
  past=[]
  constructor(
    private api: ApiService,
    private route: Router 
    ) { }

  ngOnInit(){
    let d=[]
    this.api.getApiCall(environment.apiBaseURL + '/pastresult').then((res)=> {
      this.pastresult=Object(res).pastResult;
      for (var j=0;j<this.pastresult.length;j++){
        let co = Object(this.pastresult[j]).GraphDetails;
        for (var i=0;i<co.length;i++){
          d.push({label: co[i].co_ordinate, y: co[i].nextBounceH });
        }
        this.past.push({
          Co_ordinates:d,
          TotalBounce: Object(this.pastresult[j]).totalbounce,
          Distancecovered: Object(this.pastresult[j]).distance
        })
      }
    });
  }
  back(){
    this.route.navigate(['/']);
  }

}
