import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaberComponent } from './laber.component';

describe('LaberComponent', () => {
  let component: LaberComponent;
  let fixture: ComponentFixture<LaberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
