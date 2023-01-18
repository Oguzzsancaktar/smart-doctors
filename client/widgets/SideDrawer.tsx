import React, { useState } from "react";
import CompanyLogo from "../public/images/CompanyLogo.svg";
import { SideDrawerItem } from "../components";
import { sideDrawerItems } from "../constants";
import { useAppApiContext, useAppStateContext } from "../contexts/appContext";

const SideDrawer = () => {
  const { activePage } = useAppStateContext();
  const { changePage } = useAppApiContext();

  return (
    <div className="w-[260px] h-screen bg-white">
      <div className="h-full flex flex-col content-between">
        <div className="flex items-center justify-center py-[3rem] border-b-[0.1rem] border-gallery">
          <CompanyLogo />
        </div>

        <div style={{ height: "inherit " }} className=" overflow-y-auto">
          {sideDrawerItems.map((item, index) => (
            <div onClick={() => changePage(item.tab)} key={index}>
              <SideDrawerItem {...item} isActive={activePage === item.tab} />
            </div>
          ))}
        </div>

        <div className="mb-[8rem]" onClick={() => changePage("settings")}>
          <SideDrawerItem
            iconName="settings"
            isActive={activePage === "settings"}
            text="Settings"
            tab="settings"
          />
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
