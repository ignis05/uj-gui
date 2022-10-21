import { Component } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { TranslationSettings } from './modules/translation.module'
import { canNavigateBack } from 'src/app/interfaces/navigate-back'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	activeRoute: string = '/main'
	goBackFunc: Function | null = null
	kebindsVisible: boolean = false

	constructor(private router: Router, public translate: TranslateService) {
		// update active route prop
		this.router.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				this.activeRoute = event.url
			}
		})

		translate.addLangs(TranslationSettings.availableLanguages)
		translate.use(TranslationSettings.availableLanguages[0])

		document.addEventListener('keyup', (e) => {
			if (e.code === 'Backquote') {
				this.kebindsVisible = !this.kebindsVisible
			}
		})
	}

	get nextLanguage(): string {
		let i = this.translate.langs.indexOf(this.translate.currentLang)
		return this.translate.langs[(i + 1) % this.translate.langs.length]
	}

	changeTranslation() {
		this.translate.use(this.nextLanguage)
	}

	// binds element's goBack func to button in navbar
	onActivate(elementRef: any) {
		if (canNavigateBack(elementRef)) this.goBackFunc = elementRef.goBack
		else this.goBackFunc = null
	}

	goBack() {
		this.goBackFunc?.()
	}
}
