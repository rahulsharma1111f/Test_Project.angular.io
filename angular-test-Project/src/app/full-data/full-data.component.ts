import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-full-data',
  templateUrl: './full-data.component.html',
  styleUrls: ['./full-data.component.css']
})
export class FullDataComponent implements OnInit {

  private getData2: any;

  constructor(
    private service: ServiceService,
    private activateRouter: ActivatedRoute
   
  ) { }

  ngOnInit(): void {
    this.activateRouter.params.subscribe(res => {
      if(res){
        this.postData(res['id']);
      }
    })
    
  }

  public postData = (id: string): void => {
    const params =
    {
      "client_id": "CO-33",
      "employee_id": "2",
      "device": "2",
      "device_id": "browser",
      "app_version": "28",
      "post_id": String(id),
      "newsType": "1"
    }
    this.getData2 = this.service.getDataSecond(params).subscribe(res => {
      console.log('gg2')
    });
  }

}
