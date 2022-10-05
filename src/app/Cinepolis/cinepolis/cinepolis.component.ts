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
  total:any;
  tarj:string="";
  costo:number=12.00;
  imp;
  mensaje:string="";
  check:number;
  res:number=0.0;
  

  constructor() { }
  Procesar():void{
    this.check=(this.bol/this.cant);

    if(this.nom=="" || this.cant==null || this.bol==null || this.tarj==""){
      this.imp=false;
      this.mensaje="Ingrese datos faltantes para continuar";

    }
    else if(this.check>=7.1){
      this.imp=false;
      this.mensaje="Solo se pueden adquirir 7 boletas por comprador";
      this.total=null;

      
    }
    else if(this.check<=7){
      this.Proceso();
    }
  }
    
    Proceso():void{
      if(this.bol>=6 && this.tarj=="Si"){
        this.mensaje="";
        this.res=(this.bol*this.costo);
        this.total=(this.res*0.15);
        this.res=(this.res-this.total);
        this.total=(this.res*0.10)
        this.res=(this.res-this.total);
        this.total=this.res.toFixed(2);
        this.imp = true;
      }
      else if (this.bol>=6 && this.tarj=="No"){
        this.mensaje="";
        this.res=(this.bol*this.costo);
        this.total=(this.res*0.15);
        this.res=(this.res-this.total);
        this.total=this.res.toFixed(2);
        this.imp = true;
      }
  
       if((this.bol>=3 && this.bol<=5) && this.tarj=="Si"){
        this.mensaje="";
        this.res=(this.bol*this.costo);
        this.total=(this.res*0.10);
        this.res=(this.res-this.total);
        this.total=(this.res*0.10)
        this.res=(this.res-this.total);
        this.total=this.res.toFixed(2);
        this.imp = true;
      }
      else if ((this.bol>=3 && this.bol<=5) && this.tarj=="No"){
        this.mensaje="";
        this.res=(this.bol*this.costo);
        this.total=(this.res*0.10);
        this.res=(this.res-this.total);
        this.total=this.res.toFixed(2);
        this.imp = true;
      }
  
       if((this.bol>=1 && this.bol<=2) && this.tarj=="Si"){
        this.mensaje="";
        this.res=(this.bol*this.costo);
        this.total=(this.res*0.10);
        this.res=(this.res-this.total);
        this.total=this.res.toFixed(2);
        this.imp = true;
      }
      else if ((this.bol>=1 && this.bol<=2) && this.tarj=="No"){
         this.mensaje="";
        this.total=(this.bol*this.costo).toFixed(2);
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
