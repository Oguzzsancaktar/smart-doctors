// Models.
import { ILoginCredentials } from '../models';
// Api.
import { fetcherPost } from '../api/fetcherConfig';

export const login = async (credentials: ILoginCredentials) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/login`;
  const data = credentials;
  const response = await fetcherPost(url, data);
  return response;
};
