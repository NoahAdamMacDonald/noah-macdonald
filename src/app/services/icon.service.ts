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

  formatSources(
    skills: { source: string }[],
    languages: { source: string }[],
    sources: Record<string, { name: string; url: string }>,
  ) {
    const list = this.getSourcesFromIcons(skills, languages, sources);

    if (list.length === 0) return '';
    if (list.length === 1) return `Icons from ${list[0].name}`;
    if (list.length === 2)
      return `Icons from ${list[0].name} and ${list[1].name}`;

    const allButLast = list
      .slice(0, -1)
      .map((s) => s.name)
      .join(', ');
    const last = list[list.length - 1].name;

    return `Icons from ${allButLast} and ${last}`;
  }

  constructor() {}
}
