import { Component, OnInit } from '@angular/core'
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
	cart: PaperTicket[] = [
		{ reduced: true, validFor: '20 #minutes', zone: '1', price: 2.0 },
		{ reduced: false, validFor: '20 #minutes', zone: '1', price: 5.0 },
	]

	constructor(public translate: TranslateService, private router: Router) {
		this.goBack = this.goBack.bind(this)
	}

	goBack(): void {
		this.router.navigateByUrl('/')
	}

	get totalPrice() {
		return this.cart.reduce((r, t) => r + t.price, 0)
	}

	confirmPurchase() {
		let price = this.totalPrice
	}

	ngOnInit(): void {}
}
