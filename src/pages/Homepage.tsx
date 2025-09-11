import CollectionCards from "../components/common/ColllectionCards";
import FAQSection from "../components/common/FAQs";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Homepage = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Collection Section */}

      <CollectionCards />

      {/* <!-- Fundraising --> */}

      <section className="bg-black relative text-white overflow-hidden py-12 md:py-20 pb-20 lg:pb-30 px-4 md:px-20 lg:px-24 xl:px-30 2xl:px-40">
        <img
          src="../images/vc.webp"
          alt=""
          className="h-full w-full absolute top-0 left-[40%] opacity-20"
        />

        <div className="flex lg:flex-row flex-col justify-between z-20 relative">
          <div className="relative">
            <div className="heart-animation absolute !top-[70%] !left-[50%]">
              <img className="hrt-1" src="../svg/herart-1.svg" alt="Heart" />
              <img className="hrt-2" src="../svg/herart-1.svg" alt="Heart" />
              <img className="hrt-3" src="../svg/herart-1.svg" alt="Heart" />
              <img className="hrt-4" src="../svg/herart-1.svg" alt="Heart" />
              <img className="hrt-5" src="../svg/herart-1.svg" alt="Heart" />
            </div>
            <img
              src="../svg/icon-solidarity.svg"
              alt=""
              className="md:w-auto w-[60px] absolute left-4 top-4 lg:-left-12 md:top-12"
            />
            <div className="rounded-2xl overflow-hidden h-[380px] sm:h-[500px] w-full">
              <img
                className="h-full w-full object-cover"
                src="../images/fundraising-1.webp"
                alt="Fundraising"
              />
            </div>
            <div className="absolute w-[170px] md:w-auto lg:-right-[18%] right-[10%] -bottom-[10%] lg:bottom-[0%]">
              <img src="../images/fundraising-2.webp" alt="Fundraising" />
            </div>
          </div>
          <div className="lg:w-[45%] lg:mt-0 mt-20">
            <h2 className="text-3xl font-bold">
              La collecte de fonds sur AidNov<sup className="text-xs">TM</sup>{" "}
              est conviviale, efficace et sécurisée.
            </h2>
            <div className="flex mt-5">
              <div className="h-1 w-16 bg-secondary"></div>
            </div>
            <p className="mt-5 text-lg font-semibold leading-[1.4]">
              AidNov<sup>TM</sup> vous offre tous les outils pour réussir votre
              cagnotte et réunir les fonds nécessaires pour vous-même, vos amis,
              votre famille ou votre association. Avec ses cagnottes sans frais
              de lancement pour les organisateurs, AidNov
              <sup>TM</sup> s’impose comme la référence en matière de :
            </p>

            <div className=" grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">
              <div className="flex flex-col gap-1.5 items-center justify-center text-center">
                <img
                  className="h-15"
                  src="../images/Crowdfunding-icon.png"
                  alt=""
                />
                <div className="font-semibold">Financement participatif</div>
              </div>

              <div className="flex flex-col gap-1.5 items-center justify-center text-center">
                <img
                  className="h-15"
                  src="../images/Commemorations-icon.png"
                  alt=""
                />
                <div className="font-semibold">
                  Commémorations (hommages/obsèques)
                </div>
              </div>

              <div className="flex flex-col gap-1.5 items-center justify-center text-center">
                <img className="h-15" src="../images/Health-icon.png" alt="" />
                <div className="font-semibold">
                  Santé <br />
                  (urgences)
                </div>
              </div>
              <div className="flex flex-col gap-1.5 items-center justify-center text-center">
                <img
                  className="h-15"
                  src="../images/Associations-icon.png"
                  alt=""
                />
                <div className="font-semibold">
                  Associations à but non lucratif
                </div>
              </div>
            </div>

            <div className=" mt-16">
              <div className="flex justify-end items-center gap-3">
                <img src="../svg/shape.svg" alt="Shape" />
                <button>
                  <img src="../svg/question.svg" alt="Question" />
                </button>
              </div>
              <p className="mt-3 font-semibold text-lg">
                Vous pouvez poser vos questions ici à tout moment
              </p>
              <p className="mt-3 font-semibold text-lg">
                En savoir + sur{" "}
                <span className="underline">
                  la façon dont AidNov fonctionne.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}

      <FAQSection />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;
