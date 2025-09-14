import AboutSection from "../components/common/AboutSection";
import CampaignSlide from "../components/common/CampaignSlide";
import Card from "../components/common/Card";
import CollectionCards from "../components/common/ColllectionCards";
import Dropdown from "../components/common/Dropdown";
import FAQSection from "../components/common/FAQs";
import HeroSection from "../components/common/HeroSection";
import Navbar from "../components/common/Navbar";
import TopBanner from "../components/common/TopBanner";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const cards = [
  {
    title: "Santé",
    description: "Lorem ipsum dolor sit amet, consecteur adipscing",
    image: "../images/img-1.webp",
    current: 125000,
    goal: 200000,
    category: "Santé",
  },
  {
    title: "Mariage",
    description: "Lorem ipsum dolor sit amet, consecteur adipscing",
    image: "../images/img-2.webp",
    current: 45000,
    goal: 300000,
    category: "Mariage",
  },

  {
    title: "Religion",
    description: "Lorem ipsum dolor sit amet, consecteur adipscing",
    image: "../images/img-3.webp",
    current: 86900,
    goal: 200000,
    category: "Religion",
  },
];

// Dropdown

const handleSelect = (item: string) => {
  console.log("Selected:", item);
};

const Homepage = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      <TopBanner />
      <Navbar />

      {/* Hero Section */}

      <HeroSection />

      {/* Discover Section */}

      <section className="bg-[#fafafa] rounded-[50px] relative -top-8 px-4 md:px-20 py-14">
        <div className="head-title flex items-center gap-4">
          <div className="icon">
            <img src="../svg/icon-charity.svg" alt="Icon" />
          </div>
          <h1 className="font-bold text-3xl text-black">
            Découvrez les cagnottes en lien avec vos centres d’intérêt
          </h1>
        </div>

        <div className="header mt-8 flex items-center justify-between">
          <Dropdown
            label="Campagnes urgentes"
            items={["Urgent Aid", "Medical Help", "Disaster Relief"]}
            onSelect={handleSelect}
          />
          <div className="flex items-center gap-2">
            <div className="prev arrow h-10 w-10 rounded-full bg-white text-black text-2xl flex items-center justify-center cursor-pointer border border-gray-30">
              <i className="ri-arrow-left-s-line"></i>
            </div>
            <div className="next h-10 w-10 rounded-full text-black text-2xl flex items-center justify-center cursor-pointer border border-gray-30 bg-gray-30">
              <i className="ri-arrow-right-s-line"></i>
            </div>
          </div>
        </div>

        {/* Cards Wrap */}
        <div className="mt-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 md:px-5 xl:px-20 gap-10 justify-center">
            {cards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/*  */}

      <section className="w-full min-h-[260px] bg-black bg-[url(../images/gray-mask.png)] bg-cover bg-no-repeat text-center text-white flex flex-col items-center justify-center p-4 md:px-20">
        <p className="font-semibold text-2xl sm:text-3xl md:text-[40px] leading-[1.3] max-w-[1080px] mx-auto ">
          Ne négligez pas de pratiquer la bienfaisance et l’entraide : voilà les
          sacrifices auxquels Dieu prend plaisir.
        </p>

        <p className="sm:text-xl mt-8 font-semibold">Hébreux :13-16</p>
      </section>

      {/*  */}

      <section className="px-4 md:px-20 py-20 md:pt-36 md:ps-30">
        <div className="heart-animation">
          <img className="hrt-1" src="../svg/herart-1.svg" alt="Heart" />
          <img className="hrt-2" src="../svg/herart-1.svg" alt="Heart" />
          <img className="hrt-3" src="../svg/herart-1.svg" alt="Heart" />
          <img className="hrt-4" src="../svg/herart-1.svg" alt="Heart" />
          <img className="hrt-5" src="../svg/herart-1.svg" alt="Heart" />
        </div>

        <div className="flex md:flex-row flex-col items-center gap-20">
          <div className="md:w-[40%]">
            <div className="text-2xl font-semibold flex items-center gap-2 text-secondary">
              <span className="w-15 h-1 bg-black flex"></span>À la une
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold text-black leading-[1.3] mt-4">
              financez la scolarisation <br />
              des orphelins
            </h1>
            <p className="text-lg sm:text-xl mt-10 text-black leading-[1.5]">
              Conseils essentiels pour lancer une campagne de financement en
              faveur de l’éducation des orphelins
            </p>

            <div className="btn mt-10">
              En savoir plus <i className="ri-arrow-right-double-fill"></i>
            </div>
          </div>
         <div className="relative flex justify-center md:w-[55%]">
           <div className="relative z-10">
            <img className="w-[75%] mx-auto sm:w-full" src="../images/finacne.webp" alt="Finacne" />
          </div>
          <div className="h-40 w-40 sm:h-[228px] sm:w-[228px] bg-[#BE4248] rounded-full absolute -right-2 -top-10 sm:-right-20 md:right-10 sm:-top-20 md:-top-20"></div>
         </div>
        </div>
      </section>

      
      {/* Campaign */}

      <CampaignSlide />



      {/* About Section */}
      <AboutSection />


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
              La collecte de fonds sur AidNov
              <sup className="text-sm relative -top-2.5 font-extrabold">
                TM
              </sup>{" "}
              est conviviale, efficace et sécurisée.
            </h2>
            <div className="flex mt-5">
              <div className="h-1 w-16 bg-secondary"></div>
            </div>
            <p className="mt-5 text-lg font-semibold leading-[1.4]">
              AidNov
              <sup className="text-sm relative -top-2.5 font-extrabold">
                TM
              </sup>{" "}
              vous offre tous les outils pour réussir votre cagnotte et réunir
              les fonds nécessaires pour vous-même, vos amis, votre famille ou
              votre association. Avec ses cagnottes sans frais de lancement pour
              les organisateurs, AidNov
              <sup className="text-sm relative -top-2.5 font-extrabold">
                TM
              </sup>{" "}
              s’impose comme la référence en matière de :
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
