import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectiveComponent } from './redirective.component';

describe('RedirectiveComponent', () => {
  let component: RedirectiveComponent;
  let fixture: ComponentFixture<RedirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
