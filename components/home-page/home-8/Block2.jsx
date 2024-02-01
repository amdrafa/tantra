import Image from "next/image";

const Block2 = () => {
  const data = [
    {
      icon: "/images/media/devasimbolo.png",
      title: "Ferramenta Sistêmica",
      description: "Tem o papel de integrar nossas partes, tornando-nos mais completos, retirando os véus da dualidade interna.",
    },
    {
      icon: "/images/media/devasimbolo.png",
      title: "Integre seu Templo Sagrado",
      description: `Integre seu "corpo" com sua "alma" divida, despertando a potência multidimensional por meio da abertura e purificação da energia sexual, que é a própria energia da vida.`,
    },
    {
      icon: "/images/media/devasimbolo.png",
      title: "O caminho",
      description: "Jornada de amor, aceitação da natureza humana, estudo da energia kundalini interligada com alma, saúde física, chacras como portais e programação positiva/negativa.",
    },
    {
      icon: "/images/media/devasimbolo.png",
      title: "A Saúde Física, Emocional e Espiritual",
      description: "O tantra ensina um caminho de cura através da expansão do amor, autoamor, energia criativa, alegria, vitalidade, merecimento, prosperidade e leveza para viver em prazer em todas as áreas da vida.",
    },
    {
      icon: "/images/media/devasimbolo.png",
      title: "Um Trabalho de Luz",
      description: "Ancorado no conhecimento dos Mistérios do Antigo Egito e Escola de Ísis, onde mestres Yeshua e Maria Madalena foram iniciados, trazendo a consciência crística cristalina através de nós.",
    },
  ];


  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className={`col-lg-4 col-md-6 ${index === 1 ? "active" : ""}`}
        >
          <div
            className="card-style-twelve text-center position-relative mt-40"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <div className="icon d-flex align-items-center justify-content-center">
              <Image
                width={50}
                height={100}
                layout="intrinsic"
                src={item.icon}
                alt="shape"
                className="lazy-img"
              />
            </div>
            <h4 className="text-gray mb-10 mt-25">{item.title}</h4>
            <p className="text-gray-400 opacity-75 mb-25">{item.description}</p>
            <a href="#" className="arrow tran3s">
              <img
                src="/images/icon/icon_80.svg"
                alt="shape"
                className="lazy-img"
              />
            </a>
          </div>
          {/* /.card-style-twelve */}
        </div>
      ))}
    </>
  );
};

export default Block2;
