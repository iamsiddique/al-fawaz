import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent }      from './main/main.component';
import { AboutComponent }      from './about/about.component';
import { ContactComponent }      from './contact/contact.component';
import { ProductDetailComponent }      from './product-detail/product-detail.component';
import { ModularComponent } from './modular/modular.component';
import { InvestmentComponent } from './investment/investment.component';
import { MedicalCareComponent } from './medical-care/medical-care.component';
import { PersonalityDevComponent } from './personality-dev/personality-dev.component';

const routes: Routes = [
  { path: '', component: MainComponent },  
  { path: 'about-us', component: AboutComponent },  
  { path: 'contact-us', component: ContactComponent }, 
  { path: 'travel-details', component: ProductDetailComponent },
  { path: 'modular-kitcen', component: ModularComponent },
  { path: 'investment', component: InvestmentComponent }, 
  { path: 'medical-care', component: MedicalCareComponent },
  { path: 'personality-dev', component: PersonalityDevComponent },   
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
