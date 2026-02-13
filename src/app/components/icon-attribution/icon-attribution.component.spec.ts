import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconAttributionComponent } from './icon-attribution.component';

describe('IconAttributionComponent', () => {
  let component: IconAttributionComponent;
  let fixture: ComponentFixture<IconAttributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconAttributionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconAttributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
