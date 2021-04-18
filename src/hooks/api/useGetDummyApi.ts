import axios from 'axios';
import { useMutation } from 'react-query';

export interface Cat {
  status: Status;
  type: string;
  deleted: boolean;
  _id: string;
  user: string;
  text: string;
  __v: number;
  source: string;
  updatedAt: string;
  createdAt: string;
  used: boolean;
}

interface Status {
  verified: boolean;
  sentCount: number;
  feedback: string;
}

export const fetchCats = async () => {
  const URL = 'https://cat-fact.herokuapp.com/facts';
  const { data } = await axios.get<Cat[]>(URL);
  return data;
};

// 캐싱 될 필요 없는 경우 useMutation
const useGetDummyApi = () => {
  const { mutateAsync } = useMutation(callApi);

  return {
    mutateAsync,
  };
};

export default useGetDummyApi;
