import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripLivresComponent } from './descrip-livres.component';

describe('DescripLivresComponent', () => {
  let component: DescripLivresComponent;
  let fixture: ComponentFixture<DescripLivresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescripLivresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescripLivresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
