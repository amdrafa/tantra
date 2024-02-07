import Image from "next/image";

const CardData = [
  {
    icon: "/images/icon/content.svg",
    title: "Módulo 1 - Elemento Terra",
    description: "Tantra - Linhagem Egípcia, Hindu, Linhagem Real e conexões com o campo da Nova Terra, Kundalini - Portais Secretos, Leis Herméticas e as Leis da Vida, Planos e Multidimensionalidade, Caminho da Integração dos corpos, físico e astrais, Couraças e Psicossomática, Prazer no sofrimento, Desbloqueio dos canais energéticos.",
  },
  {
    icon: "/images/icon/content.svg",
    title: "Módulo II - Elemento AR",
    description: "Egrégoras espirituais e tântricas, Irmandade das rosas ,Ancoramento de campo, Alquimia da alma, Leitura energética, Terapia vibracional e ativação dos códigos das rosas, Técnicas de ativação da Kundalini.",
  },

  {
    icon: "/images/icon/content.svg",
    title: "Módulo III - Elemento Água",
    description: "Yoga Tântrico, Ancorando sua potência, A cura através do prazer, O toque como ferramenta de cura e amor, Portal Yoni - Shakti, Portal Lingan - Shiva, Manobras de reprogramação, Meditação cristalina das Águas - Códigos venusianos, A chave da vida e o fluxo da abundância.",
  },

  {
    icon: "/images/icon/content.svg",
    title: "Módulo IV - Elemento Fogo",
    description: "Conduta moral e ética do terapêuta, Formato de atendimento, Dança terapêutica, Meditação ativa, Portal yoni avançado, Portal Lingan avançado, Manobras avançadas, Temaskal Tantra, Rito de iniciação.",
  },
];

// background: linear-gradient(270.78deg, #e39b65 4.19%, #e28743 96.11%);

const Block3 = () => {
  return (
    <>
      {CardData.map((data, index) => (
        <div className="col-xl-4" key={index}>
          <div className="card-style-thirteen position-relative">
            <div className="icon d-flex align-items-end">
              <Image width={30} height={30} src={data.icon} alt="icon" className="lazy-img" />
            </div>
            <h4 className="text-white mt-20 mb-10">{data.title}</h4>
            <p style={{ color: "gray" }} className="fs-18 text-gray-25">{data.description}</p>
            {/* {index !== 2 && (
              <div className="arrow d-flex align-items-center justify-content-center rounded-circle position-absolute">
                <i className="bi bi-chevron-right" />
              </div>
            )} */}
          </div>
          {/* /.card-style-thirteen */}
        </div>
      ))}
    </>
  );
};

export default Block3;
