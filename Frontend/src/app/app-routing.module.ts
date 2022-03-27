import { ContactComponent } from './Components/contact/contact.component';
import { CustomercareComponent } from './Components/customercare/customercare.component';
import { HistoryComponent } from './Components/history/history.component';
import { LocateComponent } from './Components/locate/locate.component';
import { FeaturesComponent } from './Components/features/features.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/home/home.component';
import { PricingComponent } from './Components/pricing/pricing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'features',component:FeaturesComponent},
  {path:'locateus',component:LocateComponent},
  {path:'pricing',component:PricingComponent},
  {path:'history',component:HistoryComponent},
  {path:'customersupport',component:CustomercareComponent},
  {path:'contactus',component:ContactComponent},
  {path:'register',component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
