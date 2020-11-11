import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoTotalComponent } from './pago-total.component';

describe('PagoTotalComponent', () => {
  let component: PagoTotalComponent;
  let fixture: ComponentFixture<PagoTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagoTotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
