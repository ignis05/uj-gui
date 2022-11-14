import { ComponentFixture, TestBed } from '@angular/core/testing'

import { KkmTicketScreenComponent } from './kkm-ticket-screen.component'

describe('KkmTicketScreenComponent', () => {
	let component: KkmTicketScreenComponent
	let fixture: ComponentFixture<KkmTicketScreenComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [KkmTicketScreenComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(KkmTicketScreenComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
