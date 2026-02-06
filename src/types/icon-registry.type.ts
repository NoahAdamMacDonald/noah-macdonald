export interface IconEntry {
  name: string;
  icon: string;
  source: string;
}

export interface IconRegistry {
  icons: Record<string, IconEntry>;
  skills: Record<string, IconEntry>;
  languages: Record<string, IconEntry>;
  sources: Record<string, { name: string; url: string }>;
}
