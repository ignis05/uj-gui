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
	activeSubComponent: string = 'insertKKM'

	constructor(public translate: TranslateService, private router: Router) {
		this.goBack = this.goBack.bind(this)

		this.kkmMockupHandler = this.kkmMockupHandler.bind(this)
		document.addEventListener('keyup', this.kkmMockupHandler)
	}

	goBack(): void {
		if (['KkmSelect', 'kkmRemoved'].includes(this.activeSubComponent)) this.router.navigateByUrl('/')
		else if (['activeTicketsList', 'ticketActivation'].includes(this.activeSubComponent)) this.activeSubComponent = 'KkmSelect'
	}

	KkmSelectHandler(navigateTo: string) {
		console.log(navigateTo)
		this.activeSubComponent = navigateTo
	}

	kkmMockupHandler(e: KeyboardEvent) {
		if (e.code !== 'Space') return
		if (this.activeSubComponent === 'insertKKM') this.activeSubComponent = 'KkmSelect'
		else this.activeSubComponent = 'kkmRemoved'
	}

	ngOnInit(): void {}
}
