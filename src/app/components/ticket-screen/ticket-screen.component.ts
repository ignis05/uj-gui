import { Component, EventEmitter, OnInit } from '@angular/core'
import { MatButtonToggleChange } from '@angular/material/button-toggle'
import { Router } from '@angular/router'

import { TranslateService } from '@ngx-translate/core'
import { NavigateBack } from 'src/app/interfaces/navigate-back'
import { PaperTicket, possibleTickets, possibleTimes } from 'src/app/models/paper-ticket.model'

interface TicketInCart extends PaperTicket {
	count: number
}

@Component({
	selector: 'app-ticket-screen',
	templateUrl: './ticket-screen.component.html',
	styleUrls: ['./ticket-screen.component.scss'],
})
export class TicketScreenComponent implements OnInit, NavigateBack {
	visibleComponent: 'main' | 'payment' | 'ticketInfo' = 'main'
	childGoBackEEmitter = new EventEmitter<string>()
	cart: TicketInCart[] = []
	ticketOptions = {
		reduced: false,
		zone: 'I + II + III',
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
		return this.cart.reduce((r, t) => r + t.price * t.count, 0)
	}

	clearCart() {
		this.cart = []
	}

	navigate(comp: typeof this.visibleComponent) {
		this.visibleComponent = comp
	}

	ngOnInit(): void {}

	typeToggle(event: MatButtonToggleChange) {
		console.log(event)
		this.ticketOptions.reduced = event.value == 'reduced'
	}

	zoneToggle() {
		const zones = ['I', 'I + II + III']
		let i = zones.indexOf(this.ticketOptions.zone)
		if (i == -1) return console.error('invalid ticket zone')
		this.ticketOptions.zone = zones[(i + 1) % zones.length]
	}

	setAmount(change: number) {
		this.ticketOptions.amount = Math.min(Math.max(1, this.ticketOptions.amount + change), 20)
	}

	addToCard(ticket: PaperTicket) {
		let existingTicket = this.cart.find((t) => t.time == ticket.time && t.reduced == ticket.reduced && t.zone == ticket.zone)
		if (!existingTicket) this.cart.push({ count: this.ticketOptions.amount, ...ticket })
		else existingTicket.count += this.ticketOptions.amount
	}

	removeFromCart(ticket: TicketInCart) {
		let i = this.cart.findIndex((t) => t == ticket)
		if (i == -1) return console.error('ticket to delete not found in cart')

		if (ticket.count > 1) ticket.count--
		else this.cart.splice(i, 1)
	}

	trackTicket(i: number, ticket: TicketInCart) {
		return ticket.time + ticket.reduced ? 'r' : 'n' + ticket.zone
	}
}
