import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  X, 
  FileText, 
  UserCheck, 
  CreditCard, 
  TrendingUp, 
  TrendingDown,
  LayoutDashboard,
  HelpCircle,
  Clock,
  Database,
  Search,
  Settings
} from 'lucide-react';

export const SlideTitle = () => (
  <div className="grid grid-cols-12 h-full overflow-hidden rounded-[3rem] bg-white shadow-2xl border border-slate-100">
    <div className="col-span-12 lg:col-span-7 p-16 flex flex-col justify-center items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-900 text-white rounded-full text-xs font-bold tracking-[0.2em] uppercase mx-auto">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          Proposta Estratégica 2026
        </div>
        <h1 className="text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter">
          PROJETO <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
            BENEFÍCIOS
          </span>
        </h1>
      </motion.div>
    </div>

    <div className="col-span-12 lg:col-span-5 bg-slate-900 relative">
      <img 
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
        alt="Office" 
        className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-emerald-500/20" />
      <div className="absolute inset-0 p-16 flex flex-col justify-end">
        <div className="space-y-6">
          <div className="h-1 w-24 bg-emerald-400" />
          <p className="text-4xl font-light text-white leading-tight">
            Elevando o padrão da <span className="font-bold">experiência do colaborador</span> através da digitalização.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export const SlideAgenda = () => {
  const items = [
    { id: '01', label: 'Visão Geral', icon: <Zap size={20} /> },
    { id: '02', label: 'Ecossistema Digital', icon: <Shield size={20} /> },
    { id: '03', label: 'Roadmap de Entrega', icon: <ArrowRight size={20} /> },
    { id: '04', label: 'Inteligência de Dados', icon: <BarChart3 size={20} /> },
    { id: '05', label: 'Compliance & Fiscal', icon: <CheckCircle2 size={20} /> },
    { id: '06', label: 'Ganhos de Escala', icon: <TrendingUp size={20} /> },
  ];

  return (
    <div className="h-full flex flex-col justify-center max-w-6xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-6xl font-black text-slate-900 tracking-tighter">Agenda Executiva</h2>
        <p className="text-xl text-slate-400 font-medium">Tópicos fundamentais para a transformação do RH.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-200 transition-all cursor-pointer relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-16 -mt-16 group-hover:bg-blue-50 transition-colors" />
            <div className="relative z-10 space-y-8">
              <div className="flex justify-between items-center">
                <span className="text-5xl font-black text-slate-100 group-hover:text-blue-200 transition-colors">
                  {item.id}
                </span>
                <div className="p-4 bg-slate-50 rounded-2xl text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  {item.icon}
                </div>
              </div>
              <p className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors leading-tight">
                {item.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const SlideObjetivo = () => (
  <div className="grid grid-cols-12 gap-12 h-full items-center">
    <div className="col-span-12 lg:col-span-6 space-y-12 flex flex-col items-center text-center">
      <div className="space-y-4">
        <h2 className="text-6xl font-black text-slate-900 tracking-tighter">Alinhamento Estratégico</h2>
        <p className="text-xl text-slate-500 leading-relaxed max-w-lg">
          Nossa missão é consolidar a <span className="text-blue-600 font-bold">Celebre</span> e a <span className="text-emerald-600 font-bold">Vianova</span> em um ecossistema único de gestão de benefícios.
        </p>
      </div>
      
      <div className="space-y-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-blue-600" />
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Visão 360º da Operação</h3>
          <p className="text-slate-500 leading-relaxed">
            Centralização de processos críticos em uma plataforma intuitiva, eliminando silos de informação e redundâncias operacionais.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
              <Database size={24} />
            </div>
            <p className="text-lg font-bold text-slate-800 mb-1">Single Source</p>
            <p className="text-sm text-slate-400">Um só pedido, um só boleto, controle total.</p>
          </div>
          <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
              <Zap size={24} />
            </div>
            <p className="text-lg font-bold text-slate-800 mb-1">Agilidade</p>
            <p className="text-sm text-slate-400">Redução drástica no tempo de processamento.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-span-12 lg:col-span-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="h-[600px] bg-slate-900 rounded-[4rem] overflow-hidden relative shadow-2xl group"
      >
        <img 
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200" 
          alt="Collaboration" 
          className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 p-12 space-y-4">
          <div className="flex gap-2">
            <div className="w-12 h-1.5 bg-blue-500 rounded-full" />
            <div className="w-4 h-1.5 bg-emerald-500 rounded-full" />
          </div>
          <p className="text-2xl font-medium text-white max-w-md">
            "A tecnologia a serviço das pessoas, simplificando o complexo."
          </p>
        </div>
      </motion.div>
    </div>
  </div>
);

export const SlideAutomacao = () => (
  <div className="h-full flex flex-col">
    <div className="flex flex-col items-center text-center mb-16">
      <div className="space-y-4">
        <h2 className="text-6xl font-black text-slate-900 tracking-tighter">Eficiência Operacional</h2>
        <p className="text-xl text-slate-400 font-medium">Mitigação de riscos e automação de processos críticos.</p>
      </div>
      <div className="flex gap-4 mt-8">
        <div className="px-6 py-3 bg-red-50 text-red-600 rounded-2xl font-bold text-sm border border-red-100">Riscos Manuais</div>
        <div className="px-6 py-3 bg-emerald-50 text-emerald-600 rounded-2xl font-bold text-sm border border-emerald-100">Solução Digital</div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 flex-1">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-8"
      >
        <div className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-sm space-y-8">
          <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
            <div className="w-10 h-10 bg-red-100 text-red-600 rounded-xl flex items-center justify-center">
              <X size={20} />
            </div>
            O Custo da Gestão Manual
          </h3>
          <div className="space-y-6">
            {[
              { title: "Inconsistência de Dados", desc: "Erros em valores e prazos de recarga geram retrabalho e insatisfação." },
              { title: "Opacidade Processual", desc: "Falta de histórico e rastreabilidade dificulta auditorias e compliance." },
              { title: "Sobrecarga do RH", desc: "Dificuldade extrema em acompanhar o uso e efetividade dos benefícios." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2.5 flex-shrink-0" />
                <div>
                  <p className="font-bold text-slate-700">{item.title}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-8"
      >
        <div className="p-10 bg-slate-900 rounded-[3rem] shadow-2xl space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <h3 className="text-2xl font-bold text-white flex items-center gap-3 relative z-10">
            <div className="w-10 h-10 bg-emerald-500 text-white rounded-xl flex items-center justify-center">
              <Zap size={20} />
            </div>
            A Vantagem Competitiva Digital
          </h3>
          <div className="space-y-10 relative z-10">
            {[
              { title: "Onboarding Inteligente", desc: "Coleta e organização centralizada de dados em segundos." },
              { title: "Recargas Programadas", desc: "Sincronização nativa com o sistema de ponto" },
              { title: "Analytics em Tempo Real", desc: "Dashboards gerenciais para decisões baseadas em evidências." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-emerald-400 flex-shrink-0 border border-white/10">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="text-xl font-bold text-white mb-1">{item.title}</p>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

export const SlideProcesso = () => {
  const steps = [
    { title: "Diagnóstico", items: ["Mapeamento de Regras", "Análise de Gaps", "Definição de Fluxos"] },
    { title: "Setup Digital", items: ["Configuração de Plataforma", "Integração de Dados", "Homologação"] },
    { title: "Go-Live", items: ["Treinamento Executivo", "Comunicação Interna", "Lançamento"] },
    { title: "Monitoramento", items: ["Acompanhamento de KPIs", "Ajustes Finos", "Suporte Contínuo"] },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="text-center mb-16 space-y-4">
        <div className="space-y-4">
          <h2 className="text-6xl font-black text-slate-900 tracking-tighter">Roadmap Estratégico</h2>
          <p className="text-xl text-slate-400 font-medium">Cronograma de implementação e marcos críticos.</p>
        </div>
      </div>
      
      <div className="relative flex-1">
        <div className="absolute left-0 right-0 h-1 bg-slate-100 top-1/2 -translate-y-1/2" />
        <div className="grid grid-cols-4 gap-8 relative z-10">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="space-y-8"
            >
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-white rounded-3xl border-4 border-blue-600 shadow-2xl flex items-center justify-center text-blue-600 font-black text-3xl mb-6 group hover:bg-blue-600 hover:text-white transition-all duration-500">
                  {idx + 1}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 text-center">{step.title}</h3>
              </div>
              <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-4 min-h-[180px]">
                {step.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const SlideEventos = () => {
  const events = [
    { code: "703", label: "FALTA" },
    { code: "820", label: "ATESTADO" },
    { code: "900", label: "JANTA" },
    { code: "901", label: "FDS & FERIADO" },
    { code: "819", label: "AFASTAMENTO" },
    { code: "821", label: "ATESTADO ACOMP." },
    { code: "822", label: "BANCO" },
    { code: "823", label: "ABONO" },
    { code: "824", label: "MATERNIDADE" },
    { code: "825", label: "CASAMENTO" },
    { code: "826", label: "JUSTIFICADO" },
    { code: "827", label: "ELEIÇÃO" },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="text-center mb-16 space-y-6">
        <div className="space-y-4">
          <h2 className="text-6xl font-black text-slate-900 tracking-tighter">Padronização de Eventos</h2>
          <p className="text-xl text-slate-400 font-medium">Estrutura de dados unificada para compliance total.</p>
        </div>
        <div className="inline-block px-8 py-4 bg-emerald-500 text-white rounded-[2rem] font-black text-xl shadow-xl shadow-emerald-100">
          +15 Eventos Mapeados
        </div>
      </div>
      
      <div className="grid grid-cols-12 gap-12 flex-1">
        <div className="col-span-4 space-y-6">
          {[
            { icon: <FileText />, title: "Categorização Inteligente", desc: "Automação na classificação de dias não trabalhados." },
            { icon: <Settings />, title: "Processamento em Lote", desc: "Geração massiva de métricas com precisão cirúrgica." },
            { icon: <Search />, title: "Auditoria & Analytics", desc: "Rastreabilidade completa de cada evento gerado." },
          ].map((item, i) => (
            <div key={i} className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm flex gap-6 group hover:border-blue-200 transition-all">
              <div className="text-blue-600 p-4 bg-blue-50 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">{item.icon}</div>
              <div>
                <p className="text-xl font-bold text-slate-800 mb-1">{item.title}</p>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="col-span-8 grid grid-cols-4 gap-4">
          {events.map((event, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center group hover:bg-slate-900 transition-all duration-300"
            >
              <p className="text-[10px] font-black text-blue-600 mb-2 uppercase tracking-widest group-hover:text-emerald-400">{event.label}</p>
              <p className="text-3xl font-black text-slate-900 group-hover:text-white tracking-tighter">{event.code}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const SlideRelatorios = () => (
  <div className="h-full flex flex-col">
    <div className="text-center mb-16 space-y-6">
      <div className="space-y-4">
        <h2 className="text-6xl font-black text-slate-900 tracking-tighter">Business Intelligence</h2>
        <p className="text-xl text-slate-400 font-medium">Transformando dados brutos em insights estratégicos.</p>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-12 flex-1">
      <div className="bg-slate-900 rounded-[4rem] shadow-2xl p-12 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-blue-600 to-emerald-500" />
        <h3 className="text-2xl font-bold text-white mb-12">Central de Inteligência</h3>
        <div className="space-y-6 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
          <div className="h-12 bg-white/10 rounded-2xl w-full" />
          <div className="h-12 bg-white/10 rounded-2xl w-full" />
          <div className="grid grid-cols-2 gap-6">
            <div className="h-12 bg-white/10 rounded-2xl" />
            <div className="h-12 bg-white/10 rounded-2xl" />
          </div>
          <div className="h-48 bg-white/5 rounded-[2rem] border-2 border-dashed border-white/10" />
          <div className="h-16 bg-emerald-500 rounded-2xl w-full" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100 text-center max-w-sm"
          >
            <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <TrendingUp size={40} />
            </div>
            <p className="text-2xl font-black text-slate-900 mb-2 tracking-tight">Filtros Dinâmicos</p>
            <p className="text-slate-500 leading-relaxed">Consolidação instantânea por unidade, colaborador ou benefício.</p>
          </motion.div>
        </div>
      </div>
      
      <div className="flex flex-col justify-center space-y-12">
        <div className="space-y-6">
          <h3 className="text-4xl font-bold text-slate-800 tracking-tight">Governança de Dados</h3>
          <p className="text-xl text-slate-500 leading-relaxed">
            Nossa plataforma consolida informações de múltiplas fontes em um único formato padronizado, garantindo a integridade da informação.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-sm group hover:bg-blue-600 transition-all duration-500">
            <p className="text-4xl font-black text-blue-600 mb-2 group-hover:text-white transition-colors">Real-Time</p>
            <p className="text-slate-400 group-hover:text-blue-100 transition-colors">Decisões baseadas no agora.</p>
          </div>
          <div className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-sm group hover:bg-emerald-500 transition-all duration-500">
            <p className="text-4xl font-black text-emerald-500 mb-2 group-hover:text-white transition-colors">Export</p>
            <p className="text-slate-400 group-hover:text-emerald-50 transition-colors">PDF, Excel e CSV nativos.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const SlideColaborador = () => (
  <div className="grid grid-cols-12 gap-12 h-full items-center">
    <div className="col-span-12 lg:col-span-5 space-y-12 flex flex-col items-center text-center">
      <div className="space-y-4">
        <h2 className="text-6xl font-black text-slate-900 tracking-tighter">User Experience</h2>
        <p className="text-xl text-slate-500 leading-relaxed">
          Transparência e autonomia total para o colaborador através de uma interface de classe mundial.
        </p>
      </div>
      
      <div className="space-y-8">
        {[
          { title: "Transparência Total", desc: "Acesso imediato ao saldo, extrato e categorias permitidas." },
          { title: "Autoatendimento", desc: "Redução de 70% nos chamados de suporte ao RH." },
          { title: "Mobile First", desc: "Experiência otimizada para qualquer dispositivo." },
        ].map((item, i) => (
          <div key={i} className="flex gap-6">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-xl font-bold text-slate-800 mb-1">{item.title}</p>
              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    <div className="col-span-12 lg:col-span-7 relative">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-slate-900 rounded-[4rem] p-12 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="relative z-10 grid grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="p-8 bg-white/5 rounded-[2rem] border border-white/10 backdrop-blur-xl">
              <p className="text-sm font-bold text-blue-400 mb-4 uppercase tracking-widest">Saldo Disponível</p>
              <p className="text-4xl font-black text-white tracking-tighter">R$ 1.450,00</p>
            </div>
            <div className="p-8 bg-white/5 rounded-[2rem] border border-white/10 backdrop-blur-xl">
              <p className="text-sm font-bold text-emerald-400 mb-4 uppercase tracking-widest">Último Uso</p>
              <p className="text-xl font-bold text-white">Supermercado Raio</p>
              <p className="text-sm text-slate-400">Hoje, 14:20 • R$ 124,50</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center p-8 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-[3rem] text-white text-center">
            <UserCheck size={64} className="mb-6" />
            <p className="text-2xl font-black mb-2">Engajamento</p>
            <p className="text-blue-100 text-sm">Aumento de satisfação na percepção de valor do benefício.</p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

export const SlideFiscal = () => (
  <div className="h-full flex flex-col">
    <div className="text-center mb-16 space-y-4">
      <div className="space-y-4">
        <h2 className="text-6xl font-black text-slate-900 tracking-tighter">Compliance & Fiscal</h2>
        <p className="text-xl text-slate-400 font-medium">Segurança jurídica e otimização tributária.</p>
      </div>
    </div>

    <div className="grid grid-cols-3 gap-8 flex-1">
      {[
        { title: "Segurança Jurídica", desc: "Processos 100% alinhados com a legislação vigente e PAT.", icon: <Shield size={32} />, color: "blue" },
        { title: "Redução de Custos", desc: "Eliminação de taxas abusivas e otimização de encargos.", icon: <TrendingDown size={32} />, color: "emerald" },
        { title: "Gestão de Boletos", desc: "Unificação de faturas para simplificar o contas a pagar.", icon: <CreditCard size={32} />, color: "slate" },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="p-12 bg-white rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group"
        >
          <div className={`w-20 h-20 bg-slate-50 text-slate-600 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all`}>
            {item.icon}
          </div>
          <h3 className="text-3xl font-bold text-slate-800 mb-6 tracking-tight">{item.title}</h3>
          <p className="text-lg text-slate-400 leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

export const SlideCategorias = () => (
  <div className="grid grid-cols-12 gap-12 h-full items-center">
    <div className="col-span-12 lg:col-span-6 space-y-12 flex flex-col items-center text-center">
      <div className="space-y-4">
        <h2 className="text-6xl font-black text-slate-900 tracking-tighter">Ecossistema Flexível</h2>
        <p className="text-xl text-slate-500 leading-relaxed">
          Categorias inteligentes que se adaptam ao estilo de vida de cada colaborador.
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        {[
          { label: "Alimentação", icon: <Zap /> },
          { label: "Refeição", icon: <Zap /> },
          { label: "Saúde", icon: <Zap /> },
          { label: "Educação", icon: <Zap /> },
          { label: "Mobilidade", icon: <Zap /> },
          { label: "Cultura", icon: <Zap /> },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-blue-200 transition-all cursor-default">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
              {item.icon}
            </div>
            <span className="font-bold text-slate-700">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
    
    <div className="col-span-12 lg:col-span-6">
      <motion.div 
        initial={{ opacity: 0, rotateY: -20 }}
        animate={{ opacity: 1, rotateY: 0 }}
        className="relative perspective-1000"
      >
        <div className="w-full aspect-[1.6/1] bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-12 shadow-2xl relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="flex justify-between items-start mb-24">
            <div className="space-y-2">
              <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Cartão de Benefícios</p>
              <p className="text-4xl font-black tracking-tighter italic">RAIO CARD</p>
            </div>
            <div className="w-16 h-12 bg-white/10 rounded-xl border border-white/20 flex items-center justify-center">
              <div className="w-10 h-6 bg-emerald-500 rounded-sm" />
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-2xl font-mono tracking-[0.3em]">•••• •••• •••• 8842</p>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[10px] text-slate-400 uppercase mb-1">Titular</p>
                <p className="text-xl font-bold">COLABORADOR EXEMPLO</p>
              </div>
              <div className="flex gap-2">
                <div className="w-10 h-10 bg-blue-600 rounded-full opacity-80" />
                <div className="w-10 h-10 bg-emerald-500 rounded-full -ml-6 opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

export const SlideMudancas = () => {
  const comparisons = [
    { label: "Processamento de Dados", flash: "Manual / Fragmentado", vianova: "Automatizado / Centralizado" },
    { label: "Governança Fiscal", flash: "Individualizada", vianova: "Consolidada em Massa" },
    { label: "Interface Gerencial", flash: "Estática / Genérica", vianova: "Dinâmica / Personalizada" },
    { label: "Ecossistema", flash: "Múltiplos Logins", vianova: "Single Sign-On (SSO)" },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="space-y-4">
          <h2 className="text-6xl font-black text-slate-900 tracking-tighter">Matriz de Transição</h2>
          <p className="text-xl text-slate-400 font-medium">Comparativo estratégico entre o modelo atual e a nova solução.</p>
        </div>
        <div className="flex gap-4 mt-8">
          <div className="px-6 py-3 bg-slate-100 text-slate-400 rounded-2xl font-bold text-sm">Modelo Legado</div>
          <div className="px-6 py-3 bg-blue-600 text-white rounded-2xl font-bold text-sm shadow-lg shadow-blue-100">Nova Parceria</div>
        </div>
      </div>
      
      <div className="grid grid-cols-12 gap-12 flex-1">
        <div className="col-span-4 bg-slate-900 rounded-[4rem] p-12 text-white flex flex-col justify-center text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-emerald-500" />
          <div className="space-y-6">
            <p className="text-5xl font-black leading-tight tracking-tighter">Salto de <br /><span className="text-emerald-400">Produtividade</span></p>
            <p className="text-slate-400 text-lg leading-relaxed">Uma evolução completa na forma de gerir o capital humano e seus benefícios.</p>
          </div>
        </div>
        
        <div className="col-span-8 space-y-4">
          {comparisons.map((comp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="grid grid-cols-12 gap-6 p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm items-center group hover:border-blue-200 transition-all"
            >
              <div className="col-span-5 font-bold text-slate-800 text-xl text-center">{comp.label}</div>
              <div className="col-span-3 text-slate-400 font-medium text-center">{comp.flash}</div>
              <div className="col-span-4 font-black text-blue-600 flex items-center justify-center gap-3 text-lg">
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <CheckCircle2 size={16} />
                </div>
                {comp.vianova}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const SlideGanhos = () => {
  const gains = [
    { title: "UX de Classe Mundial", desc: "Interface intuitiva que eleva a percepção de valor do colaborador.", icon: <UserCheck /> },
    { title: "BI & Analytics", desc: "Visão 360º da operação com dados em tempo real para o RH.", icon: <BarChart3 /> },
    { title: "Automação Nativa", desc: "Redução drástica de erros manuais e retrabalho administrativo.", icon: <Zap /> },
    { title: "Eficiência Tributária", desc: "Otimização de custos e compliance total com a legislação PAT.", icon: <Shield /> },
    { title: "Ecossistema Único", desc: "Centralização de múltiplos benefícios em uma só plataforma.", icon: <LayoutDashboard /> },
    { title: "Suporte Executivo", desc: "Atendimento dedicado para garantir o sucesso da parceria.", icon: <Users /> },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="space-y-4">
          <h2 className="text-6xl font-black text-slate-900 tracking-tighter">Valor Agregado</h2>
          <p className="text-xl text-slate-400 font-medium">Impactos estratégicos da nova parceria Celebre & Vianova.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-1">
        {gains.map((gain, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all group overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-16 -mt-16 group-hover:bg-blue-50 transition-colors" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                {gain.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">{gain.title}</h3>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-500 transition-colors">{gain.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const SlideDuvidas = () => (
  <div className="h-full flex items-center justify-center">
    <div className="grid grid-cols-12 gap-16 max-w-6xl w-full items-center">
      <div className="col-span-5">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          className="bg-slate-900 rounded-[5rem] aspect-square flex items-center justify-center text-white shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-emerald-500/20" />
          <HelpCircle size={240} className="opacity-10 absolute -right-20 -bottom-20 group-hover:scale-110 transition-transform duration-700" />
          <div className="text-center relative z-10">
            <h2 className="text-8xl font-black tracking-tighter mb-4">Dúvidas?</h2>
            <div className="h-1.5 w-24 bg-emerald-400 mx-auto rounded-full" />
          </div>
        </motion.div>
      </div>
      
      <div className="col-span-7 space-y-12 flex flex-col items-center text-center">
        <div className="space-y-6">
          <h3 className="text-5xl font-bold text-slate-800 tracking-tight leading-tight">Estamos à disposição para <span className="text-blue-600">esclarecimentos estratégicos</span>.</h3>
          <p className="text-2xl text-slate-400 font-light leading-relaxed max-w-2xl">
            A transição foi projetada para garantir continuidade operacional absoluta e elevação imediata do nível de serviço.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          <div className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-xl flex items-center gap-8 group hover:border-blue-200 transition-all">
            <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
              <Users size={40} />
            </div>
            <div>
              <p className="font-black text-slate-900 text-2xl tracking-tight">Suporte Executivo Dedicado</p>
              <p className="text-slate-400 text-lg">Time Vianova & Celebre em prontidão total.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const SlideObrigado = () => (
  <div className="h-full flex items-center justify-center text-center">
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <h2 className="text-[12rem] font-black text-slate-900 tracking-tighter leading-[0.8]">Obrigado.</h2>
    </motion.div>
  </div>
);
