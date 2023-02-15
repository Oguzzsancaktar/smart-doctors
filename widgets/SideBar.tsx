import React, { useState } from 'react';
import CompanyLogo from '../public/images/CompanyLogo.svg';
import { SideBarItem } from '../components';
import { sideBarItems } from '../constants';
import { useAppApiContext, useAppStateContext } from '../contexts/appContext';
import { useAuthApiContext } from '../contexts/authContext';
import { selectAppRoute } from '../utils/appRouteUtils';
import { useRouter } from 'next/router';

const SideBar = () => {
  // Hooks.
  const { logout } = useAuthApiContext();
  const { activePage } = useAppStateContext();
  const { changePage } = useAppApiContext();
  const router = useRouter();
  // Handlers.
  const handleLogout = () => {
    router.replace(selectAppRoute('login'));
    logout();
  };

  return (
    <div className="w-[260px] h-screen bg-white z-[1000]">
      <div className="h-full flex flex-col content-between">
        <div className="flex items-center justify-center py-[3rem] border-b-[1px] border-gallery h-[10rem]">
          <CompanyLogo />
        </div>

        <div style={{ height: 'inherit ' }} className=" overflow-y-auto">
          {sideBarItems.map((item, index) => (
            <div onClick={() => changePage(item.tab)} key={index}>
              <SideBarItem {...item} isActive={activePage === item.tab} />
            </div>
          ))}
        </div>

        <div onClick={() => changePage('settings')}>
          <SideBarItem
            iconName="settings"
            isActive={activePage === 'settings'}
            text="Settings"
            tab="settings"
          />
        </div>

        <div className="mb-[8rem]" onClick={handleLogout}>
          <SideBarItem
            iconName="logout"
            isActive={activePage === 'settings'}
            text="Logout"
            tab="logout"
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
