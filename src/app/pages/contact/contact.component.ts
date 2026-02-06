import { Component } from '@angular/core';
import { LinkedinBadgeComponent } from "../../components/linkedin-badge/linkedin-badge.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LinkedinBadgeComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
