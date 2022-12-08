import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
  declarations: [
    SideNavBarComponent,
    LayoutComponent

  ],
  imports: [
    CommonModule
  ]
})
export class LayoutsModule { }
