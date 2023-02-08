import { Input } from "@nextui-org/react"
import React from "react"
import { SearchIcon } from "../icons"
import { themeColors } from "../../constants"

const Searchbar = () => {
  return (
    <div className="w-full h-full">
      <Input
        css={{
          height: "100%",
        }}
        className="h-full"
        clearable
        bordered
        fullWidth
        color="primary"
        size="lg"
        placeholder="Search"
        contentLeft={<SearchIcon color={themeColors.easternBlue} size="20px" />}
      />
      {/* <input type="text" placeholder="Search" className="w-full border-solid" /> */}
    </div>
  )
}

export default Searchbar 
