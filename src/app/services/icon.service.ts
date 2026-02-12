import { Injectable } from '@angular/core';
import iconsData from '../data/icons.json';
import { IconRegistry } from '../../types/icon-registry.type';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  private icons = iconsData as IconRegistry;

  get Sources() {
    return this.icons.sources;
  }

  mapIcons(keys: string[], type: 'skills' | 'languages') {
    return keys.map((key) => this.icons[type][key]);
  }


  getSourcesFromIcons(
    skills: { source: string }[],
    languages: { source: string }[],
    sources: Record<string, { name: string; url: string }>,
  ) {
    const usedSources = new Set([...skills, ...languages].map((i) => i.source));
    return Array.from(usedSources)
      .filter((key) => key !== 'custom')
      .map((key) => sources[key]);
  }
  constructor() {}
}
