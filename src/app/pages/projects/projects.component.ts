import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';

import projectsData from '../../../projects.json';
import iconsData from '../../../icons.json';
import { IconRegistry } from '../../../types/icon-registry.type';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects = projectsData.projects;
  icons = iconsData as IconRegistry;

  mapIcons(keys: string[], type: 'skills' | 'languages') {
    return keys.map((key) => this.icons[type][key]);
  }
}
