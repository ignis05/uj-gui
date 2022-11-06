import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { PaperTicket, possibleTickets } from 'src/app/models/paper-ticket.model'

@Component({
	selector: 'app-ticket-button',
	templateUrl: './ticket-button.component.html',
	styleUrls: ['./ticket-button.component.scss'],
})
export class TicketButtonComponent implements OnInit, OnChanges {
	@Input() reduced: boolean = false
	@Input() time: PaperTicket['time'] = '#valid-20min'
	@Input() zone: string = 'I'
	@Output() addToCart = new EventEmitter<PaperTicket>()
	price: number = 0.0
	actualTicket: PaperTicket = { reduced: this.reduced, time: this.time, zone: this.zone, price: 0 }

	constructor(public translate: TranslateService) {}

	ngOnInit(): void {
		this.calculatePrice()
	}

	ngOnChanges(): void {
		this.calculatePrice()
	}

	calculatePrice() {
		let filtered = possibleTickets
		let filters: (keyof PaperTicket)[] = ['time', 'reduced', 'zone']
		for (let filter of filters) {
			filtered = filtered.filter((t) => t[filter] == this[filter])
			if (filtered.length <= 1) break
		}
		if (filtered.length != 1) console.warn(`undetermined filter match: ${filtered}`)

		let ticket = filtered[0]
		if (!ticket) console.error('failed to find filter match')
		else {
			this.actualTicket = ticket
		}
	}

	emitClick() {
		this.addToCart.emit(this.actualTicket)
	}
}
