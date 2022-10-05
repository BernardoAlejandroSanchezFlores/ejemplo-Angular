import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './productos/product-list/product-list.component';
import { ProductoFiltroPipe } from './productos/producto-filtro.pipe';
import { OperasBasComponent } from './calculos/operas-bas/operas-bas.component';
import { TablaComponent } from './calculos/tabla/tabla.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from './material/material.module';
import { CinepolisComponent } from './Cinepolis/cinepolis/cinepolis.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductoFiltroPipe,
    OperasBasComponent,
    TablaComponent,
    MenuComponent,
    CinepolisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
