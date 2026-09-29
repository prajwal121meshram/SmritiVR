export type Language = 'en' | 'hi' | 'mr';

export type ViewMode = 'orbit' | 'explore' | 'tour' | 'vr';

export type LightingMode = 'day' | 'sunset' | 'night' | 'wireframe' | 'restoration';

export interface Hotspot {
  id: string;
  title: Record<Language, string>;
  category: Record<Language, string>;
  subtitle: Record<Language, string>;
  description: Record<Language, string>;
  details: Record<Language, string[]>;
  audioTranscript?: Record<Language, string>;
  position: [number, number, number]; // 3D coordinates
  cameraPosition: [number, number, number]; // Orbit camera target for this hotspot
  cameraLookAt: [number, number, number];
  historicalEvidence: Record<Language, string>;
  preservationStatus: Record<Language, string>;
  imageUrl: string;
  architecturalStyle?: string;
  materials?: string[];
  dimensions?: string;
}

export interface TeleportWaypoint {
  id: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
  position: [number, number, number];
  rotationY: number; // facing angle in radians
  iconName: string;
}

export interface TourStop {
  id: number;
  hotspotId?: string;
  title: Record<Language, string>;
  narration: Record<Language, string>;
  cameraPosition: [number, number, number];
  targetPosition: [number, number, number];
  historicalNote: Record<Language, string>;
  architecturalHighlight: Record<Language, string>;
  durationSec: number;
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: Record<Language, string>;
  period: Record<Language, string>;
  description: Record<Language, string>;
  historicalContext: Record<Language, string>;
  imageUrl: string;
  source: string;
  tags: string[];
}

export interface HeritageSite {
  id: string;
  name: Record<Language, string>;
  location: Record<Language, string>;
  state: Record<Language, string>;
  period: Record<Language, string>;
  yearBuilt: string;
  architect?: string;
  status: 'available' | 'coming_soon' | 'scanning';
  badgeText: Record<Language, string>;
  shortDescription: Record<Language, string>;
  fullDescription: Record<Language, string>;
  imageUrl: string;
  modelPreviewUrl?: string;
  unescoYear?: string;
  preservationScore: number;
  digitalAssetsCount: {
    scans3D: number;
    photos: number;
    audioGuides: number;
    historicalDocs: number;
  };
}

export interface ArchiveItem {
  id: string;
  title: Record<Language, string>;
  category: '3d_model' | 'photo' | 'document' | 'audio' | 'blueprint' | 'preservation_scan';
  date: string;
  source: string;
  resolution: string;
  fileSize: string;
  thumbnailUrl: string;
  description: Record<Language, string>;
  tags: string[];
  metadata: {
    provenance: string;
    rights: string;
    format: string;
    coordinates?: string;
  };
}

export interface PreservationProject {
  id: string;
  title: Record<Language, string>;
  category: Record<Language, string>;
  description: Record<Language, string>;
  progress: number;
  targetFund: number;
  raisedFund: number;
  leadInstitution: string;
  status: 'Active' | 'Phase 2' | 'Research' | 'Completed';
  keyObjectives: Record<Language, string[]>;
  imageUrl: string;
}
