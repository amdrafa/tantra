const BlockFeatureList = () => {
  const featureList = [
    {
      title: "Global Exchange Rates",
    },
    {
      title: "Make payments with Bank Transfer",
    },
    {
      title: "Instant Transaction",
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
      <ul className="style-none list-item fs-18 text-white opacity-75">
        {featureList.map((feature, index) => (
          <li key={index}>{feature.title}</li>
        ))}
      </ul>
      <a href="#" className="btn-sixteen fw-500 border7 tran3s mt-45">
        Start Trading
      </a>
    </div>
  );
};

export default BlockFeatureList;
