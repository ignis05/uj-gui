import { Component } from '@angular/core'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	activeRoute: string = '/main'

	constructor(private router: Router) {
		// update active route prop
		this.router.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				this.activeRoute = event.url
			}
		})
	}
}
