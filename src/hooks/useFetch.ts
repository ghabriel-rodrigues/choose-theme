import useSWR from "swr"
import axiosAPI from "../services/api"

export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error } = useSWR<Data, Error>(url, async url => {
    const response = await axiosAPI.get(url);

    return response.data;
  })

  const callback = useFetch

  return { data, error, isLoading: !error && !data, callback }
}