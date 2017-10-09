import { Pipe, PipeTransform } from '@angular/core';

import { ParkAttraction } from './park-attraction.model';

@Pipe({
  name: 'typeFilter'
})
export class TypeFilterPipe implements PipeTransform {

  transform(attractions: ParkAttraction[], filters?: any): any {
    console.log('filters', filters);
    if(filters == null || filters.length == 0) {
      return attractions;
    } else {
      return attractions.filter(attr => filters.indexOf(attr.type) > -1);
    }
  }

}
