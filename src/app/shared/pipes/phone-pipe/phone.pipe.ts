import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(tel: any) {
    if (tel) {
      const value = tel.toString().replace(/\D/g, '');

      let foneFormatado = '';

      if (value.length > 12) {
       return foneFormatado = value.replace(/(\d{2})?(\d{2})?(\d{5})?(\d{4})/, '+$1 ($2) $3-$4');

      } else if (value.length > 11) {
       return foneFormatado = value.replace(/(\d{2})?(\d{2})?(\d{4})?(\d{4})/, '+$1 ($2) $3-$4');

      } else if (value.length > 10) {
       return foneFormatado = value.replace(/(\d{2})?(\d{5})?(\d{4})/, '($1) $2-$3');

      } else if (value.length > 9) {
       return foneFormatado = value.replace(/(\d{2})?(\d{4})?(\d{4})/, '($1) $2-$3');

      } else if (value.length > 5) {
       return foneFormatado = value.replace(/^(\d{2})?(\d{4})?(\d{0,4})/, '($1) $2-$3');

      } else if (value.length > 1) {
       return foneFormatado = value.replace(/^(\d{2})?(\d{0,5})/, '($1) $2');      } else {
        if (tel !== '') { foneFormatado = value.replace(/^(\d*)/, '($1'); }
      }
      return foneFormatado;
    }
  }
}