import React from "react";
import SelectSpeciality from "./SelectSpeciality";
import SelectDoctor from "./SelectDoctor";

const CreateAppointment = () => {
  return (
    <div className="flex flex-row h-full">
      <div className="h-full min-w-[calc(230px+3rem+3rem+3rem)]  border-r-[1px] border-edgeWater ">
        <SelectSpeciality />
      </div>
      <div className="h-full min-w-[calc(230px+3rem+3rem+3rem)]">
        <SelectDoctor />
      </div>
    </div>
  );
};

export default CreateAppointment;
