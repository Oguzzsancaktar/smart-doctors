import React, { useState } from 'react'
import CompanyLogo from '../public/images/CompanyLogo.svg'
import { SideBarItem } from '../components'
import { sideBarItems } from '../constants'
import { useAppApiContext, useAppStateContext } from '../contexts/appContext'

const SideBar = () => {
  const { activePage } = useAppStateContext()
  const { changePage } = useAppApiContext()

  return (
    <div className="w-[260px] h-screen bg-white z-[1000]">
      <div className="h-full flex flex-col content-between">
        <div className="flex items-center justify-center py-[3rem] border-b-[1px] border-gallery">
          <CompanyLogo />
        </div>

        <div style={{ height: 'inherit ' }} className=" overflow-y-auto">
          {sideBarItems.map((item, index) => (
            <div onClick={() => changePage(item.tab)} key={index}>
              <SideBarItem {...item} isActive={activePage === item.tab} />
            </div>
          ))}
        </div>

        <div className="mb-[8rem]" onClick={() => changePage('settings')}>
          <SideBarItem
            iconName="settings"
            isActive={activePage === 'settings'}
            text="Settings"
            tab="settings"
          />
        </div>
      </div>
    </div>
  )
}

export default SideBar 
