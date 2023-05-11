import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallparkComponent } from './ballpark.component';

describe('BallparkComponent', () => {
  let component: BallparkComponent;
  let fixture: ComponentFixture<BallparkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallparkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BallparkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
