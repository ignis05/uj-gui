import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketScreenComponent } from './ticket-screen.component';

describe('TicketScreenComponent', () => {
  let component: TicketScreenComponent;
  let fixture: ComponentFixture<TicketScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
