import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnupComponent } from './anup.component';

describe('AnupComponent', () => {
  let component: AnupComponent;
  let fixture: ComponentFixture<AnupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
