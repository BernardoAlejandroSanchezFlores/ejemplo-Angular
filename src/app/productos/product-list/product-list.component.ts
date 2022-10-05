import { Component, OnInit } from '@angular/core';
import { IProducto } from '../producto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';
  productos:IProducto[]=[
    {
      "productoId":1,
      "modelo":'Sentra',
      "descripcion":'Auto 4 puertas',
      "marca":'Nissan',
      "year":"febrero 3 2020",
      "precio":250000,
      "puntos":3.3,
      "ImagenUrl":"https://wieck-nissanao-production.s3.amazonaws.com/photos/cc12bb6c50b6ff98695d616be92cb3183849636e/preview-928x522.jpg"
    },
    {
      "productoId":2,
      "modelo":'Rio',
      "descripcion":'Auto 4 puertas',
      "marca":'Kia',
      "year":"Marzo 24 2000",
      "precio":150000,
      "puntos":4.3,
      "ImagenUrl":"https://coches.com/fotos_historicas/kia/Rio-2000/kia_rio_r3.jpg"
    },
    {
      "productoId":3,
      "modelo":'March',
      "descripcion":'Auto 2 puertas',
      "marca":'Nissan',
      "year":"Marzo 24 2000",
      "precio":150000,
      "puntos":2.8,
      "ImagenUrl":"https://www.auto-data.net/images/f108/Nissan-March-K11.jpg"
    }
  ]

  constructor() { }

  ShowImagen():void{
    this.muestraImg= !this.muestraImg;

  }

  ngOnInit(): void {
  }

}
