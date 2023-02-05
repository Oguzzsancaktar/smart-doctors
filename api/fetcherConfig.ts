import axiosInstance from "./axiosInstance";

const fetcher = async (args: any) => {
  return await axiosInstance(args).then((res) => res.data);
};

export default fetcher;
