export const useFetchApi = (url, options) => {
  const config = useRuntimeConfig();
  return useFetch(url, {
    ...{ baseURL: config.public.API_BASE_URL },
    ...options,
  });
};
