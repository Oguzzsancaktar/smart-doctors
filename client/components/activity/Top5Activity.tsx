import React from "react";
import ActivityListItem from "./ActivityListItem";
import { EActivityType } from "../../models";

const Top5Activity = () => {
  return (
    <div className="h-full  px-[40px]">
      <div className="h-[calc(100%-56px-17px)] ">
        <ActivityListItem type={EActivityType.APPOINTMENT} />
        <ActivityListItem type={EActivityType.MESSAGE} />
        <ActivityListItem type={EActivityType.REVIEW} />
        <ActivityListItem type={EActivityType.APPOINTMENT} />
        <ActivityListItem type={EActivityType.REVIEW} />
      </div>

      <div className="flex items-center  h-[56px] cursor-pointer">
        <h5 className="text-[12px] leading-[13px] text-easternBlue">
          View More
        </h5>
      </div>
    </div>
  );
};

export default Top5Activity;
