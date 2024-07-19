import AlefRodrigues from "../../../assets/AlefRodrigues_Hero.png";
import { heroConfig } from "../../../config/sections/hero";
import { HashLink } from "react-router-hash-link";

export default function HeroSection() {
  return (
    <section className="container-fluid p-0 overflow-hidden">
      <div className="w-100 hero position-relative">
        <div className="position-absolute top-0 z-2 w-100 h-25">
          <div className="hero-gradient-top position-relative" />
        </div>
        <div className="position-absolute w-100 h-100 z-0 opacity-75">
          <div className="hero-gradient-left position-relative" />
        </div>
        <div className="position-absolute w-100 h-100 z-0 opacity-75">
          <div className="hero-gradient-right position-relative" />
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center p-3 p-sm-4 px-lg-6 px-xl-10">
          <div className="d-flex flex-column gap-4 z-3">
            <h1>
              {heroConfig.title}
              <span className="highlight">{heroConfig.highlight}</span>
              {heroConfig.title_2}
              <span className="highlight">{heroConfig.highlight_2}</span>
              {heroConfig.title_3}
              <span className="highlight">{heroConfig.highlight_3}</span>
              {heroConfig.title_4}
              <span className="highlight_underline">
                {heroConfig.highlight_4}
              </span>
              {heroConfig.title_5}
              <span className="highlight">{heroConfig.highlight_5}</span>
            </h1>
            <p>{heroConfig.description}</p>
            <HashLink
              smooth
              to={heroConfig.button.link}
              aria-current="page"
            >
              <button className="btn btn-id-alef-red-200 px-4 mw-100 btn-consulta animate__animated animate__pulse animate__infinite">
                <span className="d-flex gap-2 justify-content-center text-decoration-none text-white text-uppercase">
                  {heroConfig.button.title}

                  <i
                    className={`text-white bi ${heroConfig.button.icon}`}
                    style={{
                      fontSize: "1rem",
                      WebkitTextStroke: "0.65px",
                    }}
                  />
                </span>
              </button>
            </HashLink>
          </div>
          <img
            src={AlefRodrigues}
            alt="Foto do Nutricionista Alef Rodrigues"
            className="w-100 w-md-66 w-xl-50 z-2 align-self-end"
          />
        </div>
        <div className="position-absolute bottom-0 z-2 w-100 h-25">
          <div className="hero-gradient-bottom position-relative" />
        </div>
        <div className="position-absolute gradient-radial-2">
          <div className="position-relative gradient-radial" />
        </div>
      </div>
    </section>
  );
}
