import { Component, OnInit } from '@angular/core'

import { TranslateService } from '@ngx-translate/core'

@Component({
	selector: 'app-main-screen',
	templateUrl: './main-screen.component.html',
	styleUrls: ['./main-screen.component.scss'],
})
export class MainScreenComponent implements OnInit {
	constructor(public translate: TranslateService) {}

	ngOnInit(): void {}
}
