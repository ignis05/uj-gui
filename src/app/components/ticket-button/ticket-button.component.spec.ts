import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TicketButtonComponent } from './ticket-button.component'

describe('TicketButtonComponent', () => {
	let component: TicketButtonComponent
	let fixture: ComponentFixture<TicketButtonComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TicketButtonComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(TicketButtonComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
