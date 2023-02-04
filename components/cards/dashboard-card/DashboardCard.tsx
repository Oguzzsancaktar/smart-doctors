import React from "react";
import DashboardCardHeader from "./DashboardCardHeader";
import DashboardCardBody from "./DashboardCardBody";

interface IProps {
  headIconName: string;
  headIconText: string;
  headButtonText?: string;
  bodyElement?: React.ReactNode;
}

const DashboardCard: React.FC<IProps> = ({
  headIconName,
  headIconText,
  headButtonText,
  bodyElement,
}) => {
  return (
    <div className="w-full h-full flex flex-col bg-white rounded-[1.2rem]">
      <DashboardCardHeader
        headIconName={headIconName}
        headIconText={headIconText}
        headButtonText={headButtonText}
      />
      <DashboardCardBody bodyElement={bodyElement} />
    </div>
  );
};

export default DashboardCard;
