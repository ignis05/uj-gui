import { Component, OnInit } from '@angular/core'

import { TranslateService } from '@ngx-translate/core'

@Component({
	selector: 'app-ticket-screen',
	templateUrl: './ticket-screen.component.html',
	styleUrls: ['./ticket-screen.component.css'],
})
export class TicketScreenComponent implements OnInit {
	constructor(public translate: TranslateService) {}

	ngOnInit(): void {}
}
