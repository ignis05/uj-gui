import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'app-payment-handler',
	templateUrl: './payment-handler.component.html',
	styleUrls: ['./payment-handler.component.css'],
})
export class PaymentHandlerComponent implements OnInit {
	chosenPaymentMethod: 'cash' | 'card' | 'blik' | undefined

	constructor() {}

	ngOnInit(): void {}
}
