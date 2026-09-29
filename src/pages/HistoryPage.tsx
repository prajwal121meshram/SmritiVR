import React from 'react';
import { HistoricalTimeline } from '../components/Timeline/HistoricalTimeline';
import { HeritageVideo } from '../components/HeritageVideo/HeritageVideo';
import { ThenVsNowSlider } from '../components/ThenVsNow/ThenVsNowSlider';

export const HistoryPage: React.FC = () => {
  return (
    <div className="pt-20 pb-16 space-y-0 animate-fadeIn">
      <HistoricalTimeline />
      <HeritageVideo />
      <ThenVsNowSlider />
    </div>
  );
};
