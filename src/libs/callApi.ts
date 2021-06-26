import axios from 'axios';

import makeUrlOptions, { Config } from './makeUrlOptions';

const callApi = async <T>(config: Config) => {
  const apiOption = makeUrlOptions(config);

  const { data } = await axios.request<T>({
    ...apiOption,
  });

  // NOTE: error handling
  return data;
};

export default callApi;
