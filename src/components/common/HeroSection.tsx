

const HeroSection = () => {
  return (
    <div>
      <section className="h-full w-full bg-cover bg-center bg-no-repeat min-h-[700px] flex items-center relative bg-[url(../images/hero-bg.webp)] py-16 px-4  md:p-20">
        <div className="relative z-20">
          <p className="font-bold text-white text-xl sm:text-2xl">
            La Plateforme #1 <br />
            de Collecte de fonds en Côte d’Ivoire
          </p>
          <h1 className="mt-10 text-4xl sm:text-5xl md:text-6xl lg:text-[84px] text-white font-bold leading-[1.2]">
            Construire une <br />
            Communauté Solidaire.
          </h1>

          <div className="btn btn-bg mt-10">Démarrer une cagnotte</div>
        </div>

        <img  src="../images/line-shape.png" className="absolute left-[20%] top-[60%]" />

        <div className="heart-animation">
          <img className="hrt-1" src="../svg/herart-1.svg" alt="Heart" />
          <img className="hrt-2" src="../svg/herart-1.svg" alt="Heart" />
          <img className="hrt-3" src="../svg/herart-1.svg" alt="Heart" />
          <img className="hrt-4" src="../svg/herart-1.svg" alt="Heart" />
          <img className="hrt-5" src="../svg/herart-1.svg" alt="Heart" />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
