import React from 'react';
import data from '../../../shared/jsons/tempFavDoctors.json';
import FavoriteDoctorsListItem from './FavoriteDoctorsListItem';

const FavoriteDoctorsList = () => {
  return (
    <ul className="h-full overflow-y-auto pl-[2rem] pr-[3rem] mr-[1rem]">
      {data.data.map((item, index) => (
        <li key={index} className="border-b-[1px] border-gallery ">
          <FavoriteDoctorsListItem doctor={item} />
        </li>
      ))}
    </ul>
  );
};

export default FavoriteDoctorsList;
