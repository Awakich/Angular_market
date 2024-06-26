import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodDetailsComponent } from './good-details.component';

describe('GoodDetailsComponent', () => {
  let component: GoodDetailsComponent;
  let fixture: ComponentFixture<GoodDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoodDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoodDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
