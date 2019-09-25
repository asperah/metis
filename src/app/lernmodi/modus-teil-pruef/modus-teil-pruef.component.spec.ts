import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModusTeilPruefComponent } from './modus-teil-pruef.component';

describe('ModusTeilPruefComponent', () => {
  let component: ModusTeilPruefComponent;
  let fixture: ComponentFixture<ModusTeilPruefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModusTeilPruefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModusTeilPruefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
