import React from "react";

export default function TelaFinalMotivacional({ nome, avatar }) {
  return (
    <div className="bg-white rounded-2xl shadow p-8 max-w-2xl mx-auto my-10 flex flex-col items-center">
      <img
        src={avatar || "/ilustracoes/certificado.svg"}
        alt="Mascote ou Certificado"
        className="w-32 h-32 mb-4 rounded-full shadow"
      />
      <h2 className="text-3xl font-bold text-yellow-500 mb-2 text-center">
        Parabéns, {nome || "Campeão(a)"}!
      </h2>
      <p className="text-xl text-black font-semibold mb-4 text-center">
        Você concluiu toda a jornada para abrir e gerenciar sua academia!
      </p>
      <p className="text-black text-center mb-4">
        Que sua história inspire outros empreendedores fitness.<br />
        Continue se superando, acreditando e realizando.
      </p>
      <div className="w-full flex justify-center mt-6">
        <img
          src="/ilustracoes/certificado.svg"
          alt="Certificado"
          className="w-64"
        />
      </div>
      <div className="text-center mt-8">
        <span className="text-yellow-600 font-bold">
          “O sucesso é a soma de pequenos esforços repetidos diariamente.”
        </span>
      </div>
    </div>
  );
}
