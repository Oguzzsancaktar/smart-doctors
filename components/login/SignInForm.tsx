import React from "react"
import { Button, Checkbox, Grid, Input, Row } from "@nextui-org/react"
import AppleLogo from "../../public/images/AppleLogo.svg"
import GoogleLogo from "../../public/images/GoogleLogo.svg"
import { EUserType } from "../../models/enumerations/user"
import { capitalizeFirstLetter } from "../../utils/stringUtils"
import { handleInputChange } from "../../utils/handleStateUtils"
import { selectIcon } from "../../utils/selectIconUtils"
import Router from "next/router"
import { selectAppRoute } from "../../utils/appRouteUtils"
import { useAuthApiContext } from "../../contexts/authContext"
import { useAppApiContext } from "../../contexts/appContext"

interface IProps {
  loginType: EUserType
  onSwitchChange: () => void
}
const SignInForm: React.FC<IProps> = ({ loginType, onSwitchChange }) => {
  // const { login } = useAuthApiContext()
  const { changeUserType } = useAppApiContext()

  const [loginCredentials, setLoginCredentials] = React.useState({
    email: "doctor@doctor.com",
    password: "dotnet2023",
    type: loginType
  })

  const handleLogin = () => {
    // const user = login(loginCredentials)
    if (loginCredentials) {
      changeUserType(loginType)
      Router.replace(selectAppRoute("home"))
    }
  }

  return (
    <div className=" bg-white w-[46.3rem] h-min rounded-[1.2rem]">
      <div className="flex flex-col h-full">
        {/* head */}
        <div className="py-[2.6rem] px-[2rem] flex justify-between border-b-[1px] border-gallery">
          <div className="flex flex-col ">
            <h3 className="leading-[3.5rem] text-[3.5rem] font-UbuntuBold text-easternBlue mb-[0.3rem]">
              Sign In
            </h3>
            <h6 className="text-[1.4rem] text-jungleMist leading-[1.5rem] lowercase">
              for {EUserType[loginType]}
            </h6>
          </div>

          <div className="flex flex-col justify-center">
            <Button
              className="bg-gamboge px-[1rem]"
              auto
              color="primary"
              css={{ borderRadius: "0.6rem" }}
              onClick={onSwitchChange}
            >
              <h4 className="font-UbuntuBold text-white text-[1.4rem] leading-[1.6rem]">
                Switch to{" "}
                {capitalizeFirstLetter(
                  EUserType[loginType] === "DOCTOR"
                    ? EUserType[1]
                    : EUserType[0]
                )}{" "}
                Login
              </h4>
              <span className="pl-[0.5rem]">
                {selectIcon("arrow-right-circle")}
              </span>
            </Button>
          </div>
        </div>

        {/* body */}
        <div className="py-[2rem] px-[2rem]">
          <div className="flex flex-col  border-b-[1px] border-gallery">
            <Grid className="mb-[3rem] w-full">
              <Input
                color="primary"
                labelPlaceholder="E-Mail"
                bordered
                borderWeight="light"
                css={{ borderRadius: "6px", width: "100%" }}
                name="email"
                type="email"
                value={loginCredentials.email}
                onChange={(e) =>
                  handleInputChange(e, loginCredentials, setLoginCredentials)
                }
              />
            </Grid>
            <Grid className="mb-[3rem] w-full">
              <Input.Password
                color="primary"
                labelPlaceholder="Password"
                bordered
                borderWeight="light"
                css={{ borderRadius: "6px", width: "100%" }}
                name="password"
                type="password"
                value={loginCredentials.password}
                onChange={(e) =>
                  handleInputChange(e, loginCredentials, setLoginCredentials)
                }
              />
            </Grid>

            <Grid className="mb-[2rem]">
              <Checkbox size="lg">
                <h5 className="font-normal text-corduroy text-[1.3rem] leading-[1.4rem]">
                  Save my login information and keep me signed in.
                </h5>
              </Checkbox>
            </Grid>

            <Grid className="mb-[2rem]">
              <Button
                className="bg-easternBlue px-[1rem]"
                auto
                color="primary"
                css={{ borderRadius: "6px", width: "17rem" }}
                onPress={handleLogin}
              >
                <h4 className="font-UbuntuBold text-white text-[1.4rem] leading-[1.6rem]">
                  Sign In
                </h4>
              </Button>
            </Grid>

            <Grid className="mb-[2rem]">
              <h5 className="font-normal text-corduroy text-[1.2rem] leading-[1.3rem]">
                Alternatively use your Apple or Google account to sign in.
              </h5>
            </Grid>

            <Grid className="mb-[2rem]">
              <Row>
                <Button
                  className="bg-white px-[1rem] mr-[1rem]"
                  bordered
                  color="primary"
                  css={{
                    borderWidth: "1px",
                    borderRadius: "6px",
                    width: "17rem",
                    borderColor: "$corduroy",
                  }}
                  onPress={handleLogin}
                >
                  <AppleLogo />
                  <h4 className="font-normal ml-[0.5rem] text-corduroy text-[1.2rem] leading-[1.3rem]">
                    Continue with Apple
                  </h4>
                </Button>

                <Button
                  className="bg-white px-[1rem] ml-[1rem]"
                  bordered
                  color="primary"
                  css={{
                    borderWidth: "1px",
                    borderRadius: "6px",
                    width: "17rem",
                    borderColor: "$corduroy",
                  }}
                >
                  <GoogleLogo />
                  <h4 className="font-normal ml-[0.5rem] text-corduroy text-[1.2rem] leading-[1.3rem]">
                    Continue with Google
                  </h4>
                </Button>
              </Row>
            </Grid>
          </div>

          <div className="mt-[2rem]">
            <h2 className="font-UbuntuBold text-center text-corduroy text-[1.6rem] leading-[1.8rem]">
              New User ?
              <span className="text-easternBlue ml-[0.5rem] underline underline-offset-2">
                Create an account
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignInForm 
