import React from "react";
import data from "../../../shared/jsons/tempPatientMessages.json";
import DoctorsChatListItem from "./DoctorsChatListItem";

const DoctorsChatList = () => {
  return (
    <div className="h-full overflow-y-auto pl-[40px] pr-[30px] mr-[10px]">
      {data.data.map((item, index) => (
        <DoctorsChatListItem message={item} key={index} />
      ))}
    </div>
  );
};

export default DoctorsChatList;
