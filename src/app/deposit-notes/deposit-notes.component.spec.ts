import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositNotesComponent } from './deposit-notes.component';

describe('DepositNotesComponent', () => {
  let component: DepositNotesComponent;
  let fixture: ComponentFixture<DepositNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
