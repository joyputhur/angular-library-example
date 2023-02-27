import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutLibraryComponent } from './layout-library.component';

describe('LayoutLibraryComponent', () => {
  let component: LayoutLibraryComponent;
  let fixture: ComponentFixture<LayoutLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
