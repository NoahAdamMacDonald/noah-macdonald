import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconService } from '../../services/icon.service';
import { IconAttributionComponent } from "../icon-attribution/icon-attribution.component";

@Component({
  selector: 'app-school-card',
  standalone: true,
  imports: [CommonModule, IconAttributionComponent],
  templateUrl: './school-card.component.html',
  styleUrl: './school-card.component.css',
})
export class SchoolCardComponent {
  private iconService = inject(IconService);

  @Input() name!: string;
  @Input() location!: string;
  @Input() image!: string;

  @Input() program!: string | null;
  @Input() start!: string;
  @Input() end!: string;

  @Input() skills!: { name: string; icon: string; source: string }[];
  @Input() languages!: { name: string; icon: string; source: string }[];

  @Input() sources!: Record<string, { name: string; url: string }>;

  getSources(): { name: string; url: string }[] {
    return this.iconService.getSourcesFromIcons(this.skills, this.languages, this.sources);
  }
}
