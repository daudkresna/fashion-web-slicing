import React from "react";
import SectionTitle from "./ui/section-title";
import Arrival1 from "@/app/assets/images/arrival1.png";
import Arrival2 from "@/app/assets/images/arrival2.png";
import Arrival3 from "@/app/assets/images/arrival3.png";
import Card from "./ui/card";

const Arrivals = () => {
  const imagesList = [
    {
      id: 1,
      src: Arrival1,
      alt: "arrival1",
    },
    {
      id: 2,
      src: Arrival2,
      alt: "arrival2",
    },
    {
      id: 3,
      src: Arrival3,
      alt: "arrival3",
    },
  ];
  return (
    <section className="px-16 py-8 flex flex-col gap-8">
      <SectionTitle title="NEW ARRIVALS" />
      <div className="flex flex-col gap-8 items-center md:flex-row md:justify-evenly">
        <Card type="small" alt="arrival1" src={imagesList[0].src} />
        <Card type="small" alt="arrival1" src={imagesList[0].src} />
        <Card type="small" alt="arrival1" src={imagesList[0].src} />
      </div>
    </section>
  );
};

export default Arrivals;
