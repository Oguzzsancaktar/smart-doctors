import React, { useState } from "react";
import CompanyLogo from "../public/images/CompanyLogo.svg";
import { SideDrawerItem } from "../components";
import { sideDrawerItems } from "../constants";

const SideDrawer = () => {
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  console.log(activeTab);
  return (
    <div className="w-[2578x] h-screen bg-white">
      <div className="h-full flex flex-col content-between">
        <div className="flex items-center justify-center py-[30px] border-b-[1px] border-gallery">
          <CompanyLogo />
        </div>

        <div style={{ height: "inherit " }} className=" overflow-y-auto">
          {sideDrawerItems.map((item, index) => (
            <div onClick={() => setActiveTab(item.tab)}>
              <SideDrawerItem
                {...item}
                isActive={activeTab === item.tab}
                key={index}
              />
            </div>
          ))}
        </div>

        <div className="mb-[80px]" onClick={() => setActiveTab("settings")}>
          <SideDrawerItem
            iconName="settings"
            isActive={activeTab === "settings"}
            text="Settings"
            tab="settings"
          />
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
