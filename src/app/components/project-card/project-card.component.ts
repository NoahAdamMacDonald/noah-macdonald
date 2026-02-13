import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconService } from '../../services/icon.service';
import { IconAttributionComponent } from "../icon-attribution/icon-attribution.component";
@Component({
  selector: 'app-project-card',
  imports: [CommonModule, IconAttributionComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  private iconService = inject(IconService);

  @Input() title!: string;
  @Input() description!: (string | { text: string; url: string })[];
  @Input() image!: string;

  @Input() skills!: { name: string; icon: string; source: string }[];
  @Input() languages!: { name: string; icon: string; source: string }[];

  @Input() github!: string;
  @Input() projectLink?: string;

  @Input() sources!: Record<string, { name: string; url: string }>;

  isString(value: any): value is string {
    return typeof value === 'string';
  }

  getSources(): { name: string; url: string }[] {
    return this.iconService.getSourcesFromIcons(this.skills, this.languages, this.sources);
  }
}
