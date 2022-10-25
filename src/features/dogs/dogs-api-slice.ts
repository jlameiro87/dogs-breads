import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BreedI } from '../../utils/constants';

const DOGS_API_KEY = import.meta.env.REACT_APP_API_KEY || '';
// baseUrl: 'https://api.thecatapi.com/v1',

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thedogapi.com/v1',
    prepareHeaders(headers) {
      headers.set('x-api-key', DOGS_API_KEY)
      return headers;
    }
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<BreedI[], number|void> ({
        query(page = 0, limit = 10, order = 'asc') {
          return `/breeds?page=${page ? page - 1 : 0}&limit=${limit}&order=${order}`;
        },
      })
    }
  }
});

export const { useFetchBreedsQuery } = apiSlice;
