  import { Pipe, PipeTransform } from '@angular/core';
  import { Arac } from '../../models/arac';
  
  @Pipe({
    name: 'carFilter',
  })
  export class CarFilterPipe implements PipeTransform {
  
    transform(value: Arac[], filterText?: string): Arac[] {
      // Eğer filterText parametresi varsa, küçük harfe çevir yoksa tanumlanmamış.
      filterText = filterText ? filterText.toLocaleLowerCase() : undefined;
  
      // Eğer filterText varsa, 'value' dizisindeki Arac nesnelerini model özelliğine göre filtrele.
      return filterText ?
        value.filter((a: Arac) => 
          a.model?.toLocaleLowerCase().includes(filterText!)
        ) :
        // Eğer her bir a için filterText yoksa, orijinal 'value' dizisini döndür.
        value;
    }
  
  }
  
