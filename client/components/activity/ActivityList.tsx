import React from "react";
import ActivityListItem from "./ActivityListItem";
import { EActivityType } from "../../models";

const ActivityList = () => {
  return (
    <div className="h-full bg-roofTerracotta px-[2rem]">
      <ActivityListItem type={EActivityType.APPOINTMENT} />
      <ActivityListItem type={EActivityType.MESSAGE} />
      <ActivityListItem type={EActivityType.REVIEW} />
      <ActivityListItem type={EActivityType.APPOINTMENT} />
    </div>
  );
};

export default ActivityList;
