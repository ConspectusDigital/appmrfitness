import React, { useState } from "react";
import { User, Star, Flame, Trophy, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Lista de mascotes/avatares SVG. (Adicione mais SVGs conforme preferir.)
const mascotes = [
  {
    nome: "Atleta Feminina",
    src: "/ilustracoes/mascote1.svg"
  },
  {
    nome: "Halter Mascote",
    src: "/ilustracoes/mascote2.svg"
  },
  {
    nome: "Personal Trainer",
    src: "/ilustracoes/mascote3.svg"
  }
];

export default function TelaInicialGamificada() {
  const [nome, setNome] = useState(
    localStorage.getItem("nomeUsuario") || ""
  );
  const [avatar, setAvatar] = useState(
    localStorage.getItem("avatarUsuario") || ""
  );
  const [fase, setFase] = useState(nome && avatar ? "dashboard" : "cadastro");

  function handleComecar() {
    if (nome && avatar) {
      localStorage.setItem("nomeUsuario", nome);
      localStorage.setItem("avatarUsuario", avatar);
      setFase("dashboard");
    }
  }

  // Exemplo de dashboard simples, personalize conforme necessidade!
  if (fase === "dashboard") {
    return (
      <div className="bg-white rounded-2xl shadow p-6 max-w-2xl mx-auto my-8">
        <div className="flex items-center mb-3">
          <img
            src={avatar}
            alt="Avatar"
            className="w-14 h-14 rounded-full border-2 border-yellow-400 mr-3 bg-white"
          />
          <div>
            <div className="font-bold text-xl text-black">
              Olá, {nome}!
            </div>
            <div className="text-gray-600 text-sm">
              Bem-vindo à sua jornada Mr. Fitness!
            </div>
          </div>
        </div>
        {/* O resto do dashboard segue como nos exemplos anteriores */}
      </div>
    );
  }

  // Tela de boas-vindas e escolha de mascote
  return (
    <div className="bg-white rounded-2xl shadow p-6 max-w-md mx-auto my-8">
      <h2 className="text-2xl font-bold mb-2 text-yellow-500">
        Bem-vindo(a) ao Desafio Mr. Fitness!
      </h2>
      <p className="mb-4 text-black">
        Digite seu nome e escolha seu mascote para personalizar sua jornada.
      </p>
      <input
        type="text"
        className="w-full border border-yellow-400 rounded-lg px-3 py-2 mb-4 text-black"
        placeholder="Digite seu nome..."
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <div className="mb-4">
        <div className="mb-1 text-black font-semibold">Escolha seu mascote:</div>
        <div className="flex space-x-4">
          {mascotes.map((m, i) => (
            <button
              key={i}
              className={`rounded-xl p-2 border-2 ${
                avatar === m.src
                  ? "border-yellow-500 bg-yellow-100"
                  : "border-gray-300 bg-white"
              }`}
              onClick={() => setAvatar(m.src)}
              tabIndex={0}
            >
              <img
                src={m.src}
                alt={m.nome}
                className="w-16 h-16"
                style={{ filter: avatar === m.src ? "drop-shadow(0 0 8px #FFD600)" : "none" }}
              />
              <div className="text-xs text-black mt-1">{m.nome}</div>
            </button>
          ))}
        </div>
      </div>
      <button
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-2xl shadow text-lg"
        onClick={handleComecar}
        disabled={!nome || !avatar}
      >
        Começar minha jornada
      </button>
    </div>
  );
}
