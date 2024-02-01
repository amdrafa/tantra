import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const Counter = () => {
  const { ref, inView } = useInView({
    threshold: 0.62,
    triggerOnce: true,
  });

  const counters = [
    {
      id: 1,
      value: 1,
      text: "Receita gerada por estudantes",
      symbol: "R$",
      suffix: "M+",
      delay: 0,
    },
    {
      id: 2,
      value: 250,
      text: "Alunos formados",
      suffix: "+",
      delay: 0.2,
    },
    {
      id: 3,
      value: 10,
      text: "Países visitados",
      suffix: "+",
      delay: 0.3,
    },
  ];

  return (
    <>
      {counters.map(
        ({ id, value, text, symbol = "", suffix = "", delay = 0 }) => (
          <div
            className="col-md-4 col-sm-6"
            key={id}
            ref={ref}
            data-aos="fadr-up"
            data-aos-delay={delay}
          >
            <div
              className={`counter-block-four text-center mt-40 ${inView ? "animated" : ""
                }`}
              data-aos="fade-up"
            >
              <div className="main-count fw-500">
                {symbol}
                <CountUp
                  end={inView ? value : 0}
                  duration={2}
                  separator=","
                  start={inView ? null : 0}
                />
                {suffix}
              </div>
              <p className="fs-18 m0">{text}</p>
            </div>
            {/* /.counter-block-four */}
          </div>
        )
      )}
    </>
  );
};

export default Counter;
