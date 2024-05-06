import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryFactsComponent } from './country-facts.component';

describe('CountryFactsComponent', () => {
  let component: CountryFactsComponent;
  let fixture: ComponentFixture<CountryFactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountryFactsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountryFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
