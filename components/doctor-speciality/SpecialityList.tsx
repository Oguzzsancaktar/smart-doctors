import React from "react";
import { ConfirmSelectButton } from "../button";

const SpecialityList = () => {
  return (
    <div className="w-full flex flex-col">
      <h3 className="w-full text-easternBlue bg-easternBlue/25">Psycp</h3>

      <ul className="w-full flex flex-col py-5">
        <li className="w-full">
          <ConfirmSelectButton />
        </li>
        <li className="w-full">
          <ConfirmSelectButton />
        </li>
        <li className="w-full">
          <ConfirmSelectButton />
        </li>
        <li className="w-full">
          <ConfirmSelectButton />
        </li>
      </ul>
    </div>
  );
};

export default SpecialityList;
