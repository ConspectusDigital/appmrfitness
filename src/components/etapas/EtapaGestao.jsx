import React, { useState } from "react";
import { ClipboardList, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const checklistItens = [
  {
    titulo: "Contratar equipe qualificada",
    info: `Monte o time: profissionais de educação física registrados no CREF, recepcionistas, limpeza, administrativo, financeiro e marketing. Avalie perfil técnico, comportamental e experiência prévia.`
  },
  {
    titulo: "Implantar rotinas operacionais",
    info: `Defina horários de funcionamento, escalas de trabalho, controle de acesso, processos de matrícula, cobrança, avaliação física, limpeza, manutenção e atendimento ao cliente.`
  },
  {
    titulo: "Gerenciar finanças e estoque",
    info: `Utilize software para controle financeiro, emissão de boletos, notas fiscais, controle de inadimplência e fluxo de caixa. Faça inventário de materiais e equipamentos, controle de compras e contratos de fornecedores.`
  },
  {
    titulo: "Acompanhar desempenho e satisfação dos alunos",
    info: `Implemente indicadores de desempenho: número de alunos, taxa de conversão, retenção, cancelamentos, tíquete médio e satisfação dos clientes. Faça pesquisas regulares, colete feedback e ajuste processos para melhorar sempre.`
  }
];

export default function EtapaGestao() {
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
        <h2 className="font-bold text-2xl text-black">Gestão & Operação</h2>
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
