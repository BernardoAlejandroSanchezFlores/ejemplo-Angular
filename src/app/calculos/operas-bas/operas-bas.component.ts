import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent implements OnInit {
  num1:string='';
  num2:string='';
  opc:string='' ;

  resultado:number=0;

  constructor() { }
  operacion():void{
  if (this.opc=="suma" || this.opc=="Suma") {
    this.sumar();
  }
  else if (this.opc=="resta" || this.opc=="Resta") {
    this.resta();
  }
  else if (this.opc=="multiplicar" || this.opc=="Multiplicar") {
    this.mult();
  }
  else if (this.opc=="dividir" || this.opc=="Dividir") {
    this.div();
  }

}
  

  sumar():void{
    this.resultado=parseInt(this.num1)+parseInt(this.num2);
  }
  resta():void{
    this.resultado=parseInt(this.num1)-parseInt(this.num2);
  }
  mult():void{
    this.resultado=parseInt(this.num1)*parseInt(this.num2);
  }
  div():void{
    this.resultado=parseInt(this.num1)/parseInt(this.num2);
  }

  ngOnInit(): void {
  }

}
