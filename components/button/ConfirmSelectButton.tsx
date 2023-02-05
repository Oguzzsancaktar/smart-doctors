import { Button } from "@nextui-org/react";
import React, { useState } from "react";

interface IProps {
  buttonText: string;
}

const ConfirmSelectButton: React.FC<IProps> = ({ buttonText }) => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const handleConfirm = () => {
    setIsConfirmOpen(false);
  };

  return (
    <div
      className="w-full flex flex-row h-full"
      onClick={() => setIsConfirmOpen(!isConfirmOpen)}
    >
      <Button
        css={{
          borderWidth: "2px",
          borderRadius: "12px",
          borderColor: "$corduroy",
          fontSize: "16px",
          fontFamily: "Ubuntu-Bold",
          height: "100%",
          width: "100%",
          transition: "all 0.4 ease",
        }}
        className={
          "h-full transition-all duration-1000 border-solid border-2 " +
          (isConfirmOpen
            ? "w-[calc(100%-100px)] border-mineShaft bg-mineShaft text-white mr-[10px] "
            : "w-full border-easternBlue bg-white text-easternBlue")
        }
        onClick={() => setIsConfirmOpen(!isConfirmOpen)}
      >
        {buttonText}
      </Button>
      <Button
        css={{
          borderWidth: "2px",
          borderRadius: "12px",
          borderColor: "$corduroy",
          fontSize: "16px",
          fontFamily: "Ubuntu-Bold",
          width: "100%",
          height: "100%",
          transition: "all 0.4 ease",
          minWidth: isConfirmOpen ? "100px" : "0px",
          padding: isConfirmOpen ? "0 1rem" : "0",
        }}
        className={
          "bg-easternBlue transition-all duration-1000 text-white " +
          (isConfirmOpen
            ? "w-[100px] max-w-[100px]  opacity-100"
            : "w-[0px] max-w-0  opacity-0")
        }
        onClick={handleConfirm}
      >
        Confirm
      </Button>
    </div>
  );
};

export default ConfirmSelectButton;
