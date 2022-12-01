import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturaMensualComponent } from './captura-mensual.component';

describe('CapturaMensualComponent', () => {
  let component: CapturaMensualComponent;
  let fixture: ComponentFixture<CapturaMensualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapturaMensualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapturaMensualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
