import React from "react";
import { Searchbar } from "../../searchbar";
import { SpecialityList } from "../../doctor-speciality";

const CreateAppointment = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <h5 className="text-2xl font-bold">1. Select speciality field</h5>

        <Searchbar />

        <div className="flex flex-col">
          <SpecialityList />
          <SpecialityList />
          <SpecialityList />
        </div>
      </div>
    </div>
  );
};

export default CreateAppointment;
