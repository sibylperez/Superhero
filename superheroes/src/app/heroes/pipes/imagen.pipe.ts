import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(item: Heroe): string {

    if (!item.id && !item.alt_img) {
      return 'assets/no-image.png';
    } else if (item.alt_img) {
      return item.alt_img
    } else if (item.alt_img === "") {
      return 'assets/no-image.png'
    } else {
      return `assets/heroes/${item.id}.jpg`;
    }
  }

}
