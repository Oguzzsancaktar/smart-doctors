import axiosInstance from './axiosInstance';

const fetcher = async (args: any) => {
  return await axiosInstance(args).then((res) => res.data);
};

export const fetcherQuery = async (url, queryParams = '') => {
  const newUrl = url + queryParams;
  console.log('newUrl', newUrl);
  return await axiosInstance(newUrl).then((res) => res.data);
};

export default fetcher;
