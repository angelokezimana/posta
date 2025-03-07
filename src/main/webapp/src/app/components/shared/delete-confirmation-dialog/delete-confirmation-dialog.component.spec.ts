import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConfirmationDialogComponent } from './delete-confirmation-dialog.component';

describe('DeleteComponent', () => {
  let component: DeleteConfirmationDialogComponent;
  let fixture: ComponentFixture<DeleteConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteConfirmationDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
