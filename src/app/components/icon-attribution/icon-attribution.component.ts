import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon-attribution',
  imports: [CommonModule],
  templateUrl: './icon-attribution.component.html',
  styleUrl: './icon-attribution.component.css'
})
export class IconAttributionComponent {
  @Input() sources: { name: string; url: string }[] = [];
}
