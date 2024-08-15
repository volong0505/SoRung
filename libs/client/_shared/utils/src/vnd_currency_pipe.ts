import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'VNDCurrencyPipe'
})
export class VNDCurrencyPipe implements PipeTransform {
    transform(value: number) {
        if (isNaN(value)) return 'Not a number'
        let x = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(+value)
        return x
    }
}