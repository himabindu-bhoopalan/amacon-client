import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GcategoryComponent } from './gcategory.component';

describe('GcategoryComponent', () => {
  let component: GcategoryComponent;
  let fixture: ComponentFixture<GcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
