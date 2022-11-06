import { Component, EventEmitter, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { TranslateService } from '@ngx-translate/core'
import { NavigateBack } from 'src/app/interfaces/navigate-back'
import { PaperTicket, possibleTickets, possibleTimes } from 'src/app/models/paper-ticket.model'

@Component({
	selector: 'app-ticket-screen',
	templateUrl: './ticket-screen.component.html',
	styleUrls: ['./ticket-screen.component.scss'],
})
export class TicketScreenComponent implements OnInit, NavigateBack {
	visibleComponent: 'main' | 'payment' = 'main'
	childGoBackEEmitter = new EventEmitter<string>()
	cart: PaperTicket[] = [
		{ reduced: true, validFor: '#valid-20min', zone: 'I', price: 2.0 },
		{ reduced: false, validFor: '#valid-20min', zone: 'I', price: 5.0 },
	]
	ticketOptions = {
		reduced: false,
		zone: 'I',
		amount: 1,
	}
	possibleTickets = possibleTickets
	possibleTimes = possibleTimes

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

	clearCart() {
		this.cart = []
	}

	ngOnInit(): void {}

	typeToggle() {
		this.ticketOptions.reduced = !this.ticketOptions.reduced
	}

	zoneToggle() {
		const zones = ['I', 'I + II', 'I + II + III']
		let i = zones.indexOf(this.ticketOptions.zone)
		if (i == -1) return console.error('invalid ticket zone')
		this.ticketOptions.zone = zones[(i + 1) % zones.length]
	}

	setAmount(change: number) {
		this.ticketOptions.amount = Math.min(Math.max(1, this.ticketOptions.amount + change), 20)
	}

	addToCard(validFor: PaperTicket["validFor"]) {
		let ticket: PaperTicket = {
			price: 10,
			reduced: this.ticketOptions.reduced,
			zone: this.ticketOptions.zone,
			validFor,
		}

		for (let i = 0; i < this.ticketOptions.amount; i++) {
			this.cart.push(ticket)
		}
	}

	removeFromCart(ticket: PaperTicket) {
		let i = this.cart.findIndex((t) => t == ticket)
		if (i == -1) return console.error('ticket to delete not found in cart')
		this.cart.splice(i, 1)
	}
}
