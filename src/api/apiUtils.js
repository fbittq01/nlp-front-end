import axios from 'axios';
import _ from 'lodash';

export const baseApi = 'http://172.20.10.12:8000';
export const baseUrl = `${baseApi}`;
export const baseUrlV2 = `${baseApi}/v2`;

export const postApiResponse = async ({
  url,
  body,
}) => {
  const option = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  let baseUrlWithVersion = baseUrl;
  const urlWithBase = `${baseUrlWithVersion}${url}`;
  const fetchResult = await axios.post(urlWithBase, body, option);
  const result = await fetchResult.data;
  return result;
};
