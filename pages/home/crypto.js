import Link from "next/link";
import Seo from "../../components/common/Seo";
import Header from "../../components/home-page/home-8/Header";
import Hero from "../../components/home-page/home-8/Hero";
import ShapeGroup from "../../components/home-page/home-8/ShapeGroup";
import Block1 from "../../components/home-page/home-8/Block1";
import Block2 from "../../components/home-page/home-8/Block2";
import Block2FeatureList from "../../components/home-page/home-8/Block2FeatureList";
import Block3 from "../../components/home-page/home-8/Block3";
import Why2ChooseList from "../../components/home-page/home-8/Why2ChooseList";
import WhyChooseList from "../../components/home-page/home-8/WhyChooseList";
import Coutner from "../../components/home-page/home-8/Coutner";
import Testimonial from "../../components/home-page/home-1/Testimonial";
import Faq from "../../components/home-page/home-8/Faq";
import Blog from "../../components/home-page/home-8/Blog";
import CallToAction from "../../components/home-page/home-8/CallToAction";
import CopyrightFooter2 from "../../components/footer/CopyrightFooter2";
import Footer from "../../components/home-page/home-8/Footer";
import Image from "next/image";

const crypto = () => {
  return (
    <div className="pattern-bg-one">
      <ShapeGroup />

      <Seo pageTitle="Crypto" />

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
        className="hero-banner-eight "
        data-aos="fade-right"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <Hero />
            </div>
          </div>
        </div>
        {/* /.container */}

        <div className="illustration-holder" data-aos="fade-right">
          <Image
            width={600}
            height={764}
            layout="intrinsic"
            src="/images/media/devapremreal.png"
            alt="illustration"
            className=" lazy-img"
          />

        </div>
        {/* /.illustration-holder */}
        {/* <img
          src="/images/shape/shape_100.svg"
          alt="shape"
          className="lazy-img shapes line-shape"
        /> */}
      </div>

      {/* 
        =============================================
        Feature Section Twenty Six
        ============================================== 
        */}
      <div className="fancy-feature-twentySix position-relative zn2 pt-150 lg-pt-80">
        {/* <div className="wrapper-xl m-auto" data-aos="fade-up">
          <div className="bg mb-200 lg-mb-80">
            <div className="row gx-0">
              <Block1 />
            </div>
          </div>
        </div> */}
        {/* /.wrapper-xl */}

        <div className="container">
          <div
            className="title-style-nine text-center mb-60 lg-mb-30"
            data-aos="fade-up"
          >
            <h2 className="main-title text-gray">
              Sexualidade <span>Sagrada</span>
            </h2>
            <p className="text-gray-400 opacity-50 fs-20 pt-15">
              A formação nasceu do propósito e missão Deva Prem de ensinar em profundidade e beleza a verdadeira essência do Tantra como caminho consciencial e como filosofia de vida.
            </p>
          </div>
          {/* /.title-style-nine */}

          <div className="row gx-xxl-5">
            <Block2 />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
        {/* <div className="shapes shape-one rounded-circle" />
        <div className="shapes shape-two rounded-circle" /> */}
      </div>

      {/* 
        =============================================
        Feature Section Twenty Seven
        ============================================== 
        */}
      <div className="fancy-feature-twentySeven position-relative zn2 mt-250 lg-mt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 ms-auto order-lg-last">
              <Block2FeatureList />
              {/* /.block-style-three */}
            </div>
            <div
              className="col-lg-6 col-md-8 m-auto order-lg-first"
              data-aos="fade-right"
            >
              <div className="illustration-holder md-mt-50 pe-xxl-1 pe-xl-5 pe-lg-4">
                <Image
                  width={569}
                  height={559}
                  layout="intrinsic"
                  src="/images/media/devaAI-01.jpg"
                  alt="illustration"
                  className="lazy-img main-img m-auto"
                />
              </div>
              {/* /.illustration-holder */}
            </div>
          </div>
        </div>
        {/* /.container */}


        {/* <div className="r-shape-one shapes" /> */}
      </div>

      {/* 
        =============================================
        Feature Section Twenty Eight
        ============================================== 
        */}
      <div className="fancy-feature-twentyEight position-relative zn2  margin-top-10">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <Why2ChooseList />
              {/* /.block-style-five */}
            </div>
            <div className="col-lg-6 col-md-8 m-auto" data-aos="fade-left">
              <div className="illustration-holder md-mt-50 position-relative">
                <img
                  src="/images/shape/shape_106.svg"
                  alt="shape"
                  className="lazy-img main-img"
                />
                <Image
                  width={766}
                  height={766}
                  layout="intrinsic"
                  src="/images/media/devaAI-02.jpg"
                  alt="shape"
                  className="lazy-img illustration-img"
                />
              </div>
              {/* /.illustration-holder */}
            </div>
          </div>
        </div>
        {/* /.container */}

        <div className="container margin-top-10">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <WhyChooseList />
              {/* /.block-style-five */}
            </div>
            <div className="col-lg-6 col-md-8 m-auto" data-aos="fade-left">
              <div className="illustration-holder md-mt-50 position-relative">
                <img
                  src="/images/shape/shape_106.svg"
                  alt="shape"
                  className="lazy-img main-img"
                />
                <Image
                  width={766}
                  height={766}
                  layout="intrinsic"
                  src="/images/media/devaAI-03.jpg"
                  alt="shape"
                  className="lazy-img illustration-img"
                />
              </div>
              {/* /.illustration-holder */}
            </div>
          </div>
        </div>



        <div className="wrapper mt-110 lg-mt-60">
          <div className="container">
            <div className="row justify-content-center">
              <Coutner />
            </div>
          </div>
        </div>
        {/* /.wrapper */}
      </div>

      <div className="container">
        <div className="wrapper mt-130 lg-mt-100" data-aos="fade-up">
          <div className="row">
            <Block3 />
          </div>
        </div>
        {/* /.wrapper */}
      </div>

      {/*
        =====================================================
        Feedback Section Seven
        =====================================================
        */}
      <div className="inner-content">
        <div className="feedback_slider_seven">
          <Testimonial />
        </div>

        {/* /.slider-wrapper */}
      </div>

      {/* 
        =============================================
        Feature Section Twenty Nine
        ============================================== 
        */}
      {/* <div className="fancy-feature-twentyNine position-relative zn2 mt-180 pb-180 lg-mt-110 lg-pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-5" data-aos="fade-right">
              <div className="title-style-nine">
                <h2 className="main-title text-white">
                  Any <span>Questions?</span> Find here.
                </h2>
              </div>
             
              <p className="text-white opacity-75 fs-18 mb-40 mt-30 pe-xxl-5">
                Don’t find your answer here? just send us a message for any
                query.
              </p>
              <Link href="/contact" className="btn-seventeen fw-500 tran3s">
                Contact us
              </Link>
            </div>
           
            <div className="col-xxl-6 col-lg-7 ms-auto" data-aos="fade-left">
              <Faq />
            </div>
           
          </div>
        </div>
        
        <div className="shapes shape-one rounded-circle" />
      </div> */}

      {/*
        =====================================================
        Blog Section Four
        =====================================================
        */}
      {/* <div className="blog-section-four position-relative">
        <div className="container">
          <div
            className="title-style-nine text-center mb-40 lg-mb-20"
            data-aos="fade-up"
          >
            <h2 className="main-title text-white">
              Inside <span>Story</span>
            </h2>
          </div>
        
          <div className="row gx-xxl-5">
            <Blog />
          </div>
         

          <div className="text-center mt-65 md-mt-30" data-aos="fade-up">
            <div className="d-inline-block zn2 fs-20 text-white position-relative learn-more-btn">
              Want learn more?
              <Link href="/blog/blog-v2" className="fw-500">
                Go to blog
              </Link>
            </div>
          </div>
        </div>
      </div> */}

      {/*
			=====================================================
				Fancy Short Banner Eleven
			=====================================================
			*/}
      <div className="fancy-short-banner-eleven position-relative zn2 pt-130 pb-170 lg-pb-130">
        <div className="container">
          <div className="row">
            <CallToAction />
          </div>
        </div>

      </div>

      {/*
			=====================================================
				Footer
			=====================================================
			*/}
      {/* <div className="footer-style-eight theme-basic-footer">
        <div className="top-footer zn2 position-relative">
          <img
            src="/images/shape/shape_107.svg"
            alt="shape"
            className="lazy-img shapes shape-one"
          />
          <div className="container">
            <div className="inner-wrapper m-auto">
              <div className="row">
                <Footer />
              </div>
            </div>
           
          </div>
        </div>
      
        <CopyrightFooter2 />
      
      </div> */}
    </div>
    // main-page-wrapper
  );
};

export default crypto;
