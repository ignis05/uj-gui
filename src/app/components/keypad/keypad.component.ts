import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
	selector: 'app-keypad',
	templateUrl: './keypad.component.html',
	styleUrls: ['./keypad.component.scss'],
})
export class KeypadComponent implements OnInit {
	@Input() maxLength: number = 6
	@Input() buttonHeight: string = '150px'
	value: string = ''
	@Output() valueOutput = new EventEmitter<string>()

	constructor() {}

	ngOnInit(): void {}

	keyClickHandler(btnValue: number) {
		if (btnValue == 10) {
			return this.valueOutput.emit('OK')
		} else if (btnValue == -1) {
			if (this.value.length > 0) this.value = this.value.slice(0, -1)
		} else {
			if (this.value.length < this.maxLength) this.value += btnValue.toString()
		}
		this.valueOutput.emit(this.value)
	}
}
