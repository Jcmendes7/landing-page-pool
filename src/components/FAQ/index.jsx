import { useState } from "react";
import "./style.css";

const perguntasRespostas = [
  {
    pergunta: "Com que frequência devo limpar minha piscina?",
    resposta: "Recomendamos a limpeza semanalmente para manter a água saudável e cristalina.",
  },
  {
    pergunta: "Quais produtos vocês utilizam na limpeza?",
    resposta: "Utilizamos produtos profissionais, como cloro estabilizado, algicida e clarificantes.",
  },
  {
    pergunta: "Vocês oferecem manutenção preventiva?",
    resposta: "Sim! Fazemos manutenção mensal para garantir que sua piscina esteja sempre pronta para uso.",
  },
];

export function FAQ() {
  const [ativo, setAtivo] = useState(null);

  const toggleFAQ = (index) => {
    setAtivo(ativo === index ? null : index);
  };

  return (
    <section className="faq">
      <h2>Dúvidas Frequentes</h2>
      <div className="faq-container">
        {perguntasRespostas.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${ativo === index ? "ativo" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-pergunta">{item.pergunta}</div>
            <div className="faq-resposta">{ativo === index && item.resposta}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
