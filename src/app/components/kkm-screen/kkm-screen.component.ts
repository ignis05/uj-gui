import { Component, OnInit, Output } from '@angular/core'
import { Router } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { NavigateBack } from 'src/app/interfaces/navigate-back'

@Component({
	selector: 'app-kkm-screen',
	templateUrl: './kkm-screen.component.html',
	styleUrls: ['./kkm-screen.component.css'],
})
export class KkmScreenComponent implements OnInit, NavigateBack {
	activeSubComponent: string = 'KkmSelect'

	constructor(public translate: TranslateService, private router: Router) {
		this.goBack = this.goBack.bind(this)
	}

	goBack(): void {
		if (this.activeSubComponent === 'KkmSelect') this.router.navigateByUrl('/')
		else if (['activeTicketsList', 'ticketActivation'].includes(this.activeSubComponent)) this.activeSubComponent = 'KkmSelect'
	}

	KkmSelectHandler(navigateTo: string) {
		console.log(navigateTo)
		this.activeSubComponent = navigateTo
	}

	ngOnInit(): void {}
}
