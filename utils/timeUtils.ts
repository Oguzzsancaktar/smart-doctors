import moment from 'moment';
import { momentDateFormat } from '../constants/formats';

export const getDateFromTimestamp = (timestamp: number, format?: string) => {
  if (!format) format = momentDateFormat;

  return moment(timestamp).format(format);
};

export const getTimeFromTimestamp = (timestamp: number) => {
  return moment(timestamp).format('HH:mm');
};

export const getDayFromTimestamp = (timestamp: number) => {
  return moment(timestamp).format('dddd');
};

export const getMinutesFromTimeText = (timeText: string) => {
  const time = moment(timeText, 'HH:mm');
  return time.hours() * 60 + time.minutes();
};

export const getTimeTextFromMinutes = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  let minsText = mins.toString();
  let hoursText = hours.toString();

  // add zero for single digit
  if (mins < 10) {
    minsText = `0${mins}`;
  }

  if (hours < 10) {
    hoursText = `0${hours}`;
  }

  return `${hoursText}:${minsText}`;
};
