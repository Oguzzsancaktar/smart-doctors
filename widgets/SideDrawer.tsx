import React, { useMemo, useRef } from 'react'
import { useAppApiContext, useAppStateContext } from '../contexts/appContext'
import { useOutsideTrigger } from '../hooks'

const SideDrawer = () => {
  // Refs.
  const sideDrawerRef = useRef(null)

  // Hooks.
  const { sideDrawerContent } = useAppStateContext()
  const { changeSideDrawerContent } = useAppApiContext()
  useOutsideTrigger(sideDrawerRef, () => changeSideDrawerContent(null))

  // States.
  const isSidebarOpen = useMemo(() => sideDrawerContent, [sideDrawerContent])







  return (
    <div
      className={"z-[999] w-screen h-screen fixed top-0 left-0 flex items-center justify-end backdrop-blur-[2px] bg-mineShaft/30 py-[4rem] " + (!isSidebarOpen && "hidden")} >
      <div ref={sideDrawerRef} className="rounded-l-lg bg-white h-full ">
        {sideDrawerContent}
      </div>
    </div>
  )
}

export default SideDrawer 
