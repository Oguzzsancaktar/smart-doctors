import { Avatar, Button } from "@nextui-org/react"
import React from "react"
import { selectIcon } from "../../../utils/selectIconUtils"
import { BorderedIcon } from "../../icons"
interface IProps {
  doctor: any
}
const FavoriteDoctorsListItem: React.FC<IProps> = ({ doctor }) => {
  //Todo doctor info to component
  return (
    <div className="w-full border-b-[1px] border-gallery  px-[1.5rem] cursor-pointer">
      <div className="my-[1.7rem] flex flex-row justify-between">
        <div className="flex items-center">
          <span className="flex items-center w-[4.6rem] mr-[1.3rem] ">
            <Avatar squared src={doctor.photo} text="Faisal" size={"lg"} />
          </span>
          <div className="flex flex-col">
            <span className="font-UbuntuBold text-corduroy text-[1.2rem] leading-[1.3rem]">
              {doctor.name + " " + doctor.surname}
            </span>
            <span className="text-corduroytext-[1.2rem] leading-[1.3rem] my-[0.4rem]">
              {doctor.address}
            </span>
            <span className=" text-easternBlue   text-[1.1rem] leading-[1.2rem] ">
              {doctor.speciality}
            </span>
          </div>
        </div>

        <div className="flex items-center">
          <span className="text-easternBlue mr-[1rem]">
            <BorderedIcon iconName="phone" />
          </span>
          <span className="text-easternBlue mr-[3rem]">
            <BorderedIcon iconName="turn-right" />
          </span>

          <Button
            className="bg-easternBlue px-[1rem]"
            auto
            size={"sm"}
            color="primary"
            css={{ borderRadius: "6px", width: "12rem" }}
          >
            <h4 className="font-UbuntuBold text-white text-[1.4rem] leading-[1.6rem]">
              New Appointment
            </h4>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default FavoriteDoctorsListItem 
