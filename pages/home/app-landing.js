import React from "react";
import Seo from "../../components/common/Seo";
import Header from "../../components/home-page/home-7/Header";
import Hero from "../../components/home-page/home-7/Hero";
import Features from "../../components/home-page/home-7/Features";
import Features2 from "../../components/home-page/home-7/Features2";
import WhyChoose from "../../components/home-page/home-7/WhyChoose";
import Features3 from "../../components/home-page/home-7/Features3";
import Testimonial from "../../components/home-page/home-7/Testimonial";
import Faq from "../../components/home-page/home-7/Faq";
import Pricng from "../../components/home-page/home-7/Pricng";
import LogoGroup from "../../components/home-page/home-7/LogoGroup";
import AddressInfo from "../../components/home-page/home-7/AddressInfo";
import Subsribe from "../../components/home-page/home-7/Subsribe";
import Social from "../../components/home-page/home-7/Social";
import Link from "next/link";
import Image from "next/image";

const AppLanding = () => {



  return (
    <>
      <Seo pageTitle="Formação em massagem tântrica" />

      {/* <!-- 
        =============================================
        Theme Default Menu
        ============================================== 	
        --> */}
      <Header />

      {/* 
        =============================================
        Theme Hero Banner
        ============================================== 
        */}
      <div
        className="hero-banner-three position-relative pt-20"
        data-aos="fade-right"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <Hero />
            </div>
          </div>
        </div>
        {/* /.container */}

        <div className="mobile-screen" data-aos="fade-right">
          <div className="row gx-xxl-5 justify-content-center align-items-center">
            <div className="col-6">
              <Image
                width={332}
                height={666}
                src="/images/media/img_13.png"
                alt="media"
                className="lazy-img screen-one"
              />
            </div>

            <div className="col-6">
              <div className="card-one d-flex align-items-center mb-50 xs-mb-20">
                <div className="icon rounded-circle d-none d-sm-flex align-items-center justify-content-center">
                  <i className="bi bi-check-lg" />
                </div>
                <h6 className="fw-500 fs-20 ps-sm-4 m0">
                  Save up to 50% in Yearly plan.
                </h6>
              </div>
              <Image
                width={329}
                height={661}
                src="/images/media/img_14.png"
                alt="media"
                className="lazy-img screen-two"
              />
            </div>
          </div>
        </div>
        {/* /.mobile-screen */}
      </div>

      {/* 
        =============================================
        Feature Section Seven
        ============================================== 
        */}
      <div className="fancy-feature-seven pt-200 lg-pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-5" data-aos="fade-right">
              <div className="title-style-four text-center text-lg-start">
                <h2 className="main-title fw-500 tx-dark m0">
                  Sexualidade <span>Sagrada.</span>
                </h2>
              </div>
              {/* /.title-style-four */}
            </div>
            {/* End .col-6 */}
            <div className="col-lg-6 ms-auto" data-aos="fade-left">
              <p className="text-lg text-center text-lg-start md-pt-30 m0">
                A formação nasceu do propósito e missão Deva Prem de ensinar em profundidade e beleza a verdadeira essência do Tantra como caminho consciencial e como filosofia de vida.
              </p>
            </div>
            {/* End .col-6 */}
          </div>
        </div>
        {/* End .container */}

        <div className="container pt-50 lg-pt-10">
          <div className="row gx-xxl-5">
            <Features />
          </div>
        </div>
        {/* /.container */}
      </div>

      <div className="fancy-feature-ten position-relative mt-170 lg-mt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-8 m-auto">
              <div
                className="title-style-four text-center pb-100"
                data-aos="fade-up"
              >
                <h2 className="main-title fw-500 tx-dark m0">
                  Conheça a criadora do  <span>método</span>
                </h2>
                <p className="mt-30">Deva Prem é mestra em sexualidade sagrada, atendeu muitos anos com a terapia vibracional tântrica, tendo bastante estudo clínico e resultados surpreendentes, onde desenvolveu as particularidades de seu método, e está constantemente expandindo seu conhecimento.</p>
              </div>
              {/* /.title-style-four */}
            </div>
          </div>
          {/* End .row */}

          <Features3 />
          {/* /.wrapper */}
        </div>
      </div>

      {/* 
        =============================================
        Feature Section Eight
        ============================================== 
        */}
      <div className="fancy-feature-eight position-relative mt-225 xl-mt-150 md-mt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-7 ms-auto order-lg-last">
              <Features2 />
              {/* /.block-style-three */}
            </div>
          </div>
        </div>
        {/* /.container */}

        <div className="illustration-holder">
          <img
            src="/images/media/img_15.jpg"
            alt="media"
            className="lazy-img main-img"
          />
          <img
            src="/images/media/img_16.png"
            alt="media"
            className="lazy-img shapes screen-one"
          />
          <img
            src="/images/shape/shape_44.svg"
            alt="media"
            className="lazy-img shapes shape-one"
          />
        </div>
        {/* /.illustration-holder */}
      </div>

      {/* 
        =============================================
        Feature Section Nine
        ============================================== 
        */}
      <div className="fancy-feature-nine position-relative pt-250 lg-pt-130">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="block-style-three" data-data-aos="fade-right">
                <div className="title-style-four">
                  <div className="sc-title">
                    Mais de
                    <span
                      className="text-decoration-underline"
                      style={{ color: "#ff733b" }}
                    >
                      +300 Alunos satisfeitos
                    </span>
                  </div>
                  <h2 className="main-title fw-500 tx-dark m0">
                    Vivências e <span>histórias</span>
                  </h2>
                </div>
                {/* /.title-style-four */}
                <p className="fs-20 pt-45 pe-xxl-5">
                  Apaixonada pela condução de grupos, conduz trabalhos mistos e de sagrado
                  feminino, criadora do despertar das shaktis e está gestando o trabalho de casais
                  e o despertar dos shivas.
                </p>
                <p className="fs-20 pt-45 pe-xxl-5">
                  Esteve na índia por duas vezes estudando vertentes do tantra assim como egito
                  resgatando seu conhecimento iniciático sobre a álquimia da álma. Onde
                  despertou seu legado como sacerdotisa de ísis.
                </p>
                <p className="fs-20 pt-45 pe-xxl-5">
                  A mais recente viagem iniciática foi a Espanha e França onde mergulhou no
                  chamado da Irmandade das Rosas, trazendo os códigos da união sagrada, maria
                  magdalena e yeshua, a união alquímica crística como essência de seu trabalho.
                </p>
              </div>
              {/* /.block-style-three */}
            </div>
            <div
              className="col-lg-7 col-md-9 m-auto text-center text-lg-right"
              data-data-aos="fade-left"
            >
              <WhyChoose />
              {/* /.screen-container */}
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>

      {/* 
        =============================================
        Feature Section Ten
        ============================================== 
        */}


      {/*
        =====================================================
        Feedback Section Three
        =====================================================
        */}
      <div
        className="feedback-section-three position-relative mt-225 lg-mt-120 pb-100"
        data-data-aos="fade-up"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6 ms-auto">
              <div className="title-style-four text-center text-lg-start pb-100 lg-pb-30">
                <div className="sc-title-two" style={{ color: "#ff733b" }}>
                  Depoimentos
                </div>
                <h2 className="main-title fw-500 tx-dark m0">
                  Alguns dos nossos casos de  <span>sucesso.</span>
                </h2>
              </div>
              {/* /.title-style-four */}
            </div>
          </div>
          <div className="slider-wrapper">
            <div className="feedback_slider_three">
              <Testimonial />
            </div>
          </div>
          {/* /.slider-wrapper */}
        </div>
        {/* End .contaier */}

        {/* <div className="shape-holder">
          <img
            src="/images/shape/shape_48.svg"
            alt="shape"
            className="lazy-img"
          />
          <img
            src="/images/media/img_22.jpg"
            alt="media"
            className="lazy-img shapes rounded-circle avatar-one"
            style={{ width: "50px", height: "50px" }}
          />
          <img
            src="/images/media/img_23.jpg"
            alt="media"
            className="lazy-img shapes rounded-circle avatar-two"
            style={{ width: "80px", height: "80px" }}
          />
          <img
            src="/images/media/img_24.jpg"
            alt="media"
            className="lazy-img shapes rounded-circle avatar-three"
            style={{ width: "60px", height: "60px" }}
          />
          <img
            src="/images/media/img_25.jpg"
            alt="media"
            className="lazy-img shapes rounded-circle avatar-four"
            style={{ width: "80px", height: "80px" }}
          />
        </div> */}
      </div>

      {/* 
        =============================================
        Feature Section Eleven
        ============================================== 
        */}
      <div className="fancy-feature-eleven position-relative mt-200 lg-mt-120 md-mt-10">
        <div className="container">
          <div className="row align-items-start align-items-xl-center">
            <div className="col-xl-5 col-lg-6" data-aos="fade-right">
              <div className="title-style-four">
                <div className="sc-title-two" style={{ color: "#ff733b" }}>
                  Perguntas e respostas
                </div>
                <h2 className="main-title fw-500 tx-dark m0">
                  Ficou com alguma dúvida? <span>Procure</span> aqui.
                </h2>
              </div>
              {/* /.title-style-four */}
              <div
                className="fs-15 fw-500 pt-70 pb-5 lg-pt-40"
                style={{ color: "#ff733b" }}
              >
                Não achou?
              </div>
              <p className="text-lg mb-45">
                Me manda uma mensagem que te respondo melhor!
              </p>
              <Link href="/contact" className="btn-seven">
                Falar comigo agora
              </Link>
            </div>
            <div className="col-lg-6 ms-auto" data-aos="fade-left">
              <Faq />
            </div>
          </div>
        </div>
        {/* /.container */}

        <img
          src="/images/shape/shape_49.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
        <img
          src="/images/shape/shape_50.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
        <img
          src="/images/shape/shape_51.svg"
          alt="shape"
          className="lazy-img shapes shape-three"
        />
      </div>

      {/*
        =====================================================
        Pricing Section Two
        =====================================================
        */}


      {/* 
        =============================================
        Partner Section Two
        ============================================== 
        */}
      <div className="partner-section-two position-relative mt-225 mb-250 md-mt-120 md-mb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6" data-data-aos="fade-right">
              <div className="title-style-four">
                <div className="sc-title-two" style={{ color: "#6A45FF" }}>
                  Our Partners
                </div>
                <h2 className="main-title fw-500 tx-dark m0">
                  Our Trusted Partners.
                </h2>
              </div>
              {/* /.title-style-four */}
              <p className="fs-20 pt-30 pe-xxl-5">
                Lorem ipsum dolor on adipisci elit sed do eiusmod tempor dolo
                mag dsu aliqua eni ad minim lut emit.
              </p>
            </div>
          </div>
        </div>
        {/* /.container */}

        <div className="logo-wrapper d-flex flex-wrap justify-content-center align-items-center">
          <LogoGroup />
        </div>
        <img
          src="/images/shape/shape_49.svg"
          alt="logo"
          className="lazy-img shapes shape-one"
        />
        <img
          src="/images/shape/shape_50.svg"
          alt="logo"
          className="lazy-img shapes shape-two"
        />
        <img
          src="/images/shape/shape_51.svg"
          alt="logo"
          className="lazy-img shapes shape-three"
        />
      </div>

      {/*
        =====================================================
        Fancy Short Banner Four
        =====================================================
        */}
      <div className="fancy-short-banner-four position-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 m-auto">
              <div className="row gx-xxl-5">
                <AddressInfo />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*
        =====================================================
        Footer
        =====================================================
        */}
      <div className="footer-style-three position-relative">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-9 col-md-9 m-auto text-center">
              <div className="title-style-four" data-aos="fade-up">
                <h2 className="main-title fw-500 text-white m0">
                  Ready to use our App? It’s just a matter of
                  <span>one Click</span>
                </h2>
              </div>
              {/* /.title-style-four */}
              <p
                className="text-lg text-white mt-35 mb-70 lg-mt-30 lg-mb-50"
                data-data-aos="fade-up"
              >
                Try it risk free — we don’t charge cancellation fees.
              </p>
              <Subsribe />
              {/* /.subscribe-form */}
            </div>
          </div>
        </div>
        {/* End .container */}

        <div className="bottom-footer mt-80 lg-mt-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="logo d-flex justify-content-center justify-content-lg-start">
                  <Link href="/">
                    <img src="/images/logo/logo_03.png" alt="" width={77} />
                  </Link>
                </div>
              </div>
              {/* End .col-lg-4 */}

              <div className="col-lg-4 text-center md-mt-30 md-mb-30">
                <h4 className="text-white">Find us on social media</h4>
                <Social />
              </div>
              {/* End .col-lg-4 */}

              <div className="col-lg-4 text-center">
                <h4 className="text-white">We’r always happy to help.</h4>
                <a href="mailto:ask@januinc.com" className="mail">
                  ask@januinc.com
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* End button-footer */}

        <img
          src="/images/assets/ils_01.svg"
          alt="illustration"
          className="lazy-img bg-illustration w-100 shapes"
        />
      </div>
    </>
  );
};

export default AppLanding;
