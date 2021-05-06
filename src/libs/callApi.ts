import axios from 'axios';

import makeUrlOptions, { Config } from './makeUrlOptions';

const callApi = async (config: Config) => {
  const apiOption = makeUrlOptions(config);

  const { data } = await axios.request({
    ...apiOption,
  });

  return data;
};

export default callApi;
