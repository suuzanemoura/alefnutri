import AlefRodrigues from "../../../assets/AlefRodrigues_Hero.png";

export default function HeroSection() {
  return (
    <section className="container-fluid p-0  overflow-hidden">
      <div className="w-100 hero">
        <div className="position-absolute top-0 z-1 w-100 h-25">
          <div className="hero-gradient-top position-relative  overflow-hidden" />
        </div>
        <div className="position-absolute w-100 h-100 z-0 opacity-75">
          <div className="hero-gradient-left position-relative" />
        </div>

        <div className="hero-content p-3 p-sm-4 px-lg-6 px-xl-10">
          <div className="d-flex flex-column gap-4 z-3">
            <h1>
              CONQUISTE O CORPO DOS SONHOS, RECUPERE SUA AUTOESTIMA, SUA
              CONFIANÇA E TRANSFORME SUA SAÚDE!
            </h1>
            <p>
              Essa é a sua chance de fazer parte de um acompanhamento completo,
              que já provou para + de 500 clientes que é possível conquistar o
              físico dos sonhos, sem abrir mão dos seus gostos, com saúde e
              qualidade de vida.
            </p>
            <button className="btn btn-id-alef-red-100 text-white px-4  w-50">
              AGENDAR A SUA CONSULTA!
            </button>
          </div>
          <img
            src={AlefRodrigues}
            alt="Foto do Nutricionista Alef Rodrigues"
            className="z-2"
          />
        </div>
        <div className="position-absolute w-100 h-100 z-0 opacity-75">
          <div className="hero-gradient-right position-relative" />
        </div>
        <div className="position-absolute bottom-0 z-2 w-100 h-25">
          <div className="hero-gradient-bottom position-relative" />
        </div>
      </div>
    </section>
  );
}
