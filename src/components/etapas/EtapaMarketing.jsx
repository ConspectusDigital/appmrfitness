import React, { useState } from "react";
import { ClipboardList, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const checklistItens = [
  {
    titulo: "Criar identidade visual e presença digital",
    info: `Desenvolva logotipo, cores, uniformes, fachada e decoração. Crie perfis em redes sociais (Instagram, Facebook, TikTok, Google Meu Negócio) e atualize sempre.`
  },
  {
    titulo: "Planejar campanhas de inauguração",
    info: `Elabore promoções para captação inicial de alunos: planos promocionais, descontos, aulas experimentais, brindes e eventos. Parcerias locais aumentam alcance.`
  },
  {
    titulo: "Implementar estratégias de retenção",
    info: `Ofereça aulas especiais, eventos internos, desafios, programas de indicação e reconhecimento dos alunos (aniversariantes, aluno destaque, etc). Use CRM e automações para lembrar dos alunos.`
  },
  {
    titulo: "Analisar resultados e ajustar ações",
    info: `Monitore métricas: seguidores, engajamento, visitantes, conversões, ROI das campanhas. Ajuste a comunicação conforme o perfil do público e faça testes de novas estratégias.`
  }
];

export default function EtapaMarketing() {
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
        <h2 className="font-bold text-2xl text-black">Marketing & Divulgação</h2>
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
