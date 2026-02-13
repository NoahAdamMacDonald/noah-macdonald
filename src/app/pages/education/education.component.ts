import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

import { SchoolCardComponent } from '../../components/school-card/school-card.component';

import schoolsData from '../../data/schools.json';
import certificatesData from '../../data/certificates.json';
import { IconService } from '../../services/icon.service';
import { CertificateCardComponent } from "../../components/certificate-card/certificate-card.component";

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, SchoolCardComponent, CertificateCardComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  private iconService = inject(IconService);
  private title = inject(Title);

  schools = schoolsData.schools;
  certificates = certificatesData.certifications;

  get sources() {
    return this.iconService.Sources;
  }

  mapIcons(keys: string[], type: 'skills' | 'languages') {
    return this.iconService.mapIcons(keys, type);
  }

  constructor() {
    this.title.setTitle('Education');
  }
}
