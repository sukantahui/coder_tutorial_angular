import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonBasicComponent } from './python-basic.component';

describe('PythonBasicComponent', () => {
  let component: PythonBasicComponent;
  let fixture: ComponentFixture<PythonBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PythonBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PythonBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
