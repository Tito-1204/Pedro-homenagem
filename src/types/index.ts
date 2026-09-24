export interface PhotoItem {
  id: string;
  url: string;
  title: string;
  caption: string;
  category: 'sals' | 'manutencao' | 'equipa' | 'bastidores' | 'amizade';
  date?: string;
  location: string;
  tags: string[];
  aspect?: 'portrait' | 'landscape' | 'square';
}

export interface TimelineMilestone {
  id: string;
  year: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  details: string[];
  scripture?: {
    text: string;
    reference: string;
  };
}

export interface GuestMessage {
  id: string;
  author: string;
  roleOrCong: string;
  message: string;
  date: string;
  likes: number;
  badgeColor?: string;
  emojis: string[];
  isPinned?: boolean;
}

export interface TechnicalSkillItem {
  id: string;
  iconName: string;
  title: string;
  category: string;
  description: string;
  spiritualReflection: string;
  statNumber: string;
  statLabel: string;
  color: 'amber' | 'blue' | 'emerald' | 'cyan';
}

export interface ScriptureInspiration {
  id: string;
  text: string;
  reference: string;
  theme: string;
  note: string;
}
