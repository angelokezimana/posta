import {Component} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

}
