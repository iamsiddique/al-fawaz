import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent }      from './main/main.component';
import { AboutComponent }      from './about/about.component';
import { ContactComponent }      from './contact/contact.component';
import { ProductDetailComponent }      from './product-detail/product-detail.component';
import { InvestmentCompComponent } from './investment-comp/investment-comp.component';

const routes: Routes = [
  { path: '', component: MainComponent },  
  { path: 'about-us', component: AboutComponent },  
  { path: 'contact-us', component: ContactComponent }, 
  { path: 'travel-details', component: ProductDetailComponent },
  { path: 'investment', component: InvestmentCompComponent },  
  { path: '', redirectTo: '/', pathMatch: 'full' },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
