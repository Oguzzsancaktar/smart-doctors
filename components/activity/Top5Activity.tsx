import React from "react"
import ActivityListItem from "./ActivityListItem"
import { EActivityType } from "../../models"

const Top5Activity = () => {
  return (
    <div className="h-full  px-[2rem]">
      <div className="h-[calc(100%-5.6rem-1.7rem)] ">
        <ActivityListItem type={EActivityType.APPOINTMENT} />
        <ActivityListItem type={EActivityType.MESSAGE} />
        <ActivityListItem type={EActivityType.REVIEW} />
        <ActivityListItem type={EActivityType.APPOINTMENT} />
        <ActivityListItem type={EActivityType.REVIEW} />
      </div>

      <div className="flex items-center  h-[5.6rem] cursor-pointer">
        <h5 className="text-[1.2rem] leading-[1.3rem] text-easternBlue">
          View More
        </h5>
      </div>
    </div>
  )
}

export default Top5Activity 
