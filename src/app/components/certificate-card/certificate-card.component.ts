import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconService } from '../../services/icon.service';

@Component({
  selector: 'app-certificate-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificate-card.component.html',
  styleUrl: './certificate-card.component.css'
})
export class CertificateCardComponent {
  private iconService = inject(IconService)
  @Input() name!: string;
  @Input() description!: string;
  @Input() date!: string;
  @Input() certifier!: string;
  @Input() pdf!: string;

  @Input() skills!: {name: string; icon: string; source: string}[];
  @Input() languages!: {name: string; icon: string; source: string}[];

  @Input() sources!: Record<string, {name: string; url: string}>;

  getSources(): {name: string; url: string}[] {
    return this.iconService.getSourcesFromIcons(this.skills, this.languages, this.sources);
  }
}
