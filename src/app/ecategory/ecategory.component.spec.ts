import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcategoryComponent } from './ecategory.component';

describe('EcategoryComponent', () => {
  let component: EcategoryComponent;
  let fixture: ComponentFixture<EcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
