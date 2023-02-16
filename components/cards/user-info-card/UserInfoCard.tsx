import { Avatar } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';
import { EUserType } from '../../../models';

interface IProps {
  user: any;
}

const UserInfoCard = ({ user }) => {
  console.log('user', user);
  return (
    <div
      className={'h-[8rem] flex items-center content-between cursor-pointer '}
    >
      <div
        className={
          'flex items-center font-UbuntuBold text-[1.6rem] leading-[1.8rem] w-[175px] h-full m-auto '
        }
      >
        <div className="w-[4rem] h-[4rem] mr-[1rem]">
          <Avatar
            squared
            src={'https://xsgames.co/randomusers/avatar.php?g=female'}
            text="Faisal"
            size={'xl'}
            bordered={false}
            //@ts-ignore // next ui bug - contribute
            borderWeight={'none'}
          />
        </div>
        <div className="flex flex-col justify-center h-full">
          <span className="capitalize">{user?.name + ' ' + user?.surname}</span>
          <span className=" text-edgeWater  text-[12px] leading-[14px] my-[1px]">
            {user?.role}{' '}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserInfoCard;
