import React, { useState } from "react";
import { CheckCircle, XCircle, Star } from "lucide-react";

const perguntas = [
  {
    pergunta: "Qual documento é obrigatório para legalizar uma academia?",
    alternativas: [
      { texto: "Registro em cartório", correta: false },
      { texto: "CREF PJ e RT", correta: true },
      { texto: "CRM", correta: false },
      { texto: "Diploma universitário", correta: false }
    ]
  },
  {
    pergunta: "O que deve ser previsto no orçamento inicial?",
    alternativas: [
      { texto: "Somente aluguel e salários", correta: false },
      { texto: "Equipamentos e marketing", correta: false },
      { texto: "Todos os custos e capital de giro", correta: true },
      { texto: "Somente manutenção", correta: false }
    ]
  }
];

export default function QuizGamificado() {
  const [respostas, setRespostas] = useState(Array(perguntas.length).fill(null));
  const [concluido, setConcluido] = useState(false);

  function responder(idxPergunta, idxAlternativa) {
    if (respostas[idxPergunta] !== null) return;
    const novo = [...respostas];
    novo[idxPergunta] = idxAlternativa;
    setRespostas(novo);

    // Verifica se todas já foram respondidas
    if (novo.every(r => r !== null)) setConcluido(true);
  }

  return (
    <div className="bg-yellow-50 rounded-2xl shadow p-5 mt-5">
      <h3 className="font-bold text-lg text-black mb-3 flex items-center">
        <Star className="w-6 h-6 text-yellow-400 mr-2" /> Quiz Gamificado
      </h3>
      {perguntas.map((q, idx) => (
        <div key={idx} className="mb-4">
          <div className="text-black font-semibold">{q.pergunta}</div>
          <div className="flex flex-col gap-2 mt-1">
            {q.alternativas.map((alt, i) => (
              <button
                key={i}
                className={`px-3 py-2 rounded-lg border flex items-center ${
                  respostas[idx] === null
                    ? "bg-white hover:bg-yellow-100 border-gray-200"
                    : respostas[idx] === i
                      ? alt.correta
                        ? "bg-green-100 border-green-400"
                        : "bg-red-100 border-red-400"
                      : "bg-white border-gray-200 opacity-50"
                }`}
                onClick={() => responder(idx, i)}
                disabled={respostas[idx] !== null}
              >
                {respostas[idx] === i && alt.correta && (
                  <CheckCircle className="w-5 h-5 text-green-500 mr-1" />
                )}
                {respostas[idx] === i && !alt.correta && (
                  <XCircle className="w-5 h-5 text-red-400 mr-1" />
                )}
                {alt.texto}
              </button>
            ))}
          </div>
        </div>
      ))}

      {concluido && (
        <div className="mt-3 text-green-700 text-center font-bold">
          🎉 Parabéns! Você completou o quiz desta etapa!
        </div>
      )}
    </div>
  );
}
