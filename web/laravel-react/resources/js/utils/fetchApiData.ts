import { fetchData } from './fetchData'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const fetchApiData = async (url: string, options?: RequestInit) => {
    console.log('fetchApiData', API_BASE_URL + url, options)
    const { data, error } = await fetchData(API_BASE_URL + url, options)
    return { data, error }
}
