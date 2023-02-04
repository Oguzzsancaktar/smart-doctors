import React from "react";

const ConfirmSelectButton = () => {
  return (
    <div className="w-full flex flex-row">
      <button className="w-[calc(100%-100px)] bg-mineShaft text-white">
        Psyco
      </button>
      <button className="w-[100px] bg-easternBlue text-white">Confirm</button>
    </div>
  );
};

export default ConfirmSelectButton;
