import React, { useState } from "react";
import { Home, ClipboardList, BarChart, Users, Trophy } from "lucide-react";
import TelaInicialGamificada from "./components/TelaInicialGamificada";
import TrilhaEtapas from "./components/TrilhaEtapas";
import CalculadoraFinanceira from "./components/CalculadoraFinanceira";
import Comunidade from "./components/Comunidade";
import Conquistas from "./components/Conquistas";
import {
  EtapaLegalizacao
  // Você pode importar outras etapas depois, exemplo:
  // EtapaAnaliseMercado,
  // EtapaPlanejamento,
  // ...
} from "./components/etapas";

const abas = [
  { key: "inicio", label: "Início", icon: <Home /> },
  { key: "trilha", label: "Trilha", icon: <ClipboardList /> },
  { key: "calculadora", label: "Calculadora", icon: <BarChart /> },
  { key: "comunidade", label: "Comunidade", icon: <Users /> },
  { key: "conquistas", label: "Conquistas", icon: <Trophy /> }
];

const etapas = [
  { nome: "Legalização", componente: <EtapaLegalizacao /> },
  // Inclua as outras etapas aqui conforme criar
];

export default function App() {
  const [aba, setAba] = useState("inicio");
  const [etapaAberta, setEtapaAberta] = useState(null);

  let conteudo;
  if (aba === "inicio") conteudo = <TelaInicialGamificada />;
  else if (aba === "trilha")
    conteudo =
      etapaAberta === null ? (
        <TrilhaEtapas abrirEtapa={setEtapaAberta} />
      ) : (
        <>
          <button
            className="text-xs text-yellow-600 underline mb-3"
            onClick={() => setEtapaAberta(null)}
          >
            ← Voltar para trilha
          </button>
          {etapas[etapaAberta].componente}
        </>
      );
  else if (aba === "calculadora") conteudo = <CalculadoraFinanceira />;
  else if (aba === "comunidade") conteudo = <Comunidade />;
  else if (aba === "conquistas") conteudo = <Conquistas />;

  return (
    <div className="min-h-
