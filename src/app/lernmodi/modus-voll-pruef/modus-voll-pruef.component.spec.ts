import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModusVollPruefComponent } from './modus-voll-pruef.component';

describe('ModusVollPruefComponent', () => {
  let component: ModusVollPruefComponent;
  let fixture: ComponentFixture<ModusVollPruefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModusVollPruefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModusVollPruefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
