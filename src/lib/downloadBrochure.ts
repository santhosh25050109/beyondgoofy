import { pdf } from '@react-pdf/renderer';
import { createElement } from 'react';
import AgencyBrochure from '@/components/pdf/AgencyBrochure';

export const downloadBrochure = async () => {
  const blob = await pdf(createElement(AgencyBrochure)).toBlob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Beyond-Goofy-Healthcare-Marketing.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
