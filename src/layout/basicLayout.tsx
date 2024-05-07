import React from "react";
import { Link } from "react-router-dom";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const BasicLayout = ({ children }: any) => {
  return (
    <div className="w-full flex flex-col">
      <div className="h-[12vh] border-b border-gray-300 bg-navbarBackgroundColor text-navbarTextColor">
        <div className="w-full md:w-[83vw] h-full mx-auto flex items-center justify-between flex-wrap p-4">
          <Link to="/" className="md:text-xl font-semibold">
            D&D 5e API
          </Link>
          <Link to="/favourite-spells" className="md:text-xl font-semibold">
            <BookmarkIcon /> Favourites
          </Link>
        </div>
      </div>

      <div
        style={{
          scrollbarWidth: "thin",
        }}
        className="w-full md:w-[83vw] h-[88vh] overflow-auto p-4 mx-auto text-primaryColor"
      >
        {children}
      </div>
    </div>
  );
};

export default BasicLayout;
