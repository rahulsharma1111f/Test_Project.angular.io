import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public showImages: boolean = false;

  public getData1: any;
  public data: any

  private param1 =
    {
      "client_id": "CO-33",
      "empcode": "2",
      "device": "2",
      "deviceId": "browser",
      "app_version": "28",
      "value": 0
    }


  constructor(
    private service: ServiceService,
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    this.getData1 = await this.service.getData(this.param1).then(res => {
    this.data = res['data']
      console.log('data', this.data)
      this.showImages = true;
      // this.data.forEach((element,i) => {
      //   console.log(i,'index')
      //   console.log(element,'element')
      //   document.getElementById(`dynamic${i}`).innerHTML = element.post_content;
      //  });
    });
    console.log(this.getData1);


 
  }

  public navigate(id){
    // this.router.navigate(['full-data' + id])
  }



}
