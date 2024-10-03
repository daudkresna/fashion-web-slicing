import React from "react";
import SectionTitle from "./ui/section-title";
import Card from "./ui/card";
import Favorite1 from "@/app/assets/images/favorite1.png";
import Favorite2 from "@/app/assets/images/favorite2.png";

const Favorite = () => {
  const favoriteList = [
    {
      id: 1,
      alt: "Favorite 1",
      src: Favorite1,
    },
    {
      id: 2,
      alt: "Favorite 2",
      src: Favorite2,
    },
  ];
  return (
    <>
      <section className="px-16 py-8 flex flex-col gap-8">
        <SectionTitle title={"Young's Favorite"} />
        <div className="flex flex-col gap-8 items-center md:flex-row md:justify-evenly">
          <Card
            type="large"
            alt={favoriteList[0].alt}
            src={favoriteList[0].src}
          />
          <Card
            type="large"
            alt={favoriteList[1].alt}
            src={favoriteList[1].src}
          />
        </div>
      </section>
    </>
  );
};

export default Favorite;
