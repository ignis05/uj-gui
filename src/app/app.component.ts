import { Component } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	activeRoute: string = '/main'

	constructor(private router: Router, public translate: TranslateService) {
		// update active route prop
		this.router.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				this.activeRoute = event.url
			}
		})

		translate.addLangs(['en', 'pl'])
		translate.use('en')
	}

	changeTranslation() {
		const swapOrder = {
			en: 'pl',
			pl: 'en',
		}
		this.translate.use(swapOrder[this.translate.currentLang as keyof typeof swapOrder])
	}
}
