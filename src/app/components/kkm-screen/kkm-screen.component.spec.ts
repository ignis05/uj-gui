import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KkmScreenComponent } from './kkm-screen.component';

describe('KkmScreenComponent', () => {
  let component: KkmScreenComponent;
  let fixture: ComponentFixture<KkmScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KkmScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KkmScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
