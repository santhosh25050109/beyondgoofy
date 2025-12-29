import { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const DownloadBrochureButton = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    setIsGenerating(true);
    try {
      const { downloadBrochure } = await import('@/lib/downloadBrochure');
      await downloadBrochure();
      toast.success('Brochure downloaded successfully!');
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast.error('Failed to generate brochure. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Button
      variant="outline"
      size="lg"
      onClick={handleDownload}
      disabled={isGenerating}
      className="w-full sm:w-auto border-border hover:border-primary hover:bg-primary/5 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg"
    >
      {isGenerating ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
          Download Brochure
        </>
      )}
    </Button>
  );
};

export default DownloadBrochureButton;
