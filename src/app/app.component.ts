import { Component } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { TranslationSettings } from './modules/translation.module'

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

		translate.addLangs(TranslationSettings.availableLanguages)
		translate.use(TranslationSettings.availableLanguages[0])
	}

	get nextLanguage(): string {
		let i = this.translate.langs.indexOf(this.translate.currentLang)
		return this.translate.langs[(i + 1) % this.translate.langs.length]
	}

	changeTranslation() {
		this.translate.use(this.nextLanguage)
	}
}
