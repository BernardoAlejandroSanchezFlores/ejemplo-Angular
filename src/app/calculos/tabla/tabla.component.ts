import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  num:number;
  
  total:string[]=[];
  

  constructor() { }
  tabla():void{
    let total:string[]=[];
    let i:number;
    let resultado:number
    for (i=1;i<=10;i++){
      resultado=this.num*i;
      total.push(this.num+" x "+i+" = "+resultado);
      this.total = total;
      
    }
}
 
  ngOnInit(): void {
  }

}
