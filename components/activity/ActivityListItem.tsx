import React from "react"
import { selectIcon } from "../../utils/selectIconUtils"
import { EActivityType } from "../../models"
import { FiChevronRight } from "react-icons/fi"

interface IProps {
  type: EActivityType
}
const ActivityListItem: React.FC<IProps> = ({ type }) => {
  const appointmentItem = (
    <div className={"my-[1.7rem] flex flex-row  "}>
      <span className="flex items-center w-[2.6rem] mr-[2rem] ">
        {selectIcon("bg-calendar")}
      </span>
      <div className="flex flex-col">
        <span className="font-UbuntuBold text-corduroy text-[1.2rem] leading-[1.3rem]">
          New Appointment
        </span>
        <span className=" text-easternBlue  text-[1.2rem] leading-[1.3rem] my-[0.4rem]">
          for general examination
        </span>
        <span className="text-corduroy text-[1.1rem] leading-[1.2rem] ">
          View Details
        </span>
      </div>
      <div className="flex items-center w-[16px] ml-auto ">
        <FiChevronRight size={16} />
      </div>
    </div>
  )

  const messageItem = (
    <div className={"my-[1.7rem] flex flex-row  "}>
      <span className="flex items-center w-[2.6rem] mr-[2rem] ">
        {selectIcon("bg-message")}
      </span>
      <div className="flex flex-col">
        <span className="font-UbuntuBold text-corduroy text-[1.2rem] leading-[1.3rem]">
          New Message
        </span>
        <span className=" text-easternBlue  text-[1.2rem] leading-[1.3rem] my-[0.4rem]">
          from Han-yu Wang
        </span>
        <span className="text-corduroy text-[1.1rem] leading-[1.2rem] ">
          View Details
        </span>
      </div>

      <div className="flex items-center w-[16px] ml-auto ">
        <FiChevronRight size={16} />
      </div>
    </div>
  )

  const reviewItem = (
    <div className={"my-[1.7rem] flex flex-row  "}>
      <span className="flex items-center w-[2.6rem] mr-[2rem] ">
        {selectIcon("bg-star")}
      </span>
      <div className="flex flex-col">
        <span className="font-UbuntuBold text-corduroy text-[1.2rem] leading-[1.3rem]">
          New Review
        </span>
        <span className=" text-easternBlue  text-[1.2rem] leading-[1.3rem] my-[0.4rem]">
          on your profile
        </span>
        <span className="text-corduroy text-[1.1rem] leading-[1.2rem] ">
          View Details
        </span>
      </div>
      <div className="flex items-center w-[16px] ml-auto ">
        <FiChevronRight size={16} />
      </div>
    </div>
  )

  const renderActivityType = (type: EActivityType) => {
    switch (type) {
      case EActivityType.APPOINTMENT:
        return appointmentItem
      case EActivityType.MESSAGE:
        return messageItem
      case EActivityType.REVIEW:
        return reviewItem
      default:
        return
    }
  }

  return (
    <div className="w-full border-b-[.1rem] border-gallery . rem-[1.5rem] cursor-pointer">
      {renderActivityType(type)}
    </div>
  )
}

export default ActivityListItem 
