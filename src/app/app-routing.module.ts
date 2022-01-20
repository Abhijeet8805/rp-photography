import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { Shoot1Component } from './Shoots/shoot1/shoot1.component';

const routes: Routes = [
  { path: '',component:HomepageComponent},
  { path: 'about',component:AboutmeComponent},
  { path: 'contact',component:ContactmeComponent},
  { path: 'services',component:OurservicesComponent},
  { path: 'portfolio',component:PortfolioComponent},
  { path: 'portfolio/shoot1',component:Shoot1Component},
  { path: 'portfolio/shoot2',component:Shoot1Component},
  { path: 'portfolio/shoot3',component:Shoot1Component},
  { path: 'portfolio/shoot4',component:Shoot1Component},
  { path: 'portfolio/shoot5',component:Shoot1Component},
  { path: 'portfolio/shoot6',component:Shoot1Component},
  { path: 'portfolio/shoot7',component:Shoot1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
