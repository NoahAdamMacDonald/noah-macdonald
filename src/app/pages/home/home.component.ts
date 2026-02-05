import { Component } from '@angular/core';
import { LinkedinBadgeComponent } from "../../components/linkedin-badge/linkedin-badge.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LinkedinBadgeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

}
