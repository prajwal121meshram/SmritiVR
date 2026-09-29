import React from 'react';
import { PreservationDashboard } from '../components/Preservation/PreservationDashboard';
import { SupportDonation } from '../components/Support/SupportDonation';

export const PreservationPage: React.FC = () => {
  return (
    <div className="pt-20 pb-16 space-y-0 animate-fadeIn">
      <PreservationDashboard />
      <SupportDonation />
    </div>
  );
};
