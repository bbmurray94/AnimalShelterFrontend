import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogAddComponent } from './dog-add.component';

describe('DogAddComponent', () => {
  let component: DogAddComponent;
  let fixture: ComponentFixture<DogAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DogAddComponent]
    });
    fixture = TestBed.createComponent(DogAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
