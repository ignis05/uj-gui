import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TicketActivationComponent } from './ticket-activation.component'

describe('TicketActivationComponent', () => {
	let component: TicketActivationComponent
	let fixture: ComponentFixture<TicketActivationComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TicketActivationComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(TicketActivationComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
