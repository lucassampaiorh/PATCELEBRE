import React from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  ShieldCheck, 
  DollarSign, 
  BarChart, 
  PieChart, 
  ArrowUpRight,
  CheckCircle,
  AlertCircle,
  Briefcase,
  Target,
  Users,
  Calendar
} from 'lucide-react';

export const ExecSlideTitle = () => (
  <div className="h-full flex items-center justify-center bg-slate-900 rounded-[3rem] overflow-hidden relative shadow-2xl">
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600 rounded-full -mr-96 -mt-96 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500 rounded-full -ml-72 -mb-72 blur-[100px]" />
    </div>
    
    <div className="relative z-10 text-center space-y-12 px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-3 px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-blue-400 text-sm font-black tracking-widest uppercase"
      >
        <Briefcase size={16} />
        Apresentação Executiva • PAT & CELEBRE
      </motion.div>
      
      <div className="space-y-4">
        <h1 className="text-8xl font-black text-white leading-[0.9] tracking-tighter">
          EFICIÊNCIA <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            FINANCEIRA
          </span>
        </h1>
        <p className="text-2xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
          Diagnóstico, Projeção de Economia e Cronograma de Implementação 2026.
        </p>
      </div>

      <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full" />
    </div>
  </div>
);

export const ExecSlideAbout = () => (
  <div className="h-full flex flex-col justify-center max-w-6xl mx-auto">
    <div className="grid grid-cols-12 gap-12 items-center">
      <div className="col-span-12 lg:col-span-5 space-y-8">
        <div className="space-y-4">
          <h2 className="text-6xl font-black text-slate-900 tracking-tighter">Sobre o PAT</h2>
          <p className="text-xl text-slate-500 leading-relaxed italic">
            "O carro chefe para financiamentos de outros programas de assistência ao colaborador Celebre Obras."
          </p>
        </div>
        <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
          <p className="text-slate-600 leading-relaxed">
            Criado pela Lei nº 6.321/1976, o Programa de Alimentação do Trabalhador visa preencher lacunas na saúde e alimentação, reduzindo doenças e afastamentos.
          </p>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-7">
        <div className="grid grid-cols-2 gap-6">
          <div className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
              <CheckCircle size={24} />
            </div>
            <h4 className="text-xl font-bold text-slate-800">Saúde</h4>
            <p className="text-sm text-slate-400">Melhoria na qualidade nutricional e bem-estar do time.</p>
          </div>
          <div className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
              <TrendingUp size={24} />
            </div>
            <h4 className="text-xl font-bold text-slate-800">Produtividade</h4>
            <p className="text-sm text-slate-400">Redução de absenteísmo e aumento do engajamento.</p>
          </div>
          <div className="col-span-2 p-10 bg-slate-900 rounded-[3rem] text-white">
            <p className="text-lg font-medium leading-relaxed opacity-80">
              O PAT não tem natureza salarial, não se incorpora à remuneração e é isento de encargos sociais (FGTS e INSS).
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const ExecSlideHowToJoin = () => (
  <div className="h-full flex flex-col">
    <div className="text-center mb-16 space-y-4">
      <h2 className="text-6xl font-black text-slate-900 tracking-tighter">Como Aderir?</h2>
      <p className="text-xl text-slate-400 font-medium">Processo simplificado de inscrição no Ministério da Economia.</p>
    </div>
    <div className="grid grid-cols-3 gap-8 flex-1">
      {[
        { step: "01", title: "Acesso", desc: "Acessar trabalho.gov.br e solicitar senha no grupo 'Beneficiária'." },
        { step: "02", title: "Dados", desc: "Preencher dados cadastrais da matriz (CNPJ/CEI)." },
        { step: "03", title: "Execução", desc: "Informar total de colaboradores e faixas salariais." },
        { step: "04", title: "Fornecedora", desc: "Informar número da Ticket: 080034370." },
        { step: "05", title: "Refeições", desc: "Informar número total de refeições servidas por dia." },
        { step: "06", title: "Finalização", desc: "Gerar comprovante de inscrição para fiscalização." },
      ].map((item, i) => (
        <div key={i} className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col gap-4">
          <span className="text-4xl font-black text-slate-100">{item.step}</span>
          <h4 className="text-xl font-bold text-slate-800">{item.title}</h4>
          <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export const ExecSlideDiagnosis = () => (
  <div className="h-full flex flex-col justify-center max-w-6xl mx-auto">
    <div className="text-center mb-16 space-y-4">
      <h2 className="text-6xl font-black text-slate-900 tracking-tighter">Diagnóstico Atual</h2>
      <p className="text-xl text-slate-400 font-medium">Mapeamento da força de trabalho e departamentos.</p>
    </div>

    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-12 lg:col-span-8">
        <div className="bg-white rounded-[3rem] border border-slate-100 shadow-xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="p-8 font-black uppercase tracking-widest text-sm">Departamento / Empresa</th>
                <th className="p-8 font-black uppercase tracking-widest text-sm text-right">Colaboradores</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="p-8 font-bold text-slate-700">CELEBRE OBRAS</td>
                <td className="p-8 font-black text-slate-900 text-right text-2xl">226</td>
              </tr>
              <tr>
                <td className="p-8 font-bold text-slate-700">JWR CONSTRUÇÕES</td>
                <td className="p-8 font-black text-slate-900 text-right text-2xl">81</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-8 font-bold text-slate-500 italic">TOTAL DE DEPARTAMENTOS</td>
                <td className="p-8 font-black text-slate-400 text-right text-2xl">22</td>
              </tr>
              <tr className="bg-red-500 text-white">
                <td className="p-8 font-black text-xl">Total Geral</td>
                <td className="p-8 font-black text-right text-4xl">307</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="col-span-12 lg:col-span-4 space-y-8">
        <div className="p-10 bg-blue-600 rounded-[3rem] shadow-2xl text-white">
          <Users size={48} className="mb-6 opacity-40" />
          <h3 className="text-2xl font-bold mb-4">Base de Cálculo</h3>
          <p className="text-blue-100 leading-relaxed">
            Dados consolidados para análise de impacto financeiro e estruturação do benefício PAT.
          </p>
        </div>
        <div className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-sm">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Status</p>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
            <p className="font-bold text-slate-800 italic">Pronto para Implementação</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const ExecSlideROI = () => (
  <div className="h-full flex flex-col justify-center max-w-6xl mx-auto">
    <div className="grid grid-cols-12 gap-12 items-center">
      <div className="col-span-12 lg:col-span-5 space-y-12">
        <div className="space-y-4">
          <h2 className="text-6xl font-black text-slate-900 tracking-tighter">Resumo de Ganhos</h2>
          <p className="text-xl text-slate-500 leading-relaxed">
            Impacto anual consolidado direto no fluxo de caixa da empresa.
          </p>
        </div>

        <div className="space-y-6">
          <div className="p-8 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 shadow-sm">
            <p className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-2">Impacto Anual Consolidado</p>
            <p className="text-6xl font-black text-emerald-700 tracking-tighter">R$ 142.289,76</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <p className="text-xs font-bold text-slate-400 uppercase mb-2">Eficiência Mensal</p>
              <p className="text-2xl font-black text-slate-900 italic">R$ 9.357,48</p>
            </div>
            <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <p className="text-xs font-bold text-slate-400 uppercase mb-2">Compliance</p>
              <p className="text-2xl font-black text-slate-900 italic">100%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-7">
        <div className="bg-slate-900 rounded-[4rem] p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8">
            <TrendingUp size={48} className="text-emerald-500 opacity-20" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-12">Composição Estratégica</h3>
          <div className="space-y-8">
            {[
              { label: "Isenção de Encargos (INSS/FGTS)", value: "R$ 97.920,00", percent: 75 },
              { label: "Dedução IRPJ (Lucro Real)", value: "R$ 30.000,00", percent: 25 },
            ].map((item, i) => (
              <div key={i} className="space-y-3">
                <div className="flex justify-between text-sm font-bold">
                  <span className="text-slate-400 uppercase tracking-wider">{item.label}</span>
                  <span className="text-emerald-400">{item.value}</span>
                </div>
                <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${item.percent}%` }}
                    transition={{ delay: 0.5 + i * 0.2, duration: 1 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-emerald-500"
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-12 italic">* Valores baseados no diagnóstico de 307 colaboradores.</p>
        </div>
      </div>
    </div>
  </div>
);

export const ExecSlideTaxEfficiency = () => (
  <div className="h-full flex flex-col">
    <div className="text-center mb-16 space-y-4">
      <h2 className="text-6xl font-black text-slate-900 tracking-tighter">Benefícios PAT</h2>
      <p className="text-xl text-slate-400 font-medium">Segurança jurídica e isenções tributárias fundamentais.</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-1">
      <div className="p-12 bg-white rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-between group hover:border-blue-200 transition-all">
        <div className="space-y-8">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <DollarSign size={32} />
          </div>
          <h3 className="text-3xl font-bold text-slate-800 tracking-tight">Isenção de Encargos</h3>
          <div className="space-y-2 text-slate-400">
            <p className="flex justify-between"><span>20% do INSS</span> <CheckCircle size={14} className="text-emerald-500" /></p>
            <p className="flex justify-between"><span>8% do FGTS</span> <CheckCircle size={14} className="text-emerald-500" /></p>
            <p className="flex justify-between"><span>3% COFINS</span> <CheckCircle size={14} className="text-emerald-500" /></p>
            <p className="flex justify-between"><span>1% PIS</span> <CheckCircle size={14} className="text-emerald-500" /></p>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-50">
          <p className="text-sm font-bold text-slate-400 uppercase">Impacto INSS/FGTS</p>
          <p className="text-3xl font-black text-slate-900">R$ 97.920,00/ano</p>
        </div>
      </div>

      <div className="p-12 bg-slate-900 rounded-[3rem] shadow-2xl flex flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full -mr-16 -mt-16 blur-2xl" />
        <div className="space-y-8 relative z-10">
          <div className="w-16 h-16 bg-emerald-500 text-white rounded-2xl flex items-center justify-center">
            <ShieldCheck size={32} />
          </div>
          <h3 className="text-3xl font-bold text-white tracking-tight">Incentivo IRPJ</h3>
          <p className="text-slate-400 leading-relaxed">
            Dedução de até <span className="text-emerald-400 font-bold">4% do Imposto de Renda</span> devido para empresas no Lucro Real.
          </p>
          <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
            <p className="text-xs text-slate-500 uppercase mb-2">Teto de Dedução</p>
            <p className="text-xl font-black text-white">Até R$ 30.000,00</p>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 relative z-10">
          <p className="text-sm font-bold text-slate-500 uppercase">Frequência</p>
          <p className="text-3xl font-black text-white">Anual</p>
        </div>
      </div>

      <div className="p-12 bg-white rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-between group hover:border-emerald-200 transition-all">
        <div className="space-y-8">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
            <BarChart size={32} />
          </div>
          <h3 className="text-3xl font-bold text-slate-800 tracking-tight">Economia Líquida</h3>
          <p className="text-slate-400 leading-relaxed">
            Redução direta no líquido da Folha de Pagamento através de otimização de taxas e gestão.
          </p>
        </div>
        <div className="pt-8 border-t border-slate-50">
          <p className="text-sm font-bold text-slate-400 uppercase">Redução Anual</p>
          <p className="text-3xl font-black text-slate-900">R$ 112.289,76</p>
        </div>
      </div>
    </div>
  </div>
);

export const ExecSlideCashflow = () => (
  <div className="h-full flex flex-col">
    <div className="text-center mb-16 space-y-4">
      <h2 className="text-6xl font-black text-slate-900 tracking-tighter">Projeção de Economia</h2>
      <p className="text-xl text-slate-400 font-medium">Fortalecimento direto do fluxo de caixa.</p>
    </div>

    <div className="grid grid-cols-12 gap-12 flex-1">
      <div className="col-span-12 lg:col-span-8 bg-white rounded-[4rem] border border-slate-100 shadow-xl p-12 flex flex-col">
        <div className="flex justify-between items-center mb-12">
          <h3 className="text-2xl font-bold text-slate-800">Retorno Financeiro com o PAT</h3>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-slate-900 rounded-full" />
              <span className="text-xs font-bold text-slate-400 uppercase">Com PAT</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <span className="text-xs font-bold text-slate-400 uppercase">Sem PAT</span>
            </div>
          </div>
        </div>
        
        <div className="flex-1 flex items-stretch gap-8 px-4 pb-12 relative">
          {/* Y-Axis and Grid Lines */}
          <div className="absolute inset-0 flex flex-col justify-between text-[10px] font-bold text-slate-400 pointer-events-none pr-12">
            {[160, 140, 120, 100, 80, 60, 40, 20, 0].map((val) => (
              <div key={val} className="flex items-center gap-4 w-full">
                <span className="w-16 text-right">R$ {val}.000</span>
                <div className="flex-1 h-px bg-slate-100" />
              </div>
            ))}
          </div>

          {/* Bars Container */}
          <div className="flex-1 flex items-end justify-center gap-32 relative z-10 pl-20">
            {/* Indicator Bars */}
            <div className="absolute inset-0 pointer-events-none">
              {/* 150k indicator */}
              <div className="absolute left-0 flex items-center gap-3" style={{ top: '6.25%' }}>
                <div className="h-8 w-28 bg-slate-900 rounded-lg flex items-center justify-center shadow-xl border border-white/20">
                  <span className="text-[11px] font-black text-white">R$ 150.000</span>
                </div>
                <div className="w-[480px] h-px border-t border-dashed border-slate-300" />
              </div>
              
              {/* 110k indicator */}
              <div className="absolute left-0 flex items-center gap-3" style={{ top: '31.25%' }}>
                <div className="h-8 w-28 bg-red-600 rounded-lg flex items-center justify-center shadow-xl border border-white/20">
                  <span className="text-[11px] font-black text-white">R$ 110.000</span>
                </div>
                <div className="w-[480px] h-px border-t border-dashed border-red-300" />
              </div>

              {/* Delta Indicator */}
              <div className="absolute right-10 flex flex-col items-center" style={{ top: '6.25%', height: '25%' }}>
                <div className="w-1 flex-1 bg-emerald-500/30 rounded-full relative">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: '100%' }}
                    className="w-full bg-emerald-500 rounded-full"
                  />
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white shadow-sm" />
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white shadow-sm" />
                </div>
                <div className="mt-4 bg-emerald-500 text-white px-3 py-1 rounded-full shadow-lg border border-white/20">
                  <span className="text-[10px] font-black whitespace-nowrap">+ R$ 40.000 / ANO</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-6 w-40 relative">
              <motion.div 
                initial={{ height: 0 }}
                animate={{ height: '93.75%' }} // 150/160
                className="w-full bg-gradient-to-b from-slate-800 to-slate-900 rounded-t-xl shadow-2xl relative group"
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-xl" />
              </motion.div>
              <div className="px-8 py-3 border-2 border-slate-900 rounded-2xl bg-white shadow-lg relative z-20">
                <span className="font-black text-slate-900 uppercase tracking-widest text-xs">COM PAT</span>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-6 w-40 relative">
              <motion.div 
                initial={{ height: 0 }}
                animate={{ height: '68.75%' }} // 110/160
                className="w-full bg-gradient-to-b from-red-500 to-red-600 rounded-t-xl shadow-2xl relative group"
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-xl" />
              </motion.div>
              <div className="px-8 py-3 border-2 border-red-600 rounded-2xl bg-white shadow-lg relative z-20">
                <span className="font-black text-red-600 uppercase tracking-widest text-xs">SEM PAT</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-4 space-y-8">
        <div className="p-10 bg-slate-900 rounded-[3rem] shadow-2xl text-white">
          <p className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">Economia Mensal</p>
          <div className="flex items-baseline gap-2">
            <p className="text-5xl font-black tracking-tighter">R$ 9.357</p>
            <p className="text-emerald-400 font-bold flex items-center gap-1">
              <ArrowUpRight size={20} />
              Economia
            </p>
          </div>
          <p className="text-slate-400 text-sm mt-4 leading-relaxed">
            Otimização mensal de custos administrativos e de gestão de benefícios.
          </p>
        </div>

        <div className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-sm">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Impacto Consolidado</p>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-slate-700 font-bold">Mensal (Encargos)</p>
              <p className="font-black text-blue-600">R$ 30k+</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-slate-700 font-bold">Anual Total</p>
              <p className="font-black text-emerald-600">R$ 142.289</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const ExecSlideSchedule = () => (
  <div className="h-full flex flex-col">
    <div className="text-center mb-16 space-y-4">
      <h2 className="text-6xl font-black text-slate-900 tracking-tighter">Cronograma 2026</h2>
      <p className="text-xl text-slate-400 font-medium">Marcos de implementação para o primeiro quadrimestre.</p>
    </div>

    <div className="grid grid-cols-4 gap-6 flex-1">
      {[
        { 
          month: "Janeiro", 
          phase: "Planejamento", 
          items: ["Estudo de viabilidade", "Aprovação orçamentária"],
          color: "blue"
        },
        { 
          month: "Fevereiro", 
          phase: "Regularização", 
          items: ["Inscrição formal PAT", "Parametrização folha"],
          color: "emerald"
        },
        { 
          month: "Março", 
          phase: "Execução", 
          items: ["Lançamento oficial", "Comunicação interna"],
          color: "indigo"
        },
        { 
          month: "Abril", 
          phase: "Monitoramento", 
          items: ["Monitoramento KPIs", "Auditoria conformidade"],
          color: "slate"
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white rounded-[3rem] border border-slate-100 shadow-sm p-10 flex flex-col group hover:shadow-2xl transition-all"
        >
          <div className="flex items-center justify-between mb-8">
            <Calendar size={24} className="text-slate-300" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Fase {i + 1}</span>
          </div>
          <h3 className="text-3xl font-black text-slate-900 mb-2">{item.month}</h3>
          <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-8">{item.phase}</p>
          <div className="space-y-4 flex-1">
            {item.items.map((li, idx) => (
              <div key={idx} className="flex gap-3">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5" />
                <p className="text-sm text-slate-500 leading-tight">{li}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-slate-50">
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-600 w-full opacity-20 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export const ExecSlideNextSteps = () => (
  <div className="h-full flex items-center justify-center">
    <div className="max-w-4xl w-full space-y-16 text-center">
      <div className="space-y-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-24 h-24 bg-blue-600 text-white rounded-[2rem] flex items-center justify-center mx-auto shadow-2xl shadow-blue-200"
        >
          <Target size={48} />
        </motion.div>
        <h2 className="text-7xl font-black text-slate-900 tracking-tighter italic">Conclusão & Recomendação</h2>
        <p className="text-2xl text-slate-400 font-light max-w-2xl mx-auto">
          A regularização imediata protege a empresa contra riscos fiscais e gera economia real de caixa.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-sm space-y-4 text-left">
          <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight">Ferramenta de Gestão</h4>
          <p className="text-slate-400 leading-relaxed">O PAT é indispensável para a eficiência tributária e retenção de talentos.</p>
        </div>
        <div className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-sm space-y-4 text-left">
          <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight">Segurança Jurídica</h4>
          <p className="text-slate-400 leading-relaxed">Eliminação total de passivos trabalhistas relacionados a benefícios.</p>
        </div>
      </div>

      <div className="space-y-8">
        <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.3em]">Próximo Passo</p>
        <button className="px-12 py-6 bg-slate-900 text-white rounded-[2rem] font-black text-xl shadow-2xl hover:bg-blue-600 transition-all group">
          Aprovar Cronograma Janeiro/2026
          <ArrowUpRight className="inline-block ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </div>
  </div>
);

export const ExecSlideObrigado = () => (
  <div className="h-full flex items-center justify-center bg-slate-900 rounded-[3rem] overflow-hidden relative">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-500 rounded-full blur-[150px]" />
    </div>
    <div className="relative z-10 text-center space-y-8">
      <h2 className="text-9xl font-black text-white tracking-tighter italic">Obrigado!</h2>
      <p className="text-2xl text-blue-400 font-bold uppercase tracking-[0.4em]">Benefícios & Finanças</p>
      <div className="h-px w-24 bg-white/20 mx-auto" />
      <p className="text-slate-400">Estamos à disposição para esclarecimentos adicionais.</p>
    </div>
  </div>
);
