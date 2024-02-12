import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingTestButtonComponent } from './routing-test-button.component';

describe('RoutingTestButtonComponent', () => {
  let component: RoutingTestButtonComponent;
  let fixture: ComponentFixture<RoutingTestButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingTestButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoutingTestButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
