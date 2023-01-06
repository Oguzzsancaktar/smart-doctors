import { Image } from "@nextui-org/react";
import React, { useState } from "react";
import { EUserType } from "../../models/enumerations/user";
import { Footer } from "../../widgets";
import SignInForm from "./SignInForm";

const SignIn = () => {
  const [loginType, setLoginType] = useState<EUserType>(EUserType.DOCTOR);

  const handleSwitchLoginType = () => {
    if (loginType === EUserType.DOCTOR) {
      setLoginType(EUserType.PATIENT);
    } else {
      setLoginType(EUserType.DOCTOR);
    }
  };

  return (
    <section className="h-full min-h-screen bg-catskillWhite overflow-hidden relative ">
      <div className="h-full relative min-h-screen">
        <div className="absolute bottom-0 flex justify-center left-1/3 -translate-x-1/2">
          <div className="absolute bottom-0  rounded-full bg-edgeWater opacity-25  w-[990px]  h-[990px] translate-y-1/3 "></div>

          {EUserType[loginType] === "DOCTOR" ? (
            <Image
              objectFit="cover"
              src={"/images/doctor-image.png"}
              width={"460px"}
              height="787px"
            />
          ) : (
            <Image
              objectFit="cover"
              src={"/images/patient-image.png"}
              width={"460px"}
              height="787px"
            />
          )}
        </div>
      </div>

      <div className="absolute left-1/2 w-1/2 h-full  top-0 flex items-center">
        <div className="flex flex-col h-min">
          <h2 className="text-[74px] text-easternBlue font-bold leading-[85px] h-min max-w-[600px]">
            Welcome back to <br /> SmartDocs.
          </h2>
          <div className="mt-[40px] ">
            <SignInForm
              loginType={loginType}
              onSwitchChange={handleSwitchLoginType}
            />
          </div>
        </div>
      </div>

      <div className="h-[125px] bg-white">
        <Footer />
      </div>
    </section>
  );
};

export default SignIn;
