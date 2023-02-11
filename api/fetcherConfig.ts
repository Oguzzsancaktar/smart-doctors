import axiosInstance from './axiosInstance';

const fetcher = async (args: any) => {
  return await axiosInstance(args).then((res) => res.data);
};

export const fetcherQuery = async (url, queryParams = '') => {
  const newUrl = url + queryParams;
  return await axiosInstance(newUrl).then((res) => res.data);
};

export const fetcherPost = async (url, data) => {
  console.log('url, data', url, data);
  return await axiosInstance.post(url, data).then((res) => res.data);
};

export default fetcher;
