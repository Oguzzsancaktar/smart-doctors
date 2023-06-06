import { Image } from '@nextui-org/react'
import React, { useState } from 'react'
import { EUserType } from '../../models/enumerations/user'
import { Footer } from '../../widgets'
import SignInForm from './SignInForm'

const SignIn = () => {
  const [loginType, setLoginType] = useState<EUserType>(EUserType.PATIENT)

  const handleSwitchLoginType = () => {
    if (loginType === EUserType.DOCTOR) {
      setLoginType(EUserType.PATIENT)
    } else {
      setLoginType(EUserType.DOCTOR)
    }
  }

  return (
    <section className="h-full min-h-screen bg-catskillWhite overflow-hidden relative ">
      <div className="h-full relative min-h-screen">
        <div className="absolute bottom-0 flex justify-center left-1/3 -translate-x-1/2">
          <div className="absolute bottom-0  rounded-full bg-edgeWater opacity-25  w-[99rem]  h-[99rem] translate-y-1/3 "></div>

          {EUserType[loginType] === 'DOCTOR' ? (
            <Image objectFit="cover" src={'/images/doctor-image.png'} width={'46rem'} height="78.7rem" />
          ) : (
            <Image objectFit="cover" src={'/images/patient-image.png'} width={'46rem'} height="78.7rem" />
          )}
        </div>
      </div>

      <div className="absolute left-1/2 w-1/2 h-full  top-0 flex items-center">
        <div className="flex flex-col h-min">
          <h2 className="text-[7.4rem] text-easternBlue font-UbuntuBold leading-[8.5rem] h-min max-w-[60rem]">
            Welcome back to <br /> SmartDocs.
          </h2>
          <div className="mt-[2rem] ">
            <SignInForm loginType={loginType} onSwitchChange={handleSwitchLoginType} />
          </div>
        </div>
      </div>

      <div className="h-[12.5rem] bg-white">
        <Footer />
      </div>
    </section>
  )
}

export default SignIn
