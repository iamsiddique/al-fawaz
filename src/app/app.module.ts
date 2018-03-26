import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ModularComponent } from './modular/modular.component';
import { InvestmentComponent } from './investment/investment.component';
import { MedicalCareComponent } from './medical-care/medical-care.component';
import { PersonalityDevComponent } from './personality-dev/personality-dev.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    ProductDetailComponent,
    ModularComponent,
    InvestmentComponent,
    MedicalCareComponent,
    PersonalityDevComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
