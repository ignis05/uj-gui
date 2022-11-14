import { Component, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { TranslateService } from '@ngx-translate/core'

@Component({
	selector: 'app-kkm-ticket-screen',
	templateUrl: './kkm-ticket-screen.component.html',
	styleUrls: ['./kkm-ticket-screen.component.scss'],
})
export class KkmTicketScreenComponent implements OnInit, OnDestroy {
	eventSubscription: any
	@Input() goBackEvent: EventEmitter<string> = new EventEmitter<string>()
	purchaseStatus: 'purchase' | 'payment' = 'purchase'
	ticketOptions = {
		reduced: false,
		zone1: true,
		zone2: false,
		zone3: false,
		line: '000',
		singleLine: false,
		get zone() {
			let z = []
			if (this.zone1) z.push('I')
			if (this.zone2) z.push('II')
			if (this.zone3) z.push('III')
			return z.join(' + ')
		},
	}
	lineInput = new FormControl('')

	constructor(public translate: TranslateService) {}

	// go back functionality
	ngOnInit(): void {
		this.eventSubscription = this.goBackEvent.subscribe((e) => {
			if (e === 'toChild') this.goBackFunc()
		})
	}
	ngOnDestroy(): void {
		this.eventSubscription?.unsubscribe?.()
	}
	goBackFunc() {
		if (this.purchaseStatus == 'purchase') this.goBackEvent.emit('toParent')
		else if (this.purchaseStatus == 'payment') this.purchaseStatus = 'purchase'
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
}
