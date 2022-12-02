import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [SideBarComponent],
  imports: [CommonModule, RouterModule],
  exports: [SideBarComponent],
})
export class SharedModule {}
