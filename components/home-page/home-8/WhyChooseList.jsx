const reasons = [
  {
    title: "Sacerdotisa das Rosas.",
  },
  {
    title: "Apometria Quântica.",
  },
  {
    title: "Magia Divina das Sete chamas Sagradas.",
  },
  {
    title: "Iniciada como Sacerdotisa da Irmandade das Rosas."
  }
];

const WhyChooseList = () => {
  return (
    <div className="block-style-five pe-xl-5 me-xxl-5" data-aos="fade-right">
      {/* <div className="title-style-nine pb-20">
      
        <h2 className="main-title text-white">
          Especialista em <span>pompoarismo</span>.
        </h2>
      </div> */}
      {/* /.title-style-nine */}
      <ul className="style-none list-item">
        {reasons.map((reason) => (
          <li key={reason.title}>{reason.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default WhyChooseList;
