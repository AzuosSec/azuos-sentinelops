import {
  Shield,
  Radar,
  BarChart3,
  MapPinned,
  ChevronRight,
  Phone,
  Mail,
  Activity,
  Eye,
  Bell,
  Search,
  ArrowRight,
} from "lucide-react";

export default function AzuosSecOpsWebpage() {
  const problems = [
    "Roubo de carga e perdas logísticas",
    "Fraudes internas e desvios operacionais",
    "Falta de inteligência integrada entre áreas",
    "Decisões tomadas apenas após os incidentes",
  ];

  const offerings = [
    {
      title: "Azuos Risk Intelligence Assessment",
      text: "Diagnóstico completo da operação com mapa de vulnerabilidades, análise de incidentes e recomendações estratégicas.",
      icon: Search,
    },
    {
      title: "Control Tower de Inteligência",
      text: "Monitoramento estratégico contínuo, análise de risco operacional e apoio à tomada de decisão.",
      icon: Radar,
    },
    {
      title: "Investigações Corporativas",
      text: "Atuação especializada em fraudes internas, desvios operacionais e casos sensíveis.",
      icon: Shield,
    },
  ];

  const benefits = [
    "Redução de perdas financeiras",
    "Prevenção de incidentes recorrentes",
    "Identificação de padrões de fraude",
    "Melhoria da tomada de decisão",
    "Maior visibilidade sobre riscos operacionais",
    "Resposta mais rápida a ameaças críticas",
  ];

  const sectors = [
    "Indústrias",
    "Centros de distribuição",
    "Transportadoras",
    "Operadores logísticos",
    "Varejo",
    "Agronegócio",
  ];

  const indicators = [
    {
      label: "Visão integrada",
      value: "360°",
      sub: "segurança + logística + investigação",
    },
    {
      label: "Foco operacional",
      value: "24/7",
      sub: "monitoramento e inteligência contínua",
    },
    {
      label: "Tempo de resposta",
      value: "Rápido",
      sub: "alertas e ação orientada por contexto",
    },
    {
      label: "Tomada de decisão",
      value: "Executiva",
      sub: "painéis, relatórios e recomendações",
    },
  ];

  const kpis = [
    {
      title: "Incidentes críticos mapeados",
      value: "128",
      delta: "+18% visibilidade",
    },
    {
      title: "Padrões de risco identificados",
      value: "37",
      delta: "inteligência acionável",
    },
    { title: "Áreas monitoradas", value: "12", delta: "operações integradas" },
  ];

  return (
    <div className="min-h-screen bg-black text-slate-100 selection:bg-cyan-400/30">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <img src="/AZUOS.png" alt="Azuos Logo" className="h-10 w-auto" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Azuos</p>
              <p className="text-sm text-slate-300">SecOps Intelligence</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#solucoes" className="transition hover:text-white">Soluções</a>
            <a href="#indicadores" className="transition hover:text-white">Indicadores</a>
            <a href="#resultados" className="transition hover:text-white">Resultados</a>
            <a href="#contato" className="transition hover:text-white">Contato</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.24),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.22),_transparent_28%),linear-gradient(135deg,#020617_0%,#050816_35%,#0a0f25_68%,#03131c_100%)]">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.45)_70%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-sm text-cyan-300">
              <Activity className="h-4 w-4" />
              Inteligência para Operações Críticas
            </div>

            <img src="/AZUOS.png" alt="Azuos" className="mb-8 h-20 w-auto drop-shadow-[0_0_24px_rgba(34,211,238,0.18)]" />

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Antecipe riscos, reduza perdas e transforme dados operacionais em decisão estratégica.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Azuos SecOps Intelligence conecta segurança, logística, investigação e análise de risco em uma única camada de inteligência operacional.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-2xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_40px_rgba(34,211,238,0.18)] transition hover:scale-[1.02] hover:bg-cyan-400"
              >
                Solicitar diagnóstico
                <ChevronRight className="h-4 w-4" />
              </a>

              <a
                href="#solucoes"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Conhecer soluções
              </a>
            </div>

            <div id="indicadores" className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {indicators.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-300">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 m-auto h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="relative w-full max-w-2xl rounded-[2rem] border border-white/10 bg-slate-950/80 p-4 shadow-2xl backdrop-blur-xl">
              <div className="mb-4 flex items-center justify-between border-b border-white/10 px-2 pb-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Control Tower</p>
                  <h2 className="mt-1 text-lg font-semibold text-white">Painel de Inteligência Operacional</h2>
                </div>
                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                  Em monitoramento
                </div>
              </div>

              <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.88),rgba(2,6,23,0.96))] p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-white">Mapa de risco geográfico</p>
                      <p className="text-xs text-slate-400">Vulnerabilidades por região e operação</p>
                    </div>
                    <MapPinned className="h-5 w-5 text-cyan-300" />
                  </div>

                  <div className="relative h-64 overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.20),transparent_28%),radial-gradient(circle_at_70%_60%,rgba(34,211,238,0.18),transparent_24%),linear-gradient(180deg,rgba(2,6,23,1),rgba(15,23,42,0.95))]">
                    <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />
                    <div className="absolute left-[18%] top-[28%] h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
                    <div className="absolute left-[44%] top-[34%] h-3 w-3 rounded-full bg-fuchsia-400 shadow-[0_0_18px_rgba(217,70,239,0.9)]" />
                    <div className="absolute left-[68%] top-[56%] h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
                    <div className="absolute left-[34%] top-[64%] h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_18px_rgba(251,191,36,0.9)]" />
                    <div className="absolute left-[18%] top-[28%] h-[1px] w-[28%] rotate-[10deg] bg-gradient-to-r from-cyan-400/70 to-fuchsia-400/70" />
                    <div className="absolute left-[44%] top-[34%] h-[1px] w-[26%] rotate-[24deg] bg-gradient-to-r from-fuchsia-400/70 to-cyan-400/70" />
                    <div className="absolute left-[34%] top-[64%] h-[1px] w-[36%] -rotate-[18deg] bg-gradient-to-r from-amber-400/70 to-cyan-400/70" />
                    <div className="absolute bottom-4 left-4 rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-xs text-slate-200">
                      Zonas críticas priorizadas por severidade
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid gap-4">
                    {kpis.map((item) => (
                      <div key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
                        <p className="text-xs uppercase tracking-[0.16em] text-slate-400">{item.title}</p>
                        <p className="mt-2 text-3xl font-semibold text-white">{item.value}</p>
                        <p className="mt-1 text-sm text-cyan-300">{item.delta}</p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-white">Alertas executivos</p>
                        <p className="text-xs text-slate-400">Sinais críticos priorizados</p>
                      </div>
                      <Bell className="h-5 w-5 text-cyan-300" />
                    </div>
                    <div className="mt-4 space-y-3">
                      {[
                        "Padrão recorrente em rota crítica detectado",
                        "Concentração de incidentes acima da média regional",
                        "Desvio operacional com alta relevância investigativa",
                      ].map((alert) => (
                        <div key={alert} className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-slate-200">
                          {alert}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">O problema</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">A maioria das empresas reage tarde demais.</h2>
            <p className="mt-4 max-w-3xl text-slate-300">
              Ferramentas isoladas não entregam visão estratégica. Sem inteligência integrada, incidentes, desvios e perdas continuam acontecendo sem que padrões de risco sejam identificados com antecedência.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {problems.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/70 p-5 text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-fuchsia-400/20 bg-[linear-gradient(180deg,rgba(91,33,182,0.10),rgba(6,182,212,0.06))] p-8 shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-300">Reposicionando segurança</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">De centro de custo para camada de inteligência operacional.</h3>
            <p className="mt-4 text-slate-300">
              Azuos conecta segurança, logística e investigação para gerar inteligência acionável e reduzir perdas operacionais com visão integrada da operação.
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  icon: Eye,
                  text: "Visibilidade executiva sobre ameaças, vulnerabilidades e incidentes.",
                },
                {
                  icon: BarChart3,
                  text: "Análise orientada por padrão, contexto e impacto operacional.",
                },
                {
                  icon: Radar,
                  text: "Alertas estratégicos para ação antes do prejuízo.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/30 p-4">
                    <div className="rounded-xl bg-white/5 p-2">
                      <Icon className="h-5 w-5 text-cyan-300" />
                    </div>
                    <p className="text-sm leading-6 text-slate-200">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="solucoes" className="border-y border-white/10 bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Soluções Azuos</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Arquitetura comercial pensada para entrada, recorrência e escala.</h2>
            <p className="mt-4 text-slate-300">
              Comece com diagnóstico, evolua para monitoramento estratégico e expanda para investigações e inteligência aplicada.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {offerings.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="group rounded-[2rem] border border-white/10 bg-black/70 p-7 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-black">
                  <div className="inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300">
                    Saiba mais
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="resultados" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Resultados esperados</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Segurança transformada em vantagem estratégica.</h2>
            <p className="mt-4 text-slate-300">
              O objetivo é simples: reduzir perdas, elevar a capacidade de resposta e dar ao cliente uma visão executiva real da operação.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {sectors.map((sector) => (
                <span key={sector} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                  {sector}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 text-slate-200 shadow-lg">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[linear-gradient(180deg,rgba(17,24,39,0.92),rgba(2,6,23,1))]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-[2rem] border border-cyan-400/15 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),rgba(124,58,237,0.08),rgba(2,6,23,0.8))] p-8 shadow-2xl lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Oferta de entrada</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Azuos Risk Intelligence Assessment</h2>
                <p className="mt-4 max-w-2xl text-slate-300">
                  Diagnóstico estratégico para identificar vulnerabilidades, padrões de risco e oportunidades de mitigação na sua operação.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-black/40 p-6">
                <p className="text-sm font-medium text-white">Entregáveis</p>
                <div className="mt-4 space-y-3 text-sm text-slate-200">
                  {[
                    "Mapa de vulnerabilidades operacionais",
                    "Levantamento de incidentes e padrões críticos",
                    "Priorização de riscos por impacto",
                    "Recomendações estratégicas para mitigação",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
        <div className="rounded-[2.2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.22),transparent_38%),radial-gradient(circle_at_bottom,rgba(34,211,238,0.16),transparent_35%),linear-gradient(180deg,rgba(15,23,42,0.85),rgba(2,6,23,1))] p-10 shadow-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Próximo passo</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Solicite uma análise de risco operacional.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Vamos mapear vulnerabilidades, identificar padrões de risco e transformar dados operacionais em inteligência prática para sua empresa.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 text-slate-200 sm:flex-row sm:flex-wrap sm:gap-8">
            <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4 text-cyan-300" /> contato@azuossecops.com.br</span>
            <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4 text-cyan-300" /> +55 11 91134-5050</span>
            <span>www.azuossecops.com.br</span>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5511911345050"
              className="rounded-2xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-400"
            >
              Falar no WhatsApp
            </a>
            <a
              href="mailto:contato@azuossecops.com.br"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Enviar e-mail
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
