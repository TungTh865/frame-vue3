import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import mapApis from './apiMap'

const BASE_URL = 'http://127.0.0.1:8081/api/'

const request: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  responseType: 'json'
})

const config = (method: string, url: string, data: any, header: any): AxiosRequestConfig => {
  const obj: AxiosRequestConfig = {
    method,
    url
  }
  if (data) {
    if (method === 'get') {
      obj['params'] = data
    } else {
      obj['data'] = data
    }
  }
  if (header) {
    obj['headers'] = header
  }
  return obj
}

const apiMap: { [key: string]: ApiFunction } = { ...mapApis(config) }

interface ApiResponse {
  success: boolean
  data: any
  statusCode?: number
}

type ApiFunction = (apiParams: ApiParams) => Promise<ApiResponse>

export interface ApiParams {
  [key: string]: any
}

const api = async (apiName: string, apiParams: ApiParams): Promise<ApiResponse> => {
  const apiFunction = apiMap[apiName]

  if (!apiFunction) {
    throw new Error(`API function "${apiName}" not found.`)
  }

  const requestConfig: any = apiFunction(apiParams)

  try {
    const response: AxiosResponse = await request(requestConfig)
    return {
      success: true,
      data: response.data
    }
  } catch (error: any) {
    const statusCode = error?.response?.status
    if (statusCode === 401 || statusCode === 403 || statusCode === 404) {
      location.reload()
      return {
        success: false,
        data: null,
        statusCode
      }
    }

    return {
      success: false,
      data: error,
      statusCode
    }
  }
}

export default api
