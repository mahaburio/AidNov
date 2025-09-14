import React from "react";
// import { IconType } from "react-icons";
import { RiArrowRightUpLine } from "react-icons/ri";

type CollectionCard = {
  title: string;
  description: string;
  // icon?: IconType; // optional if you want different icons
};

const collectionData: CollectionCard[] = [
  {
    title: "Pour vous",
    description:
      "Les sommes récoltées sont versées sur votre compte pour un usage personnel",
  },
  {
    title: "Pour vos proches",
    description:
      "Aidez vos proches à financer leurs besoins essentiels et urgents",
  },
  {
    title: "Pour une cause",
    description:
      "Soutenez une cause qui vous tient à cœur en lançant une collecte",
  },
];

const CollectionCards: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 py-14 md:pb-30 lg:px-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-snug">
        Lancez une collecte <br /> pour vous-même ou vos proches
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-16 mt-12">
        {collectionData.map((card, index) => (
          <div key={index} className="relative">
            {/* Outer border */}
            <div className="border-3 border-primary rounded-2xl flex justify-center items-center">
              {/* Content */}
              <div className="relative border-3 border-primary rounded-2xl bg-white  md:h-[280px] w-full flex flex-col items-center justify-center py-14 px-7 -top-2 -right-2  transition-all duration-300 hover:top-0 hover:right-0 cursor-pointer">
                <h2 className="text-3xl md:text-3xl xl:text-4xl font-bold text-primary text-center">
                  {card.title}
                </h2>
                <p className="text-lg md:text-xl xl:text-2xl text-gray-700 font-bold text-center mt-5">
                  {card.description}
                </p>

                {/* Arrow Button */}
                <div className="absolute bottom-0 right-0 bg-primary text-white py-3 px-5 rounded-[20px_0px_20px_20px] flex items-center justify-center text-2xl">
                  <RiArrowRightUpLine />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollectionCards;
