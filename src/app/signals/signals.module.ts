import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalsRoutingModule } from './signals-routing.module';

import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { SideMenuComponentComponent } from './components/side-menu-component/side-menu-component.component';
import { SignalsLayoutComponent } from './layout/signalsLayout/signalsLayout.component';



@NgModule({
  declarations: [
		SignalsLayoutComponent,
    CounterPageComponent,
    PropertiesPageComponent,
    SideMenuComponentComponent,
    UserInfoPageComponent,
  ],
  imports: [
    CommonModule,
    SignalsRoutingModule,
  ]
})
export class SignalsModule { }
