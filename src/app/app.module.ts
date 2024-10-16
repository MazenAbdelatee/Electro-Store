;
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ButtonsComponent } from './shared/buttons/buttons.component';
import { ProductsComponent } from './products/products.component';
import { PrdetailComponent } from './prdetail/prdetail.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [	
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ButtonsComponent,
    ProductsComponent,
    PrdetailComponent,
    NotFoundComponent,
    CartComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
