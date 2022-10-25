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
	chosenPaymentMethod: 'cash' | 'card' | 'blik' | undefined
	eventSubscription: any
	cardPaymentResult: 'accepted' | 'declined' | undefined
	blikInput = new FormControl('')
	blikPaymentStatus: 'code' | 'waiting' | 'confirmation' = 'code'

	constructor(private router: Router) {
		this.mockupInteractionHandler = this.mockupInteractionHandler.bind(this)
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
			console.log('card')
			if (e.code == 'KeyA') this.cardPaymentResult = 'accepted'
			else if (e.code == 'KeyD') this.cardPaymentResult = 'declined'
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
}
