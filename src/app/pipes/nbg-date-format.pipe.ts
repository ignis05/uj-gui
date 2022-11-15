import { Pipe, PipeTransform } from '@angular/core'
import { NgbDate } from '@ng-bootstrap/ng-bootstrap'

@Pipe({
	name: 'nbgDateFormat',
})
export class NbgDateFormatPipe implements PipeTransform {
	transform(value: NgbDate, ...args: unknown[]): unknown {
		return `${value.year}-${value.month}-${value.day}`
	}
}
