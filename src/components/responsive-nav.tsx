import React from "react";

const ResponsiveNavigation = ({
  hamburgerOpen,
}: {
  hamburgerOpen: boolean;
}) => {
  return (
    <nav
      id="nav-menu"
      className={`${
        !hamburgerOpen ? "scale-y-0" : "scale-y-100 "
      } ease-in-out duration-300 origin-top absolute max-w-[250px] w-full font-semibold right-4 top-full bg-white z-50`}
    >
      <ul className="flex flex-col md:hidden gap-4 items-start group p-4">
        <li>Catalogue</li>
        <li>Fashion</li>
        <li>Favourite</li>
        <li>Lifestyle</li>
        <li>
          <button className="w-full bg-black text-white py-2 px-4 rounded-md">
            Sign Up
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default ResponsiveNavigation;
