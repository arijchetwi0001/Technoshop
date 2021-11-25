import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoireComponent } from './accessoire/accessoire.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PcComponent } from './pc/pc.component';
import { SigninComponent } from './signin/signin.component';
import { TabletComponent } from './tablet/tablet.component';
import { TelephoneComponent } from './telephone/telephone.component';

const routes: Routes = [
  {path:'',component: HomeComponent },
  {path:'telephone',component: TelephoneComponent },
  {path:'tablet',component: TabletComponent },
  {path:'pc',component: PcComponent },
  {path:'accessoire',component: AccessoireComponent },
  {path:'signin',component: SigninComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
