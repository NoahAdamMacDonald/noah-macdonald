import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';

import projectsData from '../../data/projects.json';
import { IconService } from '../../services/icon.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  private iconService = inject(IconService);

  projects = projectsData.projects;

  get sources() {
    return this.iconService.Sources;
  }

  mapIcons(keys: string[], type: 'skills' | 'languages') {
    return this.iconService.mapIcons(keys, type);
  }
}
