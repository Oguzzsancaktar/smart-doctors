import React from "react";
import data from "../../../shared/jsons/tempFavDoctors.json";
import FavoriteDoctorsListItem from "./FavoriteDoctorsListItem";

const FavoriteDoctorsList = () => {
  return (
    <div className="h-full overflow-y-auto pl-[40px] pr-[30px] mr-[10px]">
      {data.data.map((item, index) => (
        <FavoriteDoctorsListItem doctor={item} key={index} />
      ))}
    </div>
  );
};

export default FavoriteDoctorsList;
