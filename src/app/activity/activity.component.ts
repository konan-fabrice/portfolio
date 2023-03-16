import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent  implements OnInit {
    title=''
    statu=''
    constructor(private ServicesService: ServicesService){}
    ngOnInit(): void {
        this.title=this.ServicesService.title;
        this.statu=this.ServicesService.statu;
    }
}
