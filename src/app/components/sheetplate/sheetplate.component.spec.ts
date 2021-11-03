import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetplateComponent } from './sheetplate.component';

describe('SheetplateComponent', () => {
  let component: SheetplateComponent;
  let fixture: ComponentFixture<SheetplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SheetplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
