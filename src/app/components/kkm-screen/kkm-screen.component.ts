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
	constructor(public translate: TranslateService, private router: Router) {}

	goBack(): void {
		this.router.navigateByUrl('/')
	}

	ngOnInit(): void {}
}
