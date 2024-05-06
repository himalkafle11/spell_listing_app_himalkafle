import React from "react";

const BasicLayout = ({ children }: any) => {
  return (
    <div className="w-full flex flex-col">
      <div className="h-[12vh] border-b-[1px] flex items-center justify-center w-[100vw] bg-navbarBackgroundColor text-navbarTextColor">
        <div className="flex flex-col gap-1 items-center">
          <div className="text-2xl font-semibold">D&D 5e API</div>
          <div className="text-xl">The 5th Edition Dungeons and Dragons API</div>
        </div>
      </div>
      <div
        style={{
          scrollbarWidth: "thin",
        }}
        className="w-[98vw] md:w-[83vw] h-[88vh] overflow-auto p-6 mx-auto text-primaryColor"
      >
        {children}
      </div>
    </div>
  );
};

export default BasicLayout;
