// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YunaComponent } from './yuna/yuna.component';
import { YunashopComponent } from './yunashop/yunashop.component';
import { CardComponent } from './card/card.component'; // Update the import
import { ProductsComponent } from './products/products.component'; // Update the import
import { CartService } from './cart.service';


@NgModule({
  declarations: [
    AppComponent,
    YunaComponent,
    YunashopComponent,
    CardComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
