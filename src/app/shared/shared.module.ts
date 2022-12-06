import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonePipe } from './pipes/phone-pipe/phone.pipe';
import { CpfPipe } from './pipes/cpf-pipe/cpf-pipe.pipe';

@NgModule({
  declarations: [PhonePipe, CpfPipe],
  imports: [CommonModule],
  exports: [PhonePipe, CpfPipe],
})
export class SharedModule {}
