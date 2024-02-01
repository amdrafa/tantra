const reasons = [
  {
    title: "Thetahealling.",
  },
  {
    title: "Rebirthing.",
  },
  {
    title: "Access.",
  },
  {
    title: "Deeksha."
  }
];

const Why2ChooseList = () => {
  return (
    <div className="block-style-five pe-xl-5 me-xxl-5" data-aos="fade-right">
      <div className="title-style-nine pb-20">
        {/* <div className="sc-title">Histórias</div> */}
        <h2 className="main-title text-white">
          Deva Prem tem <span>formações</span> em:
        </h2>
      </div>
      {/* /.title-style-nine */}
      <ul className="style-none list-item">
        {reasons.map((reason) => (
          <li key={reason.title}>{reason.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Why2ChooseList;
