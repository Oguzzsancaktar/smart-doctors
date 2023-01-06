import React from "react";

interface IProps {
  bodyElement?: React.ReactNode;
}
const DashboardCardBody: React.FC<IProps> = ({ bodyElement }) => {
  return <div className="flex flex-col ">{bodyElement}</div>;
};

export default DashboardCardBody;
