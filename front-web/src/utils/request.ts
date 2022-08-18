/* eslint-disable prettier/prettier */
import axios, { AxiosRequestConfig } from 'axios';
import { FilterData } from '../types';

export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

const baseURL = 'http://localhost:8080';


export const makeRequest = axios.create({
  baseURL
});

export const buildFilterParams = (
  filterData?: FilterData,
  extraParams?: Record<string, unknown>

) => {
  return {
    storeId: filterData?.store?.id,
    ...extraParams
  };
};

export const requestBackend = (config: AxiosRequestConfig) => {
  const headers = config.withCredentials
    ? {
      ...config.headers
    }
    : config.headers;

  return axios({ ...config, baseURL: BASE_URL, headers });
};
