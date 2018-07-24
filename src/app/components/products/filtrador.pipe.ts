import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrador'
})
export class FiltradorPipe implements PipeTransform {

  transform(value: any, args: any): any {
    
    if(args =='available' ){
      return value.filter(available => available.available === true);
    }
    if(args == 'quantity'){
      return  value.sort(
        (x,y)=>{
          if( x.quantity>y.quantity){
            return -1
          }if(x.quantity<y.quantity){
            return 1
          }
          return 0;
        }
      )
    }if(args == 'price'){

      value.sort((a,b)=>{
        if(a.price>b.price){
          return 1;
        }if(a.price<b.price){
          return -1;
        }
        return 0;
       })
       return value;
     }

   return value
  }
}
