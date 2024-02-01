const Features2 = () => {
  const listItems = [
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

  const platformButtons = [
    {
      href: "#",
      imgSrc: "/images/icon/apple.svg",
      imgAlt: "media",
      platform: "App store",
    },
    {
      href: "#",
      imgSrc: "/images/icon/playstore.svg",
      imgAlt: "media",
      platform: "Google play",
    },
  ];

  return (
    <div className="block-style-three" data-aos="fade-right">
      <div className="title-style-four">
        <h2 className="main-title fw-500 tx-dark m0">
          É mulher medicina e dirigente da escola iniciática caminho
          <span>sagrado.</span>
        </h2>
      </div>
      {/* /.title-style-four */}
      <p className="text-lg pt-35 pb-30 lg-pb-10">
        Seu berço é o xamânismo e o conhecimento terapêutico interligando as
        ferramentas quânticas de forma sistêmica e global.
      </p>
      <ul className="style-none list-item fs-18">
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {/* <div className="d-sm-flex align-items-center platform-button-group mt-60 lg-mt-30">
        {platformButtons.map((button, index) => (
          <a
            key={index}
            href={button.href}
            className={`d-flex align-items-center ${button.platform === "App store" ? "ios-button" : "windows-button"
              }`}
          >
            <img
              src={button.imgSrc}
              alt={button.imgAlt}
              className="lazy-img icon"
            />
            <div>
              <span>Download on the</span>
              <strong>{button.platform}</strong>
            </div>
          </a>
        ))}
      </div> */}
    </div>
  );
};

export default Features2;
