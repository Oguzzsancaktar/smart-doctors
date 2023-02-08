import React from "react"

interface IProps {
  bodyElement?: React.ReactNode
}
const DashboardCardBody: React.FC<IProps> = ({ bodyElement }) => {
  return (
    <div className="flex flex-col h-[calc(100%-8rem)] pt-[2rem]">
      {bodyElement}
    </div>
  )
}

export default DashboardCardBody 
