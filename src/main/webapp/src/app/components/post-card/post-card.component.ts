import {Component, inject} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {TruncatePipe} from "../../pipe/truncate.pipe";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {DeletePostConfirmationDialogComponent} from "../delete-post-confirmation-dialog/delete-post-confirmation-dialog.component";

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, TruncatePipe],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent {
  private readonly dialog = inject(MatDialog);

  constructor(
    private router: Router
  ) {
  }

  goToPostDetail(id: number): void {
    this.router.navigate(['post', id]);
  }

  deletePost(): void {
    const dialogRef = this.dialog.open(DeletePostConfirmationDialogComponent);
    dialogRef.afterClosed().subscribe(confirmation => {
      if (confirmation) {
        console.log("Deleted post...");
      }
    });
  }
}