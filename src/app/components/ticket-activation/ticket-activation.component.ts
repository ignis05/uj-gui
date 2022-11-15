import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { KkmTicket } from 'src/app/models/kkm-ticket.model'

@Component({
	selector: 'app-ticket-activation',
	templateUrl: './ticket-activation.component.html',
	styleUrls: ['./ticket-activation.component.scss'],
})
export class TicketActivationComponent implements OnInit {
	@Input() isTicketAvailable: boolean = true
	@Input() goBackFunc: Function = () => {}
	showSuccessMsg = false

	ticket: KkmTicket = { activeSince: '10/11/2022', activeUntil: '10/12/2022', busLine: '129', isActive: true }

	constructor(private router: Router) {}

	ngOnInit(): void {}

	activateTicket() {
		this.showSuccessMsg = true
	}

	goMain() {
		this.router.navigateByUrl('/')
	}
}
