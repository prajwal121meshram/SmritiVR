import React from 'react';
import { HeritageExplorer } from '../components/HeritageExplorer/HeritageExplorer';
import { DigitalArchive } from '../components/DigitalArchive/DigitalArchive';

export const ArchivePage: React.FC = () => {
  return (
    <div className="pt-20 pb-16 animate-fadeIn space-y-0">
      {/* 1. National Digital Repository (Monuments & LiDAR Preservation Pipeline) */}
      <HeritageExplorer />

      {/* 2. Virtual Museum Digital Archive (Artifacts, Blueprints & Records) */}
      <DigitalArchive />
    </div>
  );
};
