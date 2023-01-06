import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {
  ActivitiesIcon,
  ArrowRightCircleIcon,
  CalendarBgIcon,
  CalendarIcon,
  DashboardIcon,
  HeartIcon,
  MessageBgIcon,
  MessageIcon,
  SettingsIcon,
  StarBgIcon,
  StethescopeIcon,
} from "../components";

export const selectIcon = (iconName: string, size?: string, color?: string) => {
  if (!size) size = "30px";
  if (!color) color = "currentColor";

  switch (iconName) {
    case "eye":
      return <AiOutlineEye size={size} color={color} />;
    case "eye-visible":
      return <AiOutlineEyeInvisible size={size} color={color} />;
    case "dashboard":
      return <DashboardIcon size={size} color={color} />;
    case "calendar":
      return <CalendarIcon size={size} color={color} />;
    case "message":
      return <MessageIcon size={size} color={color} />;
    case "stethoscope":
      return <StethescopeIcon size={size} color={color} />;
    case "heart":
      return <HeartIcon size={size} color={color} />;
    case "settings":
      return <SettingsIcon size={size} color={color} />;
    case "activity":
      return <ActivitiesIcon size={size} color={color} />;
    case "arrow-right-circle":
      return <ArrowRightCircleIcon size={size} color={color} />;

    // backgrounded

    case "bg-calendar":
      return <CalendarBgIcon size={size} color={color} />;
    case "bg-message":
      return <MessageBgIcon size={size} color={color} />;
    case "bg-star":
      return <StarBgIcon size={size} color={color} />;
    default:
      return undefined;
  }
};
