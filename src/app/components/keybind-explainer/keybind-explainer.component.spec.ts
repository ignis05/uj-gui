import { ComponentFixture, TestBed } from '@angular/core/testing'

import { KeybindExplainerComponent } from './keybind-explainer.component'

describe('KeybindExplainerComponent', () => {
	let component: KeybindExplainerComponent
	let fixture: ComponentFixture<KeybindExplainerComponent>

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [KeybindExplainerComponent],
		}).compileComponents()

		fixture = TestBed.createComponent(KeybindExplainerComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
