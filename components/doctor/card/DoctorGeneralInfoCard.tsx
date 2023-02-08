import React from 'react'
import { IDoctor } from '../../../models'
import { Avatar } from '@nextui-org/react'

interface IProps {
  doctor: IDoctor
}
const DoctorGeneralInfoCard: React.FC<IProps> = ({ doctor }) => {
  return (
    <div className="w-full h-full cursor-pointer">
      <div className="flex items-center  h-full w-full">
        <div className="flex items-center w-[4.6rem] mr-[1.3rem] ">
          <Avatar
            squared
            src={doctor.profileImage}
            text="Faisal"
            size={'xl'}
            bordered={false}
            //@ts-ignore // next ui bug - contribute
            borderWeight={'none'}
          />
        </div>
        <div className="flex flex-col w-[calc(100%-4.6rem-1.3rem)]">
          <span className="font-UbuntuBold text-corduroy text-[1.2rem] leading-[1.3rem]">
            {doctor.name + ' ' + doctor.surname}
          </span>
          <span className="  text-corduroy text-[1.2rem] leading-[1.3rem] my-[0.4rem]">
            {/* {doctor.} */}adsfasdf
          </span>
          <span className="text-easternBlue text-[1.1rem] leading-[1.2rem] ">
            {doctor.phone}
          </span>
        </div>
      </div>
    </div>
  )
}

export default DoctorGeneralInfoCard 
