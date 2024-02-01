const faqs = [
  {
    id: "1",
    question: `Qual é a abordagem principal da Formação em Terapia Tântrica "Sexualidade Sagrada"?`,
    answer:
      "A formação tem como objetivo ensinar em profundidade a verdadeira essência do Tantra como um caminho consciencial e filosofia de vida, utilizando a sexualidade sagrada como uma ferramenta para integração e cura pessoal.",
  },
  {
    id: "2",
    question: "Quem é Deva Prem e qual é a sua conexão com a formação?",
    answer:
      "Deva Prem é a mestra em Sexualidade Sagrada que lidera a formação. Ela possui vasta experiência, atuando como terapeuta vibracional tântrica, e é a fundadora da Escola Iniciática Caminho Sagrado. Sua abordagem combina conhecimentos do xamanismo, terapias vibracionais, e tradições iniciáticas.",
  },
  {
    id: "3",
    question: "Quais são os benefícios práticos da abordagem tântrica ensinada neste curso?",
    answer:
      "A abordagem tântrica busca integrar o corpo e a alma, despertando a potência multidimensional através da purificação da energia sexual. Isso pode resultar em benefícios para as relações interpessoais, a saúde física, a expressão do amor, a alegria, a vitalidade e o bem-estar geral.",
  },
  {
    id: "4",
    question: "Como é estruturada a formação em termos de módulos e temas abordados?",
    answer:
      "A formação é dividida em módulos, cada um focando em elementos específicos. Os tópicos incluem linhagens tântricas, kundalini, leis herméticas, multidimensionalidade, técnicas de ativação da kundalini, prazer no sofrimento, desbloqueio energético, alquimia da alma, entre outros.",
  },
];

const Faq = () => {
  return (
    <div className="accordion accordion-style-one md-mt-40" id="accordionOne">
      {faqs.map((faq) => (
        <div className="accordion-item" key={faq.id}>
          <div className="accordion-header" id={"heading" + faq.id}>
            <button
              className={`accordion-button${faq.id !== "3" ? " collapsed" : ""
                }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={"#collapse" + faq.id}
              aria-expanded={faq.id === "3" ? "true" : "false"}
              aria-controls={"collapse" + faq.id}
            >
              {faq.question}
            </button>
          </div>
          <div
            id={"collapse" + faq.id}
            className={`accordion-collapse collapse${faq.id === "3" ? " show" : ""
              }`}
            aria-labelledby={"heading" + faq.id}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
