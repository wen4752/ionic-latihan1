import { Component, OnInit } from '@angular/core';
import { GlobalvarService } from '../globalvar.service';

@Component({
  selector: 'app-page-favorite',
  templateUrl: './page-favorite.page.html',
  styleUrls: ['./page-favorite.page.scss'],
})
export class PageFavoritePage implements OnInit {

  constructor(private globalvar:GlobalvarService) { }
  data=[]
  ngOnInit() {
    let temp=this.globalvar.getData()
    for(var i=0;i<this.globalvar.getData().length;i++){
      if(temp[i].favorite=="ya"){
        this.data.push(temp[i])
      }
    }
  }

}
