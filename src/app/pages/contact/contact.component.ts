import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { LinkedinBadgeComponent } from "../../components/linkedin-badge/linkedin-badge.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LinkedinBadgeComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  title = inject(Title);

  constructor() {
    this.title.setTitle('Contact');
  }
}
