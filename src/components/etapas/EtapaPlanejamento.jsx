import React, { useState } from "react";
import { ClipboardList, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const checklistItens = [
  {
    titulo: "Definir modelo de negócio",
    info: `Escolha entre academia tradicional, estúdio de nicho, box de cross, funcional, etc. Avalie o público-alvo, tamanho, diferenciais, faixa de preço e potencial de expansão.`
  },
  {
    titulo: "Planejar orçamento inicial",
    info: `Levante os custos fixos (aluguel, salários, taxas), variáveis (manutenção, energia, água), investimentos em equipamentos, reformas, marketing e capital de giro. Faça uma planilha detalhada para prever o investimento total e a necessidade de capital extra.`
  },
  {
    titulo: "Estudo de viabilidade financeira",
    info: `Projete receitas (quantidade de alunos x mensalidade média), despesas mensais, ponto de equilíbrio e tempo de retorno do investimento (payback). Analise cenários otimista, realista e pessimista.`
  },
  {
    titulo: "Escolher localização estratégica",
    info: `Avalie regiões com alto fluxo de pessoas, pouca concorrência, fácil acesso, estacionamento, visibilidade e segurança. Considere contratos de aluguel com prazos favoráveis e possibilidade de renovação.`
  },
  {
    titulo: "Desenvolver plano de marketing inicial",
    info: `Defina os canais de divulgação (redes sociais, panfletos, eventos, parcerias locais), promoções de inauguração, identidade visual e persona da marca. Planeje o lançamento para captar alunos desde o início.`
  }
];

export default function EtapaPlanejamento() {
  const [checklist, setChecklist] = useState(Array(checklistItens.length).fill(false));
  const [expandido, setExpandido] = useState(Array(checklistItens.length).fill(false));

  function toggleChecklist(idx) {
    const novo = [...checklist];
    novo[idx] = !novo[idx];
    setChecklist(novo);
  }
  function toggleExpandido(idx) {
    const novo = [...expandido];
    novo[idx] = !novo[idx];
    setExpandido(novo);
  }

  return (
    <div className="bg-white rounded-2xl shadow p-5 max-w-2xl mx-auto my-8">
      <div className="flex items-center mb-3">
        <ClipboardList className="w-8 h-8 text-yellow-400 mr-2" />
        <h2 className="font-bold text-2xl text-black">Planejamento & Modelo de Negócio</h2>
      </div>
      <div className="mb-5">
        <h3 className="font-semibold text-black mb-2">Checklist</h3>
        <ul className="space-y-2">
          {checklistItens.map((item, idx) => (
            <li key={idx} className="flex flex-col border rounded-lg p-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={checklist[idx]}
                  onChange={() => toggleChecklist(idx)}
                  className="mr-2"
                />
                <span className={`text-black font-medium ${checklist[idx] ? "line-through" : ""}`}>{item.titulo}</span>
                <button
                  onClick={() => toggleExpandido(idx)}
                  className="ml-2"
                  aria-label={expandido[idx] ? "Ocultar explicação" : "Mostrar explicação"}
                >
                  {expandido[idx] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                {checklist[idx] && <CheckCircle className="w-5 h-5 text-green-500 ml-2" />}
              </div>
              <AnimatePresence>
                {expandido[idx] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-black text-sm mt-2"
                  >
                    {item.info}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
