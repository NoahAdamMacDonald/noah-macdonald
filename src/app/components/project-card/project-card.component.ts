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
  @Input() skills!: string[];
  @Input() languages!: string[];
  @Input() github!: string;

  @Input() projectLink?: string; // Optional Link for project description resources

  isString(value: any): value is string {
    return typeof value === 'string';
  }
}
