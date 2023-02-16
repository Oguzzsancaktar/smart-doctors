import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import {
  ActivitiesIcon,
  ArrowRightCircleIcon,
  CalendarBgIcon,
  CalendarIcon,
  ChartIcon,
  DashboardIcon,
  FileIcon,
  HeartIcon,
  InfoIcon,
  LogoutIcon,
  MapPinIcon,
  MessageBgIcon,
  MessageIcon,
  PhoneIcon,
  SearchIcon,
  SendMessageBgIcon,
  SettingsIcon,
  StarBgIcon,
  StethescopeIcon,
  TurnRightIcon,
  UploadCloudIcon,
} from '../components';

// TODO - create type for icon names.
export const selectIcon = (iconName: string, size?: string, color?: string) => {
  if (!size) size = '3rem';
  if (!color) color = 'currentColor';

  switch (iconName) {
    case 'activity':
      return <ActivitiesIcon size={size} color={color} />;
    case 'arrow-right-circle':
      return <ArrowRightCircleIcon size={size} color={color} />;
    case 'calendar':
      return <CalendarIcon size={size} color={color} />;
    case 'chart':
      return <ChartIcon size={size} color={color} />;
    case 'dashboard':
      return <DashboardIcon size={size} color={color} />;
    case 'eye':
      return <AiOutlineEye size={size} color={color} />;
    case 'eye-visible':
      return <AiOutlineEyeInvisible size={size} color={color} />;
    case 'file':
      return <FileIcon size={size} color={color} />;
    case 'heart':
      return <HeartIcon size={size} color={color} />;
    case 'info':
      return <InfoIcon size={size} color={color} />;
    case 'logout':
      return <LogoutIcon size={size} color={color} />;
    case 'map-pin':
      return <MapPinIcon size={size} color={color} />;
    case 'message':
      return <MessageIcon size={size} color={color} />;
    case 'phone':
      return <PhoneIcon size={size} color={color} />;
    case 'search':
      return <SearchIcon size={size} color={color} />;
    case 'settings':
      return <SettingsIcon size={size} color={color} />;
    case 'stethoscope':
      return <StethescopeIcon size={size} color={color} />;
    case 'turn-right':
      return <TurnRightIcon size={size} color={color} />;
    case 'upload-cloud':
      return <UploadCloudIcon size={size} color={color} />;
      MapPinIcon;
    // backgrounded
    case 'bg-calendar':
      return <CalendarBgIcon size={size} color={color} />;
    case 'bg-message':
      return <MessageBgIcon size={size} color={color} />;
    case 'bg-send-message':
      return <SendMessageBgIcon size={size} color={color} />;
    case 'bg-star':
      return <StarBgIcon size={size} color={color} />;

    default:
      return undefined;
  }
};
