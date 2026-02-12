import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolCardComponent } from '../../components/school-card/school-card.component';

import schoolsData from '../../data/schools.json';
import { IconService } from '../../services/icon.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, SchoolCardComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  private iconService = inject(IconService);
  schools = schoolsData.schools;

  get sources() {
    return this.iconService.Sources;
  }

  mapIcons(keys: string[], type: 'skills' | 'languages') {
    return this.iconService.mapIcons(keys, type);
  }
}
