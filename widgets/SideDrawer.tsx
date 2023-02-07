import React from 'react';
import { CreateAppointment } from '../components';

const SideDrawer = () => {
  return (
    <div className="z-[999] w-screen h-screen fixed top-0 left-0 flex items-center justify-end backdrop-blur-[2px] bg-mineShaft/30 py-[4rem]">
      <div className="rounded-l-lg bg-white h-full ">
        <CreateAppointment />
      </div>
    </div>
  );
};

export default SideDrawer;
