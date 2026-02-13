import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

import { LinkedinBadgeComponent } from "../../components/linkedin-badge/linkedin-badge.component";
import { IconAttributionComponent } from '../../components/icon-attribution/icon-attribution.component';
import { IconService } from '../../services/icon.service';

import homeData from "../../data/home.json";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LinkedinBadgeComponent, IconAttributionComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  iconService = inject(IconService);
  title = inject(Title);

  skills = this.iconService.mapIcons(homeData.skills, 'skills');
  languages = this.iconService.mapIcons(homeData.languages, 'languages');

  getSources() {
    return this.iconService.getSourcesFromIcons(this.skills, this.languages, this.iconService.Sources);
  }

  constructor() {
    this.title.setTitle('Noah MacDonald!');
  }
}
