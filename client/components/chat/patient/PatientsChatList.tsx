import React from "react";
import PatientsChatListItem from "./PatientsChatListItem";
import data from "../../../shared/jsons/tempMessages.json";

const PatientsChatList = () => {
  return (
    <div className="h-full overflow-y-auto pl-[2rem] pr-[3rem] mr-[1rem]">
      {data.data.map((item, index) => (
        <PatientsChatListItem message={item} key={index} />
      ))}
    </div>
  );
};

export default PatientsChatList;
