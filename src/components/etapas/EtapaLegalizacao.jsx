import React, { useState } from "react";
import { ShieldCheck, Star, User, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const checklistItens = [
  {
    titulo: "Registrar CNPJ e Junta Comercial",
    info: `Abra o CNPJ pelo portal da Receita Federal e registre na Junta Comercial do seu estado. Isso legaliza a empresa para fins fiscais e permite a emissão de notas fiscais. Normalmente exige: RG, CPF, comprovante de endereço, contrato social (ou MEI), e taxa da Junta Comercial. Importante definir a atividade principal (CNAE 9313-1/00 - Atividades de condicionamento físico).`
  },
  {
    titulo: "Solicitar alvará funcionamento",
    info: `É obrigatório para abrir as portas. Solicite o Alvará de Funcionamento junto à Prefeitura, apresentando: CNPJ, contrato social, endereço do imóvel, habite-se, e outros documentos. Algumas cidades exigem autorização prévia do Corpo de Bombeiros e Licença Sanitária para liberar o alvará.`
  },
  {
    titulo: "Obter AVCB Bombeiros",
    info: `O Auto de Vistoria do Corpo de Bombeiros (AVCB) comprova que o imóvel atende às normas de prevenção e combate a incêndios (NBR 12693). Exige projeto, instalação de equipamentos (extintores, sinalização, luz de emergência), treinamento de brigada e vistoria final dos bombeiros. Sem o AVCB, o alvará não é liberado.`
  },
  {
    titulo: "Conseguir licença sanitária",
    info: `Obtenha na Vigilância Sanitária Municipal. Verifica limpeza, instalações de banheiros/vestiários, bebedouros, manutenção e descarte correto de resíduos. Exige plantas do local, procedimentos de higiene e responsabilidade técnica (profissional de educação física registrado no CREF).`
  },
  {
    titulo: "Registrar CREF PJ e RT",
    info: `Registre a academia como Pessoa Jurídica (PJ) no Conselho Regional de Educação Física (CREF). É obrigatório também nomear e registrar um Responsável Técnico (RT) — profissional de educação física vinculado ao CREF da sua região. Sem esses registros, o funcionamento é considerado ilegal e sujeito a multa/fechamento.`
  }
];

// Exemplo simplificado para ilustrar a etapa
export default function EtapaLegalizacao() {
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
        <ShieldCheck className="w-8 h-8 text-yellow-400 mr-2" />
        <h2 className="font-bold text-2xl text-black">Legalização</h2>
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
