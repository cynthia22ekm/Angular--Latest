import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownSingleselectComponent } from './dropdown-singleselect.component';

describe('DropdownSingleselectComponent', () => {
  let component: DropdownSingleselectComponent;
  let fixture: ComponentFixture<DropdownSingleselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownSingleselectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownSingleselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
