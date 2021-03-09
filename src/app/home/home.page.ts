import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalvarService } from '../globalvar.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  

  judul=""
  isi=""
  tanggal=""
  constructor(private globalvar:GlobalvarService,private router:Router) { }

  data
  ngOnInit() {
    this.data=this.globalvar.getData()
  }
  tambah(){
    let today=new Date()
    let dataBaru={
      judul:this.judul,
      isi:this.isi,
      tanggal:today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(),
      favorite:"tidak"
    }
    this.globalvar.addData(dataBaru)
    this.data=this.globalvar.getData()    
  }
  detail(index){
    this.router.navigate(['/halaman2/'+index])
  }

}
