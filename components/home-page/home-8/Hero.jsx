import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const Hero = () => {
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


      <h1 className="hero-heading fw-500 text-gray mb-45">
        Formação completa em <span>terapia</span> tântrica.
      </h1>
      <p className="text-lg text-gray-300 opacity-75 mb-65 lg-mb-50 pe-lg-5">
        Explore novas dimensões de bem-estar e autoconhecimento nesta jornada única rumo à transformação interior.
      </p>

      <div className="d-sm-flex align-items-center">
        <div
          onClick={() => setOpen(true)}
          role="button"
          className="fancybox video-icon tran3s mb-25 d-flex align-items-center order-sm-last"
        >
          <span className="icon d-block">
            <i className="bi bi-play" />
          </span>
          <div className="ps-3">
            <span className="d-block text-gray fs-15 text-uppercase ">Assitir</span>
            <strong className="fs-18 fw-500 text-gray d-block">
              Apresentação
            </strong>
          </div>
        </div>
        {/* End popup video */}

        <Link
          href="#"
          className="btn-three text-gray fw-500 tran3s mb-25 me-4 order-sm-first"
        >
          Entrar em contato
        </Link>
      </div>
      <h2 className="fw-500 text-gray-400 mt-60 lg-mt-30 mb-5">+250 Alunos</h2>
      <p className="fs-20 opacity-50 text-gray-500">
        Avaliação positiva de 100% dos alunos participantes.
      </p>
    </>
  );
};

export default Hero;
