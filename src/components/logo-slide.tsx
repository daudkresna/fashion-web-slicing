import Image from "next/image";
import React from "react";
import HM from "@/app/assets/images/hm.png";
import Obey from "@/app/assets/images/obey.png";
import Shopify from "@/app/assets/images/shopify.png";
import Levis from "@/app/assets/images/levis.png";
import Amazon from "@/app/assets/images/amazon.png";

const LogoSlide = () => {
  const logoList = [
    {
      id: 1,
      logo: HM,
    },
    {
      id: 2,
      logo: Obey,
    },
    {
      id: 3,
      logo: Shopify,
    },
    {
      id: 4,
      logo: Levis,
    },
    {
      id: 5,
      logo: Amazon,
    },
  ];
  return (
    <section className="md:px-16 relative w-full bg-yellow-300">
      <div className="flex w-full justify-around items-center gap-8 overflow-hidden">
        {logoList.map((logo) => (
          <div
            key={logo.id}
            className="relative md:shrink-0 w-[100px] h-[100px]"
          >
            <Image
              src={logo.logo}
              alt={logo.id.toString()}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoSlide;
