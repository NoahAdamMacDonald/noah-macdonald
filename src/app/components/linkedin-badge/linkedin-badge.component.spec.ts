import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinBadgeComponent } from './linkedin-badge.component';

describe('LinkedinBadgeComponent', () => {
  let component: LinkedinBadgeComponent;
  let fixture: ComponentFixture<LinkedinBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkedinBadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedinBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
