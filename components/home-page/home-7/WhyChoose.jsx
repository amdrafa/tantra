const WhyChoose = () => {

  const featuresModuleI = [
    "consteladora familiar.",
    "Thetahealling.",
    "Rebirthing.",
    "Access.",
    "Deeksha.",
    "Reiki.",
    "Apômetra.",
    "Maga divina do fogo.",
    "Iniciada como sacerdotisa da irmandade das rosas.",
    "Especialização em pompoarismo para mulheres e em disfunções sexuais."
  ];

  const featuresModuleII = [
    "consteladora familiar.",
    "Thetahealling.",
    "Rebirthing.",
    "Access.",
    "Deeksha.",
    "Reiki.",
    "Apômetra.",
    "Maga divina do fogo.",
    "Iniciada como sacerdotisa da irmandade das rosas.",
    "Especialização em pompoarismo para mulheres e em disfunções sexuais."
  ];

  const featuresModuleIII = [
    "consteladora familiar.",
    "Thetahealling.",
    "Rebirthing.",
    "Access.",
    "Deeksha.",
    "Reiki.",
    "Apômetra.",
    "Maga divina do fogo.",
    "Iniciada como sacerdotisa da irmandade das rosas.",
    "Especialização em pompoarismo para mulheres e em disfunções sexuais."
  ];

  const featuresModuleIV = [
    "consteladora familiar.",
    "Thetahealling.",
    "Rebirthing.",
    "Access.",
    "Deeksha.",
    "Reiki.",
    "Apômetra.",
    "Maga divina do fogo.",
    "Iniciada como sacerdotisa da irmandade das rosas.",
    "Especialização em pompoarismo para mulheres e em disfunções sexuais."
  ];

  const cards = [
    {
      iconSrc: "/images/icon/icon_27.svg",
      title: "Módulo 1 - Elemento Terra",
      content: [
        "Tantra - Linhagem Egípcia, Hin ica, Linhagem Real e conexões com o campo da Nova Terra.",
        "Kundalini - Portais Secretos.",
        "Leis Herméticas e as Leis da Vida.",
        "Planos e Multidimensionalidade.",
        "Caminho da Integração dos corpos, físico e astrais.",
        "Couraças e Psicossomática.",
        "Prazer no sofrimento.",
        "Desbloqueio dos canais energéticos."
      ]
    },
    {
      iconSrc: "/images/icon/icon_28.svg",
      title: "Módulo II - Elemento AR",
      content: [
        "Egrégoras espirituais e tântricas.",
        "Irmandade das rosas.",
        "Ancoramento de campo.",
        "Alquimia da alma.",
        "Leitura energética.",
        "Terapia vibracional e ativação dos códigos das rosas.",
        "Técnicas de ativação da Kundalini."
      ]
    },
    {
      iconSrc: "/images/icon/icon_29.svg",
      title: "Módulo III - Elemento Água",
      content: [
        "Yoga Tântrico.",
        "Ancorando sua potência.",
        "A cura através do prazer.",
        "O toque como ferramenta de cura e amor.",
        "Portal Yoni - Shakti.",
        "Portal Lingan - Shiva.",
        "Manobras de reprogramação.",
        "Meditação cristalina das Águas - Códigos venusianos.",
        "A chave da vida e o fluxo da abundância."
      ]
    },
    {
      iconSrc: "/images/icon/icon_29.svg",
      title: "Módulo IV - Elemento Fogo",
      content: [
        "Conduta moral e ética do terapêuta.",
        "Formato de atendimento.",
        "Dança terapêutica.",
        "Meditação ativa.",
        "Portal yoni avançado.",
        "Portal Lingan avançado.",
        "Manobras avançadas.",
        "Temaskal Tantra.",
        "Rito de iniciação."
      ]
    },
  ];

  return (
    <div className="screen-container position-relative ms-auto">
      <img
        src="/images/shape/shape_45.svg"
        alt="shape"
        className="lazy-img shapes bg-round-shape"
      />
      <div className="block-content">
        <div className="row gx-xxl-5 align-items-center">
          <div className="col-sm-6">
            {cards.slice(0, 4).map((card, index) => (
              <div
                key={index}
                className={`card-style-five  ${index === 0 ? "fadeInDown" : "fadeInUp"
                  }`}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="icon d-flex align-items-end">
                  <img src={card.iconSrc} alt="shape" className="lazy-img" />
                </div>
                <h4>{card.title}</h4>
                <div className="block-style-three" data-aos="fade-right">
                  <ul className="style-none list-item fs-18">
                    {card.content.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      {/* /.block-content */}
    </div>
  );
};

export default WhyChoose;
