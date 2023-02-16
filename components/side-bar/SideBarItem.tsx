import React from 'react';
import { ISideBarItemProps } from '../../models';
import { selectIcon } from '../../utils/selectIconUtils';

const SideBarItem: React.FC<ISideBarItemProps> = ({
  iconName,
  text,
  isActive,
}) => {
  return (
    <div
      className={
        'h-[8rem] border-b-[1px] border-gallery flex items-center content-between cursor-pointer ' +
        (text === 'Settings' ? 'border-t-[1px]' : '')
      }
    >
      <div className=" m-auto ">
        <div
          className={
            'flex items-center font-UbuntuBold text-[1.6rem] leading-[1.8rem] w-[175px] ' +
            (isActive ? 'text-easternBlue' : 'text-corduroy')
          }
        >
          <span className="mr-[1.8rem] ">{selectIcon(iconName)} </span>
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
};

export default SideBarItem;
