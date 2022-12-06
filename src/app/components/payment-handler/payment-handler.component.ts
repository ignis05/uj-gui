import { Component, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
	selector: 'app-payment-handler',
	templateUrl: './payment-handler.component.html',
	styleUrls: ['./payment-handler.component.scss'],
})
export class PaymentHandlerComponent implements OnInit, OnDestroy {
	@Input() toPay: number = 0
	@Input() goBackEvent: EventEmitter<string> = new EventEmitter()
	@Input() successMsg: string = ''
	chosenPaymentMethod: 'cash' | 'card' | 'blik' | undefined
	eventSubscription: any
	cardPaymentResult: 'accepted' | 'declined' | undefined
	blikInput = new FormControl('')
	blikPaymentStatus: 'code' | 'waiting' | 'confirmation' = 'code'
	paid: number = 0
	cashPaymentStatus: 'inProgress' | 'complete' = 'inProgress'

	constructor(private router: Router) {
		this.mockupInteractionHandler = this.mockupInteractionHandler.bind(this)
	}

	get leftToPay() {
		return Math.max(0, this.toPay - this.paid)
	}

	goBackFunc() {
		if (!this.chosenPaymentMethod) this.goBackEvent.emit('toParent')
		else if (this.chosenPaymentMethod) this.chosenPaymentMethod = undefined
	}

	ngOnInit(): void {
		this.eventSubscription = this.goBackEvent.subscribe((e) => {
			if (e === 'toChild') this.goBackFunc()
		})
		document.addEventListener('keyup', this.mockupInteractionHandler)
	}

	ngOnDestroy(): void {
		this.eventSubscription?.unsubscribe?.()
		document.removeEventListener('keyup', this.mockupInteractionHandler)
	}

	mockupInteractionHandler(e: KeyboardEvent) {
		console.log(e.code)
		if (this.chosenPaymentMethod == 'card') {
			if (e.code == 'KeyA') this.cardPaymentResult = 'accepted'
			else if (e.code == 'KeyD') this.cardPaymentResult = 'declined'
		} else if (this.chosenPaymentMethod == 'cash') {
			switch (e.code) {
				case 'Digit1':
					this.paid += 1
					break
				case 'Digit2':
					this.paid += 2
					break
				case 'Digit5':
					this.paid += 5
					break
				case 'KeyZ':
					this.paid += 10
					break
				case 'KeyX':
					this.paid += 20
					break
				case 'KeyC':
					this.paid += 50
					break
				case 'KeyV':
					this.paid += 100
					break
				case 'KeyB':
					this.paid += 200
					break
			}
		} else if (this.chosenPaymentMethod == 'blik') {
			if (e.code === 'KeyC') this.blikPaymentStatus = 'confirmation'
		}
	}

	paymentMethodSelectHandler(selected: typeof this.chosenPaymentMethod) {
		this.chosenPaymentMethod = selected
	}

	cardPaymentCompleteHandler() {
		if (this.cardPaymentResult === 'accepted') this.router.navigateByUrl('/')
		else this.goBackFunc()

		this.cardPaymentResult = undefined
	}

	blikKeypadHandler(value: string) {
		if (value != 'OK') this.blikInput.setValue(value)
		else this.blikPaymentStatus = 'waiting'
	}

	blikProcessNavigation(dest: typeof this.blikPaymentStatus) {
		this.blikPaymentStatus = dest
	}

	confirmCashPayment() {
		this.cashPaymentStatus = 'complete'
	}

	cancelCashPayment() {
		this.paid = 0
		this.chosenPaymentMethod = undefined
	}

	cashPaymentCompleteHandler() {
		this.router.navigateByUrl('/')
	}

	blikClosePayment() {
		if (this.blikPaymentStatus == 'confirmation') this.router.navigateByUrl('/')
	}
}
