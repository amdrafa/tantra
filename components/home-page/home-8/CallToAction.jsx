import Link from "next/link";

const CallToAction = () => {
  const platformButtons = [
    {
      href: "#",
      className: "ios-button",
      icon: "/images/icon/icon_89.svg",
      text1: "Download on the",
      text2: "App store",
      aos: "fade-right",
    },
    {
      href: "#",
      className: "windows-button",
      icon: "/images/icon/playstore.svg",
      text1: "Get it on",
      text2: "Google play",
      aos: "fade-left",
    },
  ];
  return (
    <div className="col-xl-7 col-lg-8 col-md-10 m-auto">
      {/* <div className="title-style-nine text-center mb-40" data-aos="fade-up">
        <h2 className="main-title text-gray">
          Entre em contato <span>agora mesmo</span>.
        </h2>
      </div>

      <p
        className="text-white opacity-75 text-center text-lg mt-40 mb-40 lg-mt-20"
        data-aos="fade-up"
      >
        Você será encaminhado para o WhatsApp.
      </p> */}
      <div className="custom-justify-center">
        <Link
          href="#"
          className="btn-three text-gray fw-500 tran3s mb-25 me-4 order-sm-first"
        >
          Quero saber mais!
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
