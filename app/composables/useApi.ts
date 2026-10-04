export const useApi = () => {
  return $fetch.create({
    baseURL: useRuntimeConfig().public.apiBase,
  })
}