import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalvarService } from '../globalvar.service';

@Component({
  selector: 'app-halaman2',
  templateUrl: './halaman2.page.html',
  styleUrls: ['./halaman2.page.scss'],
})
export class Halaman2Page implements OnInit {

  constructor(private aRoute:ActivatedRoute,private globalvar:GlobalvarService) { }
  paramIndex
  data
  icon:string
  ngOnInit() {
    this.paramIndex=this.aRoute.snapshot.paramMap.get("index")
    this.data=this.globalvar.getbyIndex(this.paramIndex)
    if(this.data.favorite=="ya"){
      this.icon="heart"
    }
    else{
      this.icon="heart-outline"
    }
    
  }

  status(){
    this.globalvar.updatestatus(this.paramIndex)
    this.data=this.globalvar.getbyIndex(this.paramIndex)
    if(this.data.favorite=="ya"){
      this.icon="heart"
    }
    else{
      this.icon="heart-outline"
    }
  }
}
