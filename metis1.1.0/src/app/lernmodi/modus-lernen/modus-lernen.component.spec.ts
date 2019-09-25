import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModusLernenComponent } from './modus-lernen.component';

describe('ModusLernenComponent', () => {
  let component: ModusLernenComponent;
  let fixture: ComponentFixture<ModusLernenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModusLernenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModusLernenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
