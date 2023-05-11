import axios from 'axios'
import mapApis from './apiMap'

const BASE_URL = 'http://127.0.0.1:8081/api/'

const request = axios.create({
  baseURL: BASE_URL,
  responseType: 'json'
})

const config = (method, url, data, header) => {
  let obj = {
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

const apiMap = { ...mapApis(config) }

const api = async (apiName, apiParams) => {
  const config = apiMap[apiName](apiParams)

  try {
    const { data } = await request(config)
    return {
      success: true,
      data
    }
  } catch (error) {
    const statusCode = error?.response?.status
    if (statusCode === 401 || statusCode === 403) {
      location.reload()
      return
    }
    if (statusCode === 404) {
      location.reload()
      return
    }
    return {
      success: false,
      data: error,
      statusCode
    }
  }
}
export default api
