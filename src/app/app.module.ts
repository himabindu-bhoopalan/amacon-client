import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarousalComponent } from './carousal/carousal.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductlistComponent } from './productlist/productlist.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { GcategoryComponent } from './gcategory/gcategory.component';
import { EcategoryComponent } from './ecategory/ecategory.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    CarousalComponent,
    ProductlistComponent,
    SingleproductComponent,
    CategorylistComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent,
    GcategoryComponent,
    EcategoryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
