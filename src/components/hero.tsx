import Image from "next/image";
import React from "react";
import HeroImage from "../app/assets/images/happy-girl.png";

const Hero = () => {
  return (
    <section className="md:px-16 md:py-8 min-h-[calc(100vh-104px)]">
      <div className="flex flex-col-reverse md:flex-row p-8 bg-[#F4F6F5] rounded-lg">
        <div className="flex flex-col gap-4">
          <div className="w-min">
            <h1 className="text-5xl font-bold leading-tight">
              <span className="relative z-20 before:w-[120%] before:h-full before:-z-10 before:bg-white before:bottom-1 before:-left-2 before:absolute before:[clip-path:polygon(0%_10%,100%_0%,100%_90%,0%_100%)]">
                LETS
              </span>{" "}
              EXPLORE{" "}
              <span className="relative z-20 before:w-[120%] before:h-full before:-z-10 before:bg-yellow-300 before:bottom-1 before:-left-2 before:absolute before:[clip-path:polygon(0%_10%,100%_0%,100%_90%,0%_100%)]">
                UNIQUE
              </span>{" "}
              CLOTHES
            </h1>
          </div>
          <h3>Live for Influential and Innovative fashion!</h3>
          <button className="bg-black text-white py-2 px-4 rounded-lg w-fit">
            Sign Up
          </button>
        </div>
        <div className="hidden md:block md:flex-1 md:relative w-full">
          <Image
            src={HeroImage}
            alt="Happy Girl"
            quality={100}
            fill
            priority
            className="object-contain z-10"
          />
          <div className="absolute top-20">
            <svg
              width="40"
              height="40"
              viewBox="0 0 56 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28 0L34.5109 19.3554H55.5806L38.5349 31.3177L45.0458 50.673L28 38.7108L10.9542 50.673L17.4651 31.3177L0.419361 19.3554H21.4891L28 0Z"
                fill="#E7E6E6"
              />
            </svg>
          </div>
          <div className="absolute bottom-5 left-20">
            <svg
              width="40"
              height="40"
              viewBox="0 0 56 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28 0L34.5109 19.3554H55.5806L38.5349 31.3177L45.0458 50.673L28 38.7108L10.9542 50.673L17.4651 31.3177L0.419361 19.3554H21.4891L28 0Z"
                fill="#E7E6E6"
              />
            </svg>
          </div>
          <div className="absolute top-10 right-20">
            <svg
              width="40"
              height="40"
              viewBox="0 0 56 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28 0L34.5109 19.3554H55.5806L38.5349 31.3177L45.0458 50.673L28 38.7108L10.9542 50.673L17.4651 31.3177L0.419361 19.3554H21.4891L28 0Z"
                fill="#E7E6E6"
              />
            </svg>
          </div>
          <div className="absolute bottom-10 right-10">
            <svg
              width="40"
              height="40"
              viewBox="0 0 56 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28 0L34.5109 19.3554H55.5806L38.5349 31.3177L45.0458 50.673L28 38.7108L10.9542 50.673L17.4651 31.3177L0.419361 19.3554H21.4891L28 0Z"
                fill="#E7E6E6"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
