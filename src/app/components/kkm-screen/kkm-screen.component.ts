import { Component, OnInit } from '@angular/core'

import { TranslateService } from '@ngx-translate/core'

@Component({
	selector: 'app-kkm-screen',
	templateUrl: './kkm-screen.component.html',
	styleUrls: ['./kkm-screen.component.css'],
})
export class KkmScreenComponent implements OnInit {
	constructor(public translate: TranslateService) {}

	ngOnInit(): void {}
}
