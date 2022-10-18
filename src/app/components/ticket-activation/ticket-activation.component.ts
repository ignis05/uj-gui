import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'app-ticket-activation',
	templateUrl: './ticket-activation.component.html',
	styleUrls: ['./ticket-activation.component.css'],
})
export class TicketActivationComponent implements OnInit {
	@Input() isTicketAvailable: boolean = true

	constructor() {}

	ngOnInit(): void {}
}
