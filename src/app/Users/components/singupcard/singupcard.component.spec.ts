import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingupcardComponent } from './singupcard.component';

describe('SingupcardComponent', () => {
  let component: SingupcardComponent;
  let fixture: ComponentFixture<SingupcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingupcardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingupcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
