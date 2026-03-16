import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Presentation, 
  Wand2, 
  Menu,
  X,
  Target,
  Users,
  TrendingUp,
  Briefcase,
  DollarSign,
  BarChart,
  Calendar
} from 'lucide-react';
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
} from './components/ExecutiveSlides';
import ImageGenerator from './components/ImageGenerator';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showGenerator, setShowGenerator] = useState(false);

  const slides = [
    { id: 'exec-title', component: <ExecSlideTitle />, icon: <Briefcase size={20} />, label: 'Visão Estratégica' },
    { id: 'exec-about', component: <ExecSlideAbout />, icon: <Presentation size={20} />, label: 'Sobre o PAT' },
    { id: 'exec-how', component: <ExecSlideHowToJoin />, icon: <Wand2 size={20} />, label: 'Como Aderir' },
    { id: 'exec-diag', component: <ExecSlideDiagnosis />, icon: <Users size={20} />, label: 'Diagnóstico' },
    { id: 'exec-roi', component: <ExecSlideROI />, icon: <TrendingUp size={20} />, label: 'Retorno & Ganhos' },
    { id: 'exec-tax', component: <ExecSlideTaxEfficiency />, icon: <DollarSign size={20} />, label: 'Benefícios PAT' },
    { id: 'exec-cashflow', component: <ExecSlideCashflow />, icon: <BarChart size={20} />, label: 'Fluxo de Caixa' },
    { id: 'exec-schedule', component: <ExecSlideSchedule />, icon: <Calendar size={20} />, label: 'Cronograma' },
    { id: 'exec-next', component: <ExecSlideNextSteps />, icon: <Target size={20} />, label: 'Decisão' },
    { id: 'exec-thanks', component: <ExecSlideObrigado />, icon: <Briefcase size={20} />, label: 'Final' },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden geometric-bg">
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        className="bg-white border-r border-slate-200 flex flex-col z-50 relative shadow-2xl"
      >
        <div className="p-6 flex items-center justify-between">
          {isSidebarOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-3"
            >
              <img 
                src="https://i.imgur.com/DiPALsR.png" 
                alt="Celebre Logo" 
                className="h-10 w-auto"
                referrerPolicy="no-referrer"
              />
              <span className="font-black text-slate-800 tracking-tight">CELEBRE OBRAS</span>
            </motion.div>
          )}
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(idx)}
              className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all ${
                currentSlide === idx 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' 
                : 'text-slate-500 hover:bg-slate-100'
              }`}
            >
              <div className="flex-shrink-0">{slide.icon}</div>
              {isSidebarOpen && (
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="font-bold text-sm"
                >
                  {slide.label}
                </motion.span>
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100">
          <button
            onClick={() => setShowGenerator(!showGenerator)}
            className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all ${
              showGenerator 
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-100' 
              : 'text-slate-500 hover:bg-emerald-50 hover:text-emerald-600'
            }`}
          >
            <Wand2 size={20} />
            {isSidebarOpen && <span className="font-bold text-sm">Gerador IA</span>}
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 relative flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-white/50 backdrop-blur-sm border-b border-slate-200 px-8 flex items-center justify-between z-40">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-sm">
              <Presentation size={20} className="text-indigo-600" />
            </div>
            <h2 className="font-bold text-slate-800">Projeto Benefícios</h2>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex bg-white rounded-xl border border-slate-200 p-1 shadow-sm">
              <button onClick={prevSlide} className="p-2 hover:bg-slate-50 rounded-lg text-slate-600 transition-colors">
                <ChevronLeft size={20} />
              </button>
              <div className="px-4 flex items-center text-sm font-bold text-slate-400">
                <span className="text-indigo-600">{currentSlide + 1}</span>
                <span className="mx-1">/</span>
                <span>{slides.length}</span>
              </div>
              <button onClick={nextSlide} className="p-2 hover:bg-slate-50 rounded-lg text-slate-600 transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </header>

        {/* Stage */}
        <div className="flex-1 p-12 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="h-full"
            >
              {slides[currentSlide].component}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* AI Generator Overlay */}
        <AnimatePresence>
          {showGenerator && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute top-20 right-0 bottom-0 w-96 z-50 p-6"
            >
              <ImageGenerator />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
