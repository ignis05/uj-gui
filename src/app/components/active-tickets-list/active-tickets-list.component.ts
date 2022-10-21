import { Component, OnInit } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { KkmTicket, MockKkmTickets } from 'src/app/models/kkm-ticket.model'

@Component({
	selector: 'app-active-tickets-list',
	templateUrl: './active-tickets-list.component.html',
	styleUrls: ['./active-tickets-list.component.scss'],
})
export class ActiveTicketsListComponent implements OnInit {
	ticketsList: KkmTicket[] = MockKkmTickets

	constructor(public translate: TranslateService) {}

	ngOnInit(): void {}
}
