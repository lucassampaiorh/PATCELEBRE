import React, { useRef, useState } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { Download, Loader2, FileText, Printer } from 'lucide-react';
import { 
  ExecSlideTitle,
  ExecSlideAbout,
  ExecSlideHowToJoin,
  ExecSlideDiagnosis,
  ExecSlideROI,
  ExecSlideTaxEfficiency,
  ExecSlideCashflow,
  ExecSlideSchedule,
  ExecSlideNextSteps,
  ExecSlideObrigado
} from './ExecutiveSlides';

interface ExportModuleProps {
  variant?: 'header' | 'sidebar';
  isSidebarOpen?: boolean;
}

export const ExportModule = ({ variant = 'header', isSidebarOpen = true }: ExportModuleProps) => {
  const [isExporting, setIsExporting] = useState(false);
  const exportRef = useRef<HTMLDivElement>(null);

  const slides = [
    { id: 'slide-1', component: <ExecSlideTitle /> },
    { id: 'slide-2', component: <ExecSlideAbout /> },
    { id: 'slide-3', component: <ExecSlideHowToJoin /> },
    { id: 'slide-4', component: <ExecSlideDiagnosis /> },
    { id: 'slide-5', component: <ExecSlideROI /> },
    { id: 'slide-6', component: <ExecSlideTaxEfficiency /> },
    { id: 'slide-7', component: <ExecSlideCashflow /> },
    { id: 'slide-8', component: <ExecSlideSchedule /> },
    { id: 'slide-9', component: <ExecSlideNextSteps /> },
    { id: 'slide-10', component: <ExecSlideObrigado /> },
  ];

  const handleExport = async () => {
    if (!exportRef.current) return;
    setIsExporting(true);

    try {
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      const slideElements = exportRef.current.children;
      
      for (let i = 0; i < slideElements.length; i++) {
        const element = slideElements[i] as HTMLElement;
        
        // Small delay to ensure any layout/animations settle
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Capture each slide
        const canvas = await html2canvas(element, {
          scale: 2, // Higher quality
          useCORS: true,
          logging: false,
          backgroundColor: '#f8fafc', // slate-50
          windowWidth: 1122, // 297mm in pixels at 96dpi
          windowHeight: 794  // 210mm in pixels at 96dpi
        } as any);

        const imgData = canvas.toDataURL('image/jpeg', 0.95);
        
        if (i > 0) {
          pdf.addPage();
        }

        // A4 Landscape is 297 x 210 mm
        pdf.addImage(imgData, 'JPEG', 0, 0, 297, 210);
      }

      pdf.save('Apresentacao_Executiva_PAT.pdf');
    } catch (error) {
      console.error('Erro ao exportar PDF:', error);
    } finally {
      setIsExporting(false);
    }
  };

  const buttonClasses = variant === 'header'
    ? `flex items-center gap-3 px-6 py-3 rounded-xl font-bold transition-all shadow-lg ${
        isExporting 
        ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
        : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-indigo-200'
      }`
    : `w-full flex items-center gap-4 p-3 rounded-xl transition-all ${
        isExporting
        ? 'bg-slate-50 text-slate-400 cursor-not-allowed'
        : 'text-slate-500 hover:bg-indigo-50 hover:text-indigo-600'
      }`;

  return (
    <>
      <button
        onClick={handleExport}
        disabled={isExporting}
        className={buttonClasses}
      >
        {isExporting ? (
          <Loader2 size={20} className="animate-spin" />
        ) : (
          <Printer size={20} className={variant === 'sidebar' ? 'text-indigo-600' : ''} />
        )}
        {variant === 'header' ? (
          <span>{isExporting ? 'Preparando PDF...' : 'Gerar PDF para Impressão (A4)'}</span>
        ) : (
          isSidebarOpen && <span className="font-bold text-sm">{isExporting ? 'Preparando...' : 'Exportar PDF'}</span>
        )}
      </button>

      {/* Hidden container for PDF generation */}
      <div className="fixed top-0 left-0 -z-50 opacity-0 pointer-events-none overflow-hidden h-0">
        <div ref={exportRef} style={{ width: '297mm' }}>
          {slides.map((slide) => (
            <div 
              key={slide.id} 
              style={{ 
                width: '297mm', 
                height: '210mm', 
                padding: '20mm',
                backgroundColor: '#f8fafc',
                position: 'relative',
                overflow: 'hidden'
              }}
              className="geometric-bg"
            >
              {slide.component}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
