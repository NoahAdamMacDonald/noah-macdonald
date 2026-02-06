import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
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
    const usedSources = new Set(
      [...this.skills, ...this.languages].map((i) => i.source),
    );

    return Array.from(usedSources).map((key) => this.sources[key]);
  }

  formatSources() : string {
    const sources = this.getSources();

    if (sources.length === 0) return '';
    if (sources.length === 1) return `Icons from ${sources[0].name}`;
    if (sources.length === 2)
      return `Icons from ${sources[0].name} and ${sources[1].name}`;

    const allButLast = sources
      .slice(0, -1)
      .map((s) => s.name)
      .join(', ');
    const last = sources[sources.length - 1].name;

    return `Icons from ${allButLast} and ${last}`;
  }
}
