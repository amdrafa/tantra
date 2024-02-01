import Link from "next/link";

const Block2FeatureList = () => {
  const featureList = [
    {
      title: "Mulher medicina",
    },
    {
      title: "dirigente da escola iniciática caminhosagrado.",
    },
    {
      title: "Conhecimento terapêutico interligando as ferramentas quânticas",
    },
  ];

  return (
    <div className="block-style-three ps-xxl-5" data-aos="fade-left">
      <div className="title-style-nine">
        <div className="sc-title">Educadora</div>
        <h2 className="main-title text-gray">
          Conheça a <span>Criadora</span> do método.
        </h2>
      </div>
      <p className="text-lg text-gray-400 opacity-75 pt-20 pb-30 lg-pb-20">

        Deva Prem é uma mestra em sexualidade sagrada, com experiência em terapia vibracional tântrica. Ao longo de muitos anos, ela acumulou amplo conhecimento clínico e alcançou resultados surpreendentes.
      </p>
      <ul className="style-none list-item fs-18 text-gray-400 opacity-75">
        {featureList.map((feature, index) => (
          <li key={index}>{feature.title}</li>
        ))}
      </ul>
      <Link
        href="#"
        className="btn-three text-gray fw-500 tran3s mb-25 me-4 order-sm-first"
      >
        Entrar em contato
      </Link>
    </div>
  );
};

export default Block2FeatureList;
