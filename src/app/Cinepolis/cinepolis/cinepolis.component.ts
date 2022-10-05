import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent implements OnInit {

  nom:string="";
  cant:number;
  bol:number;
  total:number;
  tarj:string="";
  costo:number=12000.00;
  imp;
  mensaje:string="";
  check:number;
  

  constructor() { }
  Procesar():void{
    this.check=(this.bol/this.cant);

    if(this.nom=="" || this.cant==null || this.bol==null || this.tarj==""){
      this.imp=false;
      this.mensaje="Ingrese datos faltantes para continuar";

    }
    else if(this.check>=8){
      this.imp=false;
      this.mensaje="Solo se pueden adquirir 7 boletas por comprador";

      
    }
    else if(this.check<=7){
      this.Proceso();
    }
  }
    
    Proceso():void{
      if(this.bol>=6 && this.tarj=="Si"){
        this.mensaje="";
        this.total=((this.bol*this.costo)*0.15)*0.10;
        this.imp = true;
      }
      else if (this.bol>=6 && this.tarj=="No"){
        this.mensaje="";
        this.total=(this.bol*this.costo)*0.15;
        this.imp = true;
      }
  
       if((this.bol>=3 && this.bol<=5) && this.tarj=="Si"){
        this.mensaje="";
        this.total=((this.bol*this.costo)*0.10)*0.10;
        this.imp = true;
      }
      else if ((this.bol>=3 && this.bol<=5) && this.tarj=="No"){
        this.mensaje="";
        this.total=(this.bol*this.costo)*0.10;
        this.imp = true;
      }
  
       if((this.bol>=1 && this.bol<=2) && this.tarj=="Si"){
        this.mensaje="";
        this.total=(this.bol*this.costo)*0.10;
        this.imp = true;
      }
      else if ((this.bol>=1 && this.bol<=2) && this.tarj=="No"){
         this.mensaje="";
        this.total=this.bol*this.costo;
        this.imp = true;
      }
    }
      
    
    
    
    
  
  cancelar():void{
    this.nom="";
    this.cant=null;
    this.bol=null;
    this.total=null;
    this.tarj="";
    this.imp = false;
    this.mensaje="";
   

  }
  
  

  ngOnInit(): void {
    this.imp=false;
  }

}
