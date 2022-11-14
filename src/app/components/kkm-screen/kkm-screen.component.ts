import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Router } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { NavigateBack } from 'src/app/interfaces/navigate-back'

type KkmScreenActiveComponent = 'insertKKM' | 'kkmRemoved' | 'KkmSelect' | 'activeTicketsList' | 'ticketActivation' | 'purchaseTicket'

@Component({
	selector: 'app-kkm-screen',
	templateUrl: './kkm-screen.component.html',
	styleUrls: ['./kkm-screen.component.scss'],
})
export class KkmScreenComponent implements OnInit, NavigateBack {
	activeSubComponent: KkmScreenActiveComponent = 'insertKKM'
	isOnlineTicketReady: boolean = true
	childEEmitter = new EventEmitter<string>()

	constructor(public translate: TranslateService, private router: Router) {
		this.goBack = this.goBack.bind(this)

		this.kkmMockupHandler = this.kkmMockupHandler.bind(this)
		document.addEventListener('keyup', this.kkmMockupHandler)

		this.childEEmitter.subscribe((e) => {
			if (e === 'toParent') this.activeSubComponent = 'KkmSelect'
		})
	}

	goBack(): void {
		if (['KkmSelect', 'kkmRemoved', 'insertKKM'].includes(this.activeSubComponent)) this.router.navigateByUrl('/')
		else if (['activeTicketsList', 'ticketActivation'].includes(this.activeSubComponent)) this.activeSubComponent = 'KkmSelect'
		else if (['purchaseTicket'].includes(this.activeSubComponent)) {
			this.childEEmitter.emit('toChild')
		}
	}

	KkmSelectHandler(navigateTo: KkmScreenActiveComponent) {
		console.log(navigateTo)
		this.activeSubComponent = navigateTo
	}

	kkmMockupHandler(e: KeyboardEvent) {
		if (e.code === 'Space') {
			if (this.activeSubComponent === 'insertKKM') this.activeSubComponent = 'KkmSelect'
			else this.activeSubComponent = 'kkmRemoved'
		} else if (e.code === 'KeyO') {
			this.isOnlineTicketReady = !this.isOnlineTicketReady
		}
	}

	ngOnInit(): void {}
}
