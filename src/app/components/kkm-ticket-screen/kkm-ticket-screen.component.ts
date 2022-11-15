import { Component, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { NgbDate } from '@ng-bootstrap/ng-bootstrap'
import { TranslateService } from '@ngx-translate/core'
import { KkmAvalTicket, KkmAvalTickets } from 'src/app/models/kkmAvailableTicket.model'

@Component({
	selector: 'app-kkm-ticket-screen',
	templateUrl: './kkm-ticket-screen.component.html',
	styleUrls: ['./kkm-ticket-screen.component.scss'],
})
export class KkmTicketScreenComponent implements OnInit, OnDestroy {
	eventSubscription: any
	eventSubscription2: any
	@Input() goBackEvent: EventEmitter<string> = new EventEmitter<string>()
	childEEmitter = new EventEmitter<string>()
	purchaseStatus: 'purchase' | 'payment' = 'purchase'
	ticketOptions = {
		reduced: false,
		zone1: true,
		zone2: false,
		zone3: false,
		line: '',
		singleLine: false,
		get zone() {
			let z = []
			if (this.zone1) z.push('I')
			if (this.zone2) z.push('II')
			if (this.zone3) z.push('III')
			return z.join(' + ')
		},
		get isValid(): boolean {
			if (this.singleLine && this.line.length < 3) return false
			return true
		},
	}
	lineInput = new FormControl('')
	today: NgbDate
	selectedDate: NgbDate

	constructor(public translate: TranslateService) {
		let curr = new Date()
		this.today = new NgbDate(curr.getFullYear(), curr.getMonth() + 1, curr.getDate())
		this.selectedDate = this.today
	}

	purchase() {
		this.purchaseStatus = 'payment'
	}

	get ticketPrice(): number {
		let range: string = this.ticketOptions.singleLine ? 'singleLine' : this.ticketOptions.zone
		let t = KkmAvalTickets.find((el) => el.range == range && el.reduced == this.ticketOptions.reduced)
		return t?.price || 0
	}

	get endDate(): NgbDate {
		// transform to js date
		let { day, month, year } = this.selectedDate
		let d = new Date(year, month - 1, day)
		// update month
		d.setMonth(month)
		// back to bootstrap date
		return new NgbDate(d.getFullYear(), d.getMonth() + 1, d.getDate())
	}

	// go back functionality
	ngOnInit(): void {
		// payment subcomponent bounceback handle
		this.eventSubscription2 = this.childEEmitter.subscribe((e) => {
			if (e === 'toParent') this.purchaseStatus = 'purchase'
		})
		// event passed from parent
		this.eventSubscription = this.goBackEvent.subscribe((e) => {
			if (e === 'toChild') this.goBackFunc()
		})
	}
	ngOnDestroy(): void {
		this.eventSubscription?.unsubscribe?.()
	}
	goBackFunc() {
		if (this.purchaseStatus == 'purchase') this.goBackEvent.emit('toParent')
		else if (this.purchaseStatus == 'payment') this.childEEmitter.emit('toChild')
	}

	// type toggles
	typeToggle() {
		this.ticketOptions.singleLine = !this.ticketOptions.singleLine
	}
	reducedToggle() {
		this.ticketOptions.reduced = !this.ticketOptions.reduced
	}

	// zone toggles
	zoneToggle(toggleZone: number) {
		// const zones = ['I', 'II', 'III', 'I + II', 'II + III', 'I + II + III']
		// const invalid_zones = ['I + III']
		if (toggleZone == 1) {
			this.ticketOptions.zone1 = !this.ticketOptions.zone1
			if (this.ticketOptions.zone == 'I + III') this.ticketOptions.zone3 = false
		}
		if (toggleZone == 2) {
			this.ticketOptions.zone2 = !this.ticketOptions.zone2
			if (this.ticketOptions.zone == 'I + III') this.ticketOptions.zone3 = false
		}
		if (toggleZone == 3) {
			this.ticketOptions.zone3 = !this.ticketOptions.zone3
			if (this.ticketOptions.zone == 'I + III') this.ticketOptions.zone1 = false
		}
	}
	isZoneActive(toggleZone: number): boolean {
		return !!this.ticketOptions?.[`zone${toggleZone}` as keyof typeof this.ticketOptions] || false
	}

	// line input
	lineKeypadHandler(value: string) {
		if (value != 'OK') this.lineInput.setValue(value)
		else {
			value = this.lineInput.value!
			while (value.length < 3) value = '0' + value
			this.lineInput.setValue(value)
		}
		this.ticketOptions.line = this.lineInput.value!
	}

	// date select
	onDateSelect(event: NgbDate) {
		this.selectedDate = event
	}
	isDisabled = (date: NgbDate, current: any) => {
		return date.before(this.today)
	}
}
