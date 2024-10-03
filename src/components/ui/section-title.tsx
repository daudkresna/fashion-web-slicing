import React from "react";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="relative w-fit mx-auto md:mx-0">
      <h1 className="text-2xl font-bold ">{title}</h1>
      <div className="absolute right-0 top-0 -z-10">
        <svg
          width="90"
          height="50"
          viewBox="0 0 186 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M84 3.97549C65.3333 8.30883 22.4 19.9755 0 31.9755C56.6667 37.3088 173.2 39.1755 186 3.97549C168 0.975492 122.4 -3.22451 84 3.97549Z"
            fill="#EBD96B"
          />
        </svg>
      </div>
    </div>
  );
};

export default SectionTitle;
