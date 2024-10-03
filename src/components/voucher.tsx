import React from "react";
import MobileApp from "@/app/assets/images/mobile.png";
import Image from "next/image";

const Voucher = () => {
  return (
    <section className="flex flex-col gap-8 md:flex-row md:px-16 justify-center items-center">
      {/* Left */}
      <div className="flex flex-col justify-center px-8 md:p-0">
        <h1 className="text-3xl font-bold">DOWNLOAD APP & GET THE VOUCHER!</h1>
        <h3 className="text-xl">
          Get 30% off for first transaction using Rondovision mobile app for
          now.
        </h3>
      </div>
      {/* Right */}
      <div className="relative h-[400px] z-10 w-1/2">
        <div className="absolute inset-0 size-[350px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-[#C2C8DA] rounded-full"></div>
        <div className="absolute inset-0 size-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-[#C2C8DA] rounded-full"></div>
        <div className="absolute inset-0 size-[250px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-[#C2C8DA] rounded-full"></div>
        <Image
          src={MobileApp}
          alt="Mobile App"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </section>
  );
};

export default Voucher;
