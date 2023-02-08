import React from "react"
import data from "../../../shared/jsons/tempFavDoctors.json"
import FavoriteDoctorsListItem from "./FavoriteDoctorsListItem"

const FavoriteDoctorsList = () => {
  return (
    <div className="h-full overflow-y-auto pl-[2rem] pr-[3rem] mr-[1rem]">
      {data.data.map((item, index) => (
        <FavoriteDoctorsListItem doctor={item} key={index} />
      ))}
    </div>
  )
}

export default FavoriteDoctorsList 
