import { Component, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core'

@Component({
	selector: 'app-payment-handler',
	templateUrl: './payment-handler.component.html',
	styleUrls: ['./payment-handler.component.scss'],
})
export class PaymentHandlerComponent implements OnInit, OnDestroy {
	@Input() toPay: number = 0
	@Input() goBackEvent: EventEmitter<string> = new EventEmitter()
	chosenPaymentMethod: 'cash' | 'card' | 'blik' | undefined
	eventSubscription: any

	constructor() {}

	goBackFunc() {
		if (!this.chosenPaymentMethod) this.goBackEvent.emit('toParent')
		else if (this.chosenPaymentMethod) this.chosenPaymentMethod = undefined
	}

	ngOnInit(): void {
		this.eventSubscription = this.goBackEvent.subscribe((e) => {
			if (e === 'toChild') this.goBackFunc()
		})
	}

	ngOnDestroy(): void {
		this.eventSubscription?.unsubscribe?.()
	}

	paymentMethodSelectHandler(selected: typeof this.chosenPaymentMethod) {
		this.chosenPaymentMethod = selected
	}
}
