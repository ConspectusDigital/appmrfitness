import React from "react";
import { ClipboardList } from "lucide-react";

const etapas = [
  "Análise de Mercado",
  "Planejamento & Modelo de Negócio",
  "Estrutura & Equipamentos",
  "Legalização",
  "Gestão & Operação",
  "Marketing & Divulgação",
  "Checklist Final"
];

export default function TrilhaEtapas({ abrirEtapa }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 max-w-2xl mx-auto my-8">
      <h2 className="font-bold text-xl mb-3 text-black">Trilha das Etapas</h2>
      <div className="flex flex-col gap-3">
        {etapas.map((nome, idx) => (
          <button
            key={idx}
            className="flex items-center bg-yellow-50 hover:bg-yellow-100 border-l-4 border-yellow-400 rounded-xl p-3 shadow text-black font-semibold"
            onClick={() => abrirEtapa(idx)}
          >
            <ClipboardList className="w-6 h-6 text-yellow-400 mr-3" />{idx + 1}. {nome}
          </button>
        ))}
      </div>
    </div>
  );
}
