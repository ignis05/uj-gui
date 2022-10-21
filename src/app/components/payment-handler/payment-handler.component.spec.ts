import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PaymentHandlerComponent } from './payment-handler.component'

describe('PaymentHandlerComponent', () => {
	let component: PaymentHandlerComponent
	let fixture: ComponentFixture<PaymentHandlerComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PaymentHandlerComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(PaymentHandlerComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
