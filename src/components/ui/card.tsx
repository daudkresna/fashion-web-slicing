import Image, { StaticImageData } from "next/image";
import React from "react";

const Card = ({
  src,
  alt,
  type = "small",
}: {
  src: StaticImageData;
  alt: string;
  type: "small" | "large";
}) => {
  return (
    <div className="h-fit flex-col">
      <div
        className={`relative ${
          type === "small" ? "w-[250px]" : "w-[350px] md:w-[450px]"
        } h-[350px] rounded-lg overflow-hidden`}
      >
        <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} />
      </div>
      <div className="w-full flex justify-between items-center mt-4">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold antialiased text-sm">
            Hoodies and Sweatshirt
          </h1>
          <h3 className="font-medium text-xs text-[#7F7F7F]">Explore Now!</h3>
        </div>
        <svg
          width="15"
          height="15"
          viewBox="0 0 34 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33.0607 13.0607C33.6464 12.4749 33.6464 11.5251 33.0607 10.9393L23.5147 1.3934C22.9289 0.807611 21.9792 0.807611 21.3934 1.3934C20.8076 1.97919 20.8076 2.92893 21.3934 3.51472L29.8787 12L21.3934 20.4853C20.8076 21.0711 20.8076 22.0208 21.3934 22.6066C21.9792 23.1924 22.9289 23.1924 23.5147 22.6066L33.0607 13.0607ZM0 13.5L32 13.5V10.5L0 10.5L0 13.5Z"
            fill="#797979"
          />
        </svg>
      </div>
    </div>
  );
};

export default Card;
