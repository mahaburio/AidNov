import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";


const CampaignSlide = () => {
  return (
    <div>
      <section className="campaign-section px-5 md:px-20 py-20">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          // autoplay
          loop={true}
        >
          {/* Slider 1 */}
          <SwiperSlide className="!py-20 !pb-10">
            <div className="p-10 px-5 md:p-16 rounded-[50px] bg-black flex items-center justify-between relative md:pr-0 md:h-[500px] text-white md:flex-row flex-col gap-y-20">
              <div className="md:max-w-[40%]">
                <h1 className="text-2xl sm:text-3xl font-bold leading-[1.3]">
                  Démarrez votre cagnotte et réalisez vos rêves solidaires.
                </h1>
                <div className="mt-7 w-14 h-1 bg-[#f2b809]"></div>
                <p className="mt-10 text-lg md:text-xl leading-[1.3]">
                  Financez vos projets en toute simplicité avec l’application
                  AidNov<sup>™</sup>. Créez votre campagne en 2 minutes,
                  mobilisez votre communauté et suivez chaque don en temps réel,
                  100 % local en Côte d’Ivoire.
                </p>
                <div className="flex items-center mt-10 gap-3 md:gap-5 ">
                  <button className="cursor-pointer">
                    <img
                      className="w-[180px] h-full object-cover"
                      src="../svg/appstore-2.svg"
                      alt="Appstore"
                    />
                  </button>
                  <button className="cursor-pointer">
                    <img
                      className="w-[180px] h-full object-cover"
                      src="../svg/playstore.svg"
                      alt="Playstore"
                    />
                  </button>
                </div>
              </div>
              <div className="img md:h-[600px] md:w-[600px] relative z-20">
                <img
                  className="h-full w-full"
                  src="../images/mobiles.webp"
                  alt="Mobile"
                />
              </div>
              <img
                src="../images/line-shape-white.png"
                alt=""
                className="absolute left-1/2 top-1/2 transform-[translateX(-55%)]"
              />
            </div>
          </SwiperSlide>

          {/* Slider 2 */}
          <SwiperSlide className="!py-20 !pb-10">
            <div className="p-10 px-5 md:p-16 rounded-[50px] bg-[#b99174] flex items-center justify-between relative md:pr-0 md:h-[500px] text-white md:flex-row flex-col gap-y-20">
              <div className="md:max-w-[40%]">
                <h1 className="text-2xl md:text-3xl font-bold leading-[1.3]">
                  Démarrez votre campagne et donnez vie à vos ambitions.
                </h1>
                <div className="mt-7 w-14 h-1 bg-[#f2b809]"></div>
                <p className="mt-10 text-lg md:text-xl leading-[1.3]">
                  Téléchargez l’app AidNov<sup>TM</sup> pour collecter des fonds
                  sans frais cachés. Profitez d’une interface intuitive, d’une
                  transparence totale et rejoignez la plateforme #1 de collecte
                  de fonds en Côte d’Ivoire.
                </p>
                <div className="flex items-center mt-10 gap-3 md:gap-5">
                  <button className="cursor-pointer">
                    <img
                      className="w-[180px] h-full object-cover"
                      src="../svg/appstore-2.svg"
                      alt="Appstore"
                    />
                  </button>
                  <button className="cursor-pointer">
                    <img
                      className="w-[180px] h-full object-cover"
                      src="../svg/playstore.svg"
                      alt="Playstore"
                    />
                  </button>
                </div>
              </div>
              <div className="img md:h-[600px] md:w-[600px] relative z-20">
                <img
                  className="h-full w-full"
                  src="../images/mobiles.webp"
                  alt="Mobile"
                />
              </div>
              <img
                src="../images/line-shape-white.png"
                alt=""
                className="absolute left-1/2 top-1/2 transform-[translateX(-55%)]"
              />
            </div>
          </SwiperSlide>

          {/* Slider 3 */}
          <SwiperSlide className="!py-20 !pb-10">
            <div className="p-10 px-5 md:p-16 rounded-[50px] bg-[#F5E3D3] flex items-center justify-between relative md:pr-0 md:h-[500px] text-[#1B1F23] md:flex-row flex-col gap-y-20">
              <div className="md:max-w-[40%]">
                <h1 className="text-2xl md:text-3xl font-bold leading-[1.3]">
                  Lancez votre collecte de fonds et donnez vie à vos ambitions.
                </h1>
                <div className="mt-7 w-14 h-1 bg-[#1B1F23]"></div>
                <p className="mt-10 text-lg md:text-xl leading-[1.3]">
                  Avec AidNov<sup>™</sup>, créez et partagez votre cagnotte en
                  quelques clics. Bénéficiez d’une solution mobile sécurisée,
                  d’un suivi en direct et de l’appui de milliers de donateurs
                  ivoiriens.
                </p>
                <div className="flex items-center mt-10 gap-3 md:gap-5">
                  <button className="cursor-pointer">
                    <img
                      className="w-[180px] h-full object-cover"
                      src="../svg/appstore-2.svg"
                      alt="Appstore"
                    />
                  </button>
                  <button className="cursor-pointer">
                    <img
                      className="w-[180px] h-full object-cover"
                      src="../svg/playstore.svg"
                      alt="Playstore"
                    />
                  </button>
                </div>
              </div>
              <div className="img md:h-[600px] md:w-[600px] relative z-20">
                <img
                  className="h-full w-full"
                  src="../images/mobiles.webp"
                  alt="Mobile"
                />
              </div>
              <img
                src="../images/outline-black.png"
                alt=""
                className="absolute left-1/2 top-1/2 transform-[translateX(-55%)]"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default CampaignSlide;
