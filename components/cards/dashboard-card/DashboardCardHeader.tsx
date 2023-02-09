import React from "react"

// Utils.
import { selectIcon } from "../../../utils/selectIconUtils"
// Components.
import { Button } from "@nextui-org/react"

interface IProps {
  headIconName: string
  headIconText: string
  headButton?: {
    text: string
    action?: () => void
  }
}
const DashboardCardHeader: React.FC<IProps> = ({
  headIconName,
  headIconText,
  headButton,
}) => {
  // Handlers
  const handleButtonClick = () => {
    if (headButton?.action) headButton?.action()
  }


  return (
    <div className="h-[8rem] px-[2rem]  border-b-[1px] border-gallery flex items-center justify-between">
      <div
        className={
          "flex items-center font-UbuntuBold text-[1.6rem] leading-[1.8rem] text-easternBlue"
        }
      >
        <span className="mr-[1.8rem] ">{selectIcon(headIconName)} </span>
        <span>{headIconText}</span>
      </div>

      {headButton && (
        <div className="w-auto">
          <Button
            className="bg-easternBlue px-[1rem]"
            auto
            color="primary"
            css={{ borderRadius: "0.6rem" }}
            size={"sm"}
            onPress={handleButtonClick}
          >
            <h4 className="font-UbuntuBold text-white text-[1.4rem] leading-[1.6rem]">
              {headButton.text}
            </h4>
          </Button>
        </div>
      )}
    </div>
  )
}

export default DashboardCardHeader 
