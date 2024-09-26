import {Component} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {FooterComponent} from "../../../components/footer/footer.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatCardModule, FormsModule, MatFormFieldModule, MatInputModule,
    MatButtonModule, MatIconModule, RouterModule, FooterComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}