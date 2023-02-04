import moment from "moment";
import { momentDateFormat } from "../constants/formats";

export const getDateFromTimestamp = (timestamp: number, format?: string) => {
  if (!format) format = momentDateFormat;

  return moment(timestamp).format(format);
};

export const getTimeFromTimestamp = (timestamp: number) => {
  return moment(timestamp).format("HH:mm");
};

export const getDayFromTimestamp = (timestamp: number) => {
  return moment(timestamp).format("dddd");
};
