import Link from "next/link";

const Block2FeatureList = () => {
  const featureList = [
    {
      title: "Mulher Medicina, de onde vem seu berço espiritual. ",
    },
    {
      title: "Dirigente da Escola Iniciática Caminho Sagrado.",
    },
    {
      title: "Conhecimento terapêutico interligando as ferramentas quânticas",
    },
    {
      title: "Viajou pela Índia, Egito, França e Espanha recebendo iniciações e estudos.",
    },
  ];

  return (
    <div className="block-style-three ps-xxl-5" data-aos="fade-left">
      <div className="title-style-nine">
        {/* <div className="sc-title">Educadora</div> */}
        <h2 className="main-title text-white">
          Conhecendo a <span>Terapeuta</span>.
        </h2>
      </div>
      <p className="text-lg text-white opacity-75 pt-20 pb-30 lg-pb-20">

        Deva Prem é Mestra em Sexualidade Sagrada, Sacerdotisa de Isis, com muitos anos de experiência em atendimentos com a terapia Vibracional Tântrica.  Onde acumulou amplo conhecimento clínico e alcançou resultados surpreendentes.
      </p>
      <ul className="style-none list-item fs-18 text-white opacity-75">
        {featureList.map((feature, index) => (
          <li key={index}>{feature.title}</li>
        ))}
      </ul>
      <Link
        href="https://wa.me/47996322254"
        className="btn-three text-gray fw-500 tran3s mb-25 me-4 order-sm-first"
      >
        Entrar em contato
      </Link>
    </div>
  );
};

export default Block2FeatureList;
