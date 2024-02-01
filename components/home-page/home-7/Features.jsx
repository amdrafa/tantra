const featureData = [
  {
    id: 1,
    icon: "/images/icon/icon_24.svg",
    title: "Ferramenta Sistêmica",
    text: "Tem o papel de integrar nossas partes, tornando-nos mais completos, retirando os véus da dualidade interna.",
    backgroundColor: "#FFEBDB",
  },
  {
    id: 2,
    icon: "/images/icon/icon_25.svg",
    title: "Integre seu Templo Sagrado",
    text: `Integre seu "corpo" com sua "alma" divida... Trazendo e acordando no seu corpo sua potência multidimensional, através da abertura e purificação da energia sexual, que é a própria energia da vida.`,
    backgroundColor: "#E0F8F8",
  },
  {
    id: 3,
    icon: "/images/icon/icon_26.svg",
    title: "O caminho",
    text: "É uma jornada de amor e aceitação da nossa natureza e biologia humana, do estudo da energia kandalini, que está interligada com nossa alma, saúde física, suas potências, bloqueios e com nossos chacras como portais e toda programação que carrega, tanto positiva quanto nevativa.",
    backgroundColor: "#F7EDFF",
  },
  {
    id: 4,
    icon: "/images/icon/icon_26.svg",
    title: "A Saúde Física, Emocional e Espiritual",
    text: "O tantra ensina um caminho de cura através da depressão do potencial orgástico no corpo, que pode beneficiar não somente na relação de casais e o sexo em sí, mas também na nossa vida através da expensão do amor, do auto amor, da energia de criativa, da alegria, da vitalidade, do merecimento, da prosperidade e a leveza para aprendermos a viver em prazer em todas as áreas da nossa vida.",
    backgroundColor: "#F7EDFF",
  },
  {
    id: 5,
    icon: "/images/icon/icon_26.svg",
    title: "Um Trabalho de Luz",
    text: "Ancorado no conhecimento da Escola de Mistérios de Isis, onde os mestres Maria Magdalena e Yeshua foram iniciados, trazendo os códigos da consciência Crística através de nós. Este curso é a única formação para Terapeutas em tantra no Brasil dentro da linhagem  das Rosas.",
    backgroundColor: "#F7EDFF",
  },
];

const FeatureCard = ({ icon, title, text, backgroundColor }) => {
  return (
    <div className="card-style-four text-center position-relative mt-40 xs-mt-20">
      <div
        className="icon rounded-circle m-auto d-flex align-items-center justify-content-center"
        style={{ backgroundColor }}
      >
        <img src={icon} alt="icon" className="lazy-img" />
      </div>
      <h4 className="fw-500 mt-35 mb-25">
        <a href="#" className="tran3s tx-dark">
          {title}
        </a>
      </h4>
      <p className="mb-30">{text}</p>
      <a href="#">
        <img src="/images/icon/icon_05.svg" alt="icon" className="lazy-img" />
      </a>
    </div>
  );
};

const Features = () => {
  return (
    <>
      {featureData.map((feature) => (
        <div
          key={feature.id}
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay={feature.id * 100}
        >
          <FeatureCard
            icon={feature.icon}
            title={feature.title}
            text={feature.text}
            backgroundColor={feature.backgroundColor}
          />
        </div>
      ))}
    </>
  );
};

export default Features;
