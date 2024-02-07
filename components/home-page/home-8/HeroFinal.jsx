import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const HeroFinal = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="Vsq1_kewchQ"
        onClose={() => setOpen(false)}
      />


      <h1 className="hero-heading fw-500 text-white mb-45">
        <span>Terapia Tântrica</span>.
      </h1>
      <p className="text-lg text-white opacity-75 mb-65 lg-mb-50 pe-lg-5">
        Venha mergulhar nessa incrível jornada Iniciática da Sexualidade Sagrada, onde abrimos nossa energia Kundalini para seus verdadeiros potenciais Divinos. Unificando seu Eu multidimensional com seu Eu humano.
      </p>

      <div className="d-sm-flex align-items-center">
        {/* <div
          onClick={() => setOpen(true)}
          role="button"
          className="fancybox video-icon tran3s mb-25 d-flex align-items-center order-sm-last"
        >
          <span className="icon d-block">
            <i className="bi bi-play" />
          </span>
          <div className="ps-3">
            <span className="d-block text-white fs-15 text-uppercase ">Assitir</span>
            <strong className="fs-18 fw-500 text-white d-block">
              Apresentação
            </strong>
          </div>
        </div> */}
        {/* End popup video */}

        <Link
          href="https://wa.me/47996322254"
          className="btn-three text-gray fw-500 tran3s mb-25 me-4 order-sm-first"
        >
          Entrar em contato
        </Link>
      </div>
      <h2 className="fw-500 text-white mt-60 lg-mt-30 mb-5">+50 Alunos</h2>
      <p className="fs-20 opacity-50 text-white">
        Avaliação positiva de 100% dos participantes.
      </p>
    </>
  );
};

export default Hero;
