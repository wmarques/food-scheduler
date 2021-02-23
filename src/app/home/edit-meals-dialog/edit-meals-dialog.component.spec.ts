import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditMealsDialog } from './edit-meals-dialog.component';

describe('EditMealsDialogComponent', () => {
  let component: EditMealsDialog;
  let fixture: ComponentFixture<EditMealsDialog>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EditMealsDialog]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMealsDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
