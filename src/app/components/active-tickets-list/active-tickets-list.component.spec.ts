import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ActiveTicketsListComponent } from './active-tickets-list.component'

describe('ActiveTicketsListComponent', () => {
	let component: ActiveTicketsListComponent
	let fixture: ComponentFixture<ActiveTicketsListComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ActiveTicketsListComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(ActiveTicketsListComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
