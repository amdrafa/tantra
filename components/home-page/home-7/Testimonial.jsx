import React from "react";
import Slider from "react-slick";

const items = [
  {
    name: "Fer Frujuelle",
    location: "Itajaí, Santa Catarina",
    image: "/images/media/img_18.jpg",
    rating: 5,
    feedback:
      "Sou Fer Frujuelle, terapeuta Integrativa, e compartilho meu depoimento sobre o tantra. Com cinco anos de experiência, sempre explorei o mundo sutil. Ao sentir o chamado para mergulhar na realidade material, percebi a importância de entender a máquina que nossa alma habita. A magia do tantra se revelou como uma terapia transformadora, guiada por Deva (Sabrina) e sua equipe. Seu método conecta-se ao sacerdócio da alma e à união divina, abrindo portais que revelam códigos essenciais. Confesso que o tantra não era meu chamado inicialmente, até cruzar o caminho de Deva. Meu convite a você é simples: abra seu coração e ouça a voz da sua alma.",
  },
  {
    name: "Nayana Prem",
    location: "Itajaí - Santa Catarina",
    image: "/images/media/img_19.jpg",
    rating: 5,
    feedback:
      "O curso foi uma transformação profunda em minha vida. Após 31 anos de prisão emocional, encontrei liberdade nos módulos, liberando amarras, julgamentos e culpas. Compreendi que minha energia vital estava obstruída, afetando meu corpo e mente. O tantra trouxe amor verdadeiro, preenchendo meu ser e reverberando em relacionamentos e na vida. Despertei para o prazer de viver, alcançando prosperidade e abundância. Recomendo a todos essa experiência transformadora.",
  },
  {
    name: "Niyati Prem",
    location: "Balneário Camburiú - Santa Catarina",
    image: "/images/media/img_20.jpg",
    rating: 5,
    feedback:
      "Minha jornada no Curso de Formação Terapêutica em Tantra foi um chamado magnético para o Caminho Sagrado. Como buscadora do desenvolvimento humano, encontrei no curso um despertar incrível para a conexão divina do corpo e expansão da consciência. Deva Prem conduziu a jornada com sabedoria e delicadeza, incorporando ferramentas transformadoras. A energia da Irmandade das Rosas e a união do Feminino e Masculino trouxeram luz à alquimia espiritual. Gratidão pela transformação e descobertas. Viva o prazer da vida!",
  },
  {
    name: "Gahan Prem",
    location: "Balneário Camburiú - Santa Catarina",
    image: "/images/media/img_20.jpg",
    rating: 5,
    feedback:
      "No início, repleto de expectativas e bloqueios, confesso um pouco de ceticismo. Desde os primeiros momentos do curso, percebi que estava embarcando em uma jornada profundamente enriquecedora. A abordagem cuidadosa introduziu os conceitos e práticas do tantra de maneira respeitosa. Cada sessão foi uma descoberta, revelando o poder da energia tantra e novas camadas de minha própria consciência. A orientação da Sabrina e do grupo foi fundamental, proporcionando um espaço seguro para explorar essa prática antiga com olhos novos.",
  },
  {
    name: "Valéria ferreira",
    location: "Balneário Camburiú - Santa Catarina",
    image: "/images/media/img_20.jpg",
    rating: 5,
    feedback:
      "Ao passar por essa jornada iniciática profunda, imaginei como seria se todos os seres tivessem a oportunidade de experimentar as curas que o tantra pode trazer... A condução certeira da Deva Prem torna a recomendação para qualquer um uma escolha fácil. Iniciar no caminho do Tantra é adentrar o portal do amor ao nosso corpo físico, tê-lo como companheiro de vida e não mais fonte de bloqueios e dor. Que mais e mais seres se permitam e se atrevam, pois o mundo fica um lugar mais lindo à medida que cada um acende sua luz.",
  },
  {
    name: "Rani Prem",
    location: "Balneário Camburiú - Santa Catarina",
    image: "/images/media/img_20.jpg",
    rating: 5,
    feedback:
      "Adentrar ao Tântra me trouxe a conexão com meu ser, me permitiu me reconhecer novamente me libertando de padrões de sofrimento, me trouxe o domínio sobre meus extintos, me colocou para olhar cada sombra que eu alimentava e que me impediam de viver uma vida leve. Na piscicossomatica pude compreender o porquê de cada couraça, pude voltar a me expressar, pude voltar me sentir.Estava aprisionada em um corpo rígido e cheio de memórias de dor abusos e traumas, permitidos por mim por que reconhecia o meu valor. Foi uma experiência dolorosa mas de grande cura pois compreendi que eu não precisava mais ser forte o tempo todo e estava tudo bem me sentir frágil (...)",
  },
  {
    name: "Maurina",
    location: "Balneário Camburiú - Santa Catarina",
    image: "/images/media/img_20.jpg",
    rating: 5,
    feedback:
      "Todas as técnicas vivência dos no curso  e através da Massagem Tântrica, me trouxeram uma conexão com meu próprio corpo, me fizeram sentir mais presente para realizar minhas atividades do dia a dia, trouxeram uma consciência de expansão de prazeres que eu jamais sonharia. Me devolveu a autoestima, autoamor e me  despertou em todos os sentidos, e de uma  forma incrível ativando todos os meus canais energéticos, me proporcionando também curas nunca por mim imagináveis.Desmistificar, aceitar e curar minhas  feridas emocionais e espirtuais através do Tantra foi como se me entregassechave do meu corpo. Livrar-me das crenças limitantes e de meus traumas me deram uma nova perspectiva sobre o meu prazea minha sexualidade!!",
  },
  {
    name: "Atharva Prem",
    location: "Balneário Camburiú - Santa Catarina",
    image: "/images/media/img_20.jpg",
    rating: 5,
    feedback:
      "Através do Tantra me permiti estar em um lugar de acolhimento e respeito comigo mesmo. Aceitei ser livre e me encorajei a superar limites, com calma , auto responsabilidade e amor. Meus desafios pessoais se tornaram mais leves porque hoje experimento prazer em cada etapa do processo. A condução da Deva Prem é envolvente e nos leva a um retorno às origens, ao ventre materno. Um trabalho de renascimento e reconstrução do ser. Cada encontro é um salto quântico de integração do nosso corpo físico, emocional e espiritual que nos remete a um estado de êxtase completo. Um sentimento de orgulho de ser exatamente como sou! Sem culpas.",
  },
];

const FeedbackSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <div key={index} className="item">
          <div className="feedback-block-three">
            <ul className="style-none d-flex rating">
              {[...Array(item.rating)].map((_, index) => (
                <li key={index}>
                  <i className="bi bi-star-fill" />
                </li>
              ))}
            </ul>
            <p>{item.feedback}</p>
            <div className="d-flex align-items-center">
              {/* <img
                src={item.image}
                alt="media"
                className="avatar rounded-circle"
              /> */}
              <h6 className="name fs-20 fw-500 m0 ps-4">
                {item.name}{" "}
                <span className="d-block fw-normal">{item.location}</span>
              </h6>
              <img
                src="/images/icon/icon_35.svg"
                alt="media"
                className="ms-auto"
              />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default FeedbackSlider;
