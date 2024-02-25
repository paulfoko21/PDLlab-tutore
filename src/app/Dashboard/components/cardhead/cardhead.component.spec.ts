import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardheadComponent } from './cardhead.component';

describe('CardheadComponent', () => {
  let component: CardheadComponent;
  let fixture: ComponentFixture<CardheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardheadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
