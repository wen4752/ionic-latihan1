import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalvarService {

  constructor() { }
  data=[]
  public addData(x){
    this.data.push(x)
  }
  public getData(){
    return this.data

  }
  public getbyIndex(index){
    return this.data[index]
  }
  public updatestatus(index){
    if(this.data[index].favorite=="ya"){
      this.data[index].favorite="tidak"
    }else{
      this.data[index].favorite="ya"
    }
  }
}
