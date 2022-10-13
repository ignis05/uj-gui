import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { TranslateService } from '@ngx-translate/core'
import { NavigateBack } from 'src/app/interfaces/navigate-back'

@Component({
	selector: 'app-ticket-screen',
	templateUrl: './ticket-screen.component.html',
	styleUrls: ['./ticket-screen.component.css'],
})
export class TicketScreenComponent implements OnInit, NavigateBack {
	constructor(public translate: TranslateService, private router: Router) {
		this.goBack = this.goBack.bind(this)
	}

	goBack(): void {
		this.router.navigateByUrl('/')
	}

	ngOnInit(): void {}
}
