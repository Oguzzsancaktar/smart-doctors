import React from "react";
import { Button, Checkbox, Grid, Input, Row } from "@nextui-org/react";
import AppleLogo from "../../public/images/AppleLogo.svg";
import GoogleLogo from "../../public/images/GoogleLogo.svg";
import { EUserType } from "../../models/enumerations/user";
import { capitalizeFirstLetter } from "../../utils/stringUtils";
import { handleInputChange } from "../../utils/handleStateUtils";
import { selectIcon } from "../../utils/selectIconUtils";
import Router from "next/router";
import { selectAppRoute } from "../../utils/appRouteUtils";

interface IProps {
  loginType: EUserType;
  onSwitchChange: () => void;
}
const SignInForm: React.FC<IProps> = ({ loginType, onSwitchChange }) => {
  const [loginCredentials, setLoginCredentials] = React.useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    Router.replace(selectAppRoute("home"));
  };

  return (
    <div className=" bg-white w-[463px] h-min rounded-[12px]">
      <div className="flex flex-col h-full">
        {/* head */}
        <div className="py-[26px] px-[40px] flex justify-between border-b-[1px] border-gallery">
          <div className="flex flex-col ">
            <h3 className="leading-[35px] text-[35px] font-bold text-easternBlue mb-[3px]">
              Sign In
            </h3>
            <h6 className="text-[14px] text-jungleMist leading-[15px] lowercase">
              for {EUserType[loginType]}
            </h6>
          </div>

          <div className="flex flex-col justify-center">
            <Button
              className="bg-gamboge px-[10px]"
              auto
              color="primary"
              css={{ borderRadius: "6px" }}
              onClick={onSwitchChange}
            >
              <h4 className="font-bold text-white text-[14px] leading-[16px]">
                Switch to{" "}
                {capitalizeFirstLetter(
                  EUserType[loginType] === "DOCTOR"
                    ? EUserType[1]
                    : EUserType[0]
                )}{" "}
                Login
              </h4>
              <span className="pl-[5px]">
                {selectIcon("arrow-right-circle")}
              </span>
            </Button>
          </div>
        </div>

        {/* body */}
        <div className="py-[40px] px-[40px]">
          <div className="flex flex-col  border-b-[1px] border-gallery">
            <Grid className="mb-[30px] w-full">
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
            <Grid className="mb-[30px] w-full">
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

            <Grid className="mb-[20px]">
              <Checkbox size="lg">
                <h5 className="font-normal text-corduroy text-[13px] leading-[14px]">
                  Save my login information and keep me signed in.
                </h5>
              </Checkbox>
            </Grid>

            <Grid className="mb-[20px]">
              <Button
                className="bg-easternBlue px-[10px]"
                auto
                color="primary"
                css={{ borderRadius: "6px", width: "170px" }}
                onPress={handleLogin}
              >
                <h4 className="font-bold text-white text-[14px] leading-[16px]">
                  Sign In
                </h4>
              </Button>
            </Grid>

            <Grid className="mb-[20px]">
              <h5 className="font-normal text-corduroy text-[12px] leading-[13px]">
                Alternatively use your Apple or Google account to sign in.
              </h5>
            </Grid>

            <Grid className="mb-[20px]">
              <Row>
                <Button
                  className="bg-white px-[10px] mr-[10px]"
                  bordered
                  color="primary"
                  css={{
                    borderWidth: "1px",
                    borderRadius: "6px",
                    width: "170px",
                    borderColor: "$corduroy",
                  }}
                  onPress={handleLogin}
                >
                  <AppleLogo />
                  <h4 className="font-normal ml-[5px] text-corduroy text-[12px] leading-[13px]">
                    Continue with Apple
                  </h4>
                </Button>

                <Button
                  className="bg-white px-[10px] ml-[10px]"
                  bordered
                  color="primary"
                  css={{
                    borderWidth: "1px",
                    borderRadius: "6px",
                    width: "170px",
                    borderColor: "$corduroy",
                  }}
                >
                  <GoogleLogo />
                  <h4 className="font-normal ml-[5px] text-corduroy text-[12px] leading-[13px]">
                    Continue with Google
                  </h4>
                </Button>
              </Row>
            </Grid>
          </div>

          <div className="mt-[20px]">
            <h2 className="font-bold text-center text-corduroy text-[16px] leading-[18px]">
              New User ?
              <span className="text-easternBlue ml-[5px] underline underline-offset-2">
                Create an account
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
