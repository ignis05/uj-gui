import { Component, EventEmitter, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { TranslateService } from '@ngx-translate/core'
import { NavigateBack } from 'src/app/interfaces/navigate-back'
import { PaperTicket } from 'src/app/models/paper-ticket.model'

@Component({
	selector: 'app-ticket-screen',
	templateUrl: './ticket-screen.component.html',
	styleUrls: ['./ticket-screen.component.scss'],
})
export class TicketScreenComponent implements OnInit, NavigateBack {
	visibleComponent: 'main' | 'payment' = 'main'
	childGoBackEEmitter = new EventEmitter<string>()
	cart: PaperTicket[] = [
		{ reduced: true, validFor: '20 #minutes', zone: '1', price: 2.0 },
		{ reduced: false, validFor: '20 #minutes', zone: '1', price: 5.0 },
	]

	constructor(public translate: TranslateService, private router: Router) {
		this.goBack = this.goBack.bind(this)

		this.childGoBackEEmitter.subscribe((e) => {
			if (e === 'toParent') this.visibleComponent = 'main'
		})
	}

	goBack(): void {
		if (this.visibleComponent == 'main') this.router.navigateByUrl('/')
		else if (this.visibleComponent == 'payment') this.childGoBackEEmitter.emit('toChild')
		else this.visibleComponent = 'main'
	}

	get totalPrice() {
		return this.cart.reduce((r, t) => r + t.price, 0)
	}

	confirmPurchase() {
		this.visibleComponent = 'payment'
	}

	ngOnInit(): void {}
}
