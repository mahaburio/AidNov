import React from "react";

type CardProps = {
  title: string;
  description: string;
  image: string;
  current: number;
  goal: number;
  category: string;
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  current,
  goal,
  category,
}) => {
  const progress = Math.min((current / goal) * 100, 100);

  return (
    <div className="bg-white shadow-md w-full max-w-[360px] p-5 rounded-2xl">
      {/* Image Section */}
      <div className="relative w-full h-[230px] overflow-hidden rounded-xl group">
        <div className="absolute top-0 left-0 w-[125px] h-[50px] bg-[#376E50] text-white flex items-center justify-center rounded-br-2xl z-10 text-lg font-medium">
          {category}
        </div>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-[#fcc3c6] opacity-35 transition-opacity duration-300 group-hover:opacity-0"></div>
      </div>

      {/* Body */}
      <div className="pt-4">
        <h2 className="text-[22px] font-semibold text-deep-black leading-[115%]">
          {description}
        </h2>

        {/* Price Slider */}
        <div className="mt-6">
          <div className="flex justify-between text-lg font-medium text-black">
            <span className="text-gray-900">
              {current.toLocaleString()} FCFA
            </span>
            <span className="text-gray-500">{goal.toLocaleString()} FCFA</span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-pink-100 overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-6">
          <button className="bg-primary text-white px-4 py-2 rounded-md lg:text-lg font-bold transition whitespace-nowrap">
            Faire un don <i className="ri-heart-fill"></i>
          </button>
          <a
            href="#"
            className="text-black text-lg  underline font-semibold flex items-center"
          >
            Voir plus
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
