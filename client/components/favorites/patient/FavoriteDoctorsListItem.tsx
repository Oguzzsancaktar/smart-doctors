import { Avatar, Button } from "@nextui-org/react";
import React from "react";
import { selectIcon } from "../../../utils/selectIconUtils";
import { BorderedIcon } from "../../icons";
interface IProps {
  doctor: any;
}
const FavoriteDoctorsListItem: React.FC<IProps> = ({ doctor }) => {
  //Todo doctor info to component
  return (
    <div className="w-full border-b-[1px] border-gallery  px-[15px] cursor-pointer">
      <div className="my-[17px] flex flex-row justify-between">
        <div className="flex items-center">
          <span className="flex items-center w-[46px] mr-[13px] ">
            <Avatar squared src={doctor.photo} text="Faisal" size={"lg"} />
          </span>
          <div className="flex flex-col">
            <span className="font-UbuntuBold text-corduroy text-[12px] leading-[13px]">
              {doctor.name + " " + doctor.surname}
            </span>
            <span className="text-corduroytext-[12px] leading-[13px] my-[4px]">
              {doctor.address}
            </span>
            <span className=" text-easternBlue   text-[11px] leading-[12px] ">
              {doctor.speciality}
            </span>
          </div>
        </div>

        <div className="flex items-center">
          <span className="text-easternBlue mr-[10px]">
            <BorderedIcon iconName="phone" />
          </span>
          <span className="text-easternBlue mr-[30px]">
            <BorderedIcon iconName="turn-right" />
          </span>

          <Button
            className="bg-easternBlue px-[10px]"
            auto
            size={"sm"}
            color="primary"
            css={{ borderRadius: "6px", width: "120px" }}
          >
            <h4 className="font-UbuntuBold text-white text-[14px] leading-[16px]">
              New Appointment
            </h4>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FavoriteDoctorsListItem;
