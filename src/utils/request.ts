import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'taro-axios'
import Taro from '@tarojs/taro'

// import { useRouter } from 'vue-router'
interface ApiResult {
  code: number
  message: string
  // @ts-ignore
  //eslint-disable-next-line
  result?: any
}

const instance = axios.create({
  // 超时时间 1 分钟
  timeout: 30 * 1000,
  headers: {
    'x-client': 'web',
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // const token = localStorage.getItem('access_token')
    const token = '111'
    config.headers = {
      Authorization: `Bearer ${token}`,
      token,
      ...config.headers
    }
    return config
  },
  (err: AxiosError) => {
    Promise.reject(err)
  }
)
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (err: AxiosError) => {
    return Promise.reject(err)
  }
)

const showToast = (title: string) => {
  Taro.showToast({
    title,
    icon: 'none'
  })
}
const showMessage = (message: string) => {
  if (message.indexOf('Network') > -1) {
    showToast('升级中...')
  } else if (message.indexOf('timeout') > -1) {
    showToast('请求超时')
  } else {
    showToast(message)
  }
}
const request = (options: AxiosRequestConfig = {}) => {
  Taro.showLoading({
    title: '加载中...'
  })
  return new Promise<ApiResult>((resolve, reject) => {
    instance(options)
      .then((response: AxiosResponse) => {
        if (response?.status === 200) {
          // 临时使用mock数据 使用mock数据 不验证code
          if (options.url?.includes('mock')) {
            const res: ApiResult = response.data
            return resolve(res)
          } else {
            if (response?.data?.code === 0) {
              return resolve(response.data)
            } else {
              return Promise.reject(response)
            }
          }
        } else {
          return Promise.reject(response)
        }
      })
      .catch(result => {
        if (result?.status === 200 && result?.data?.code === -1) {
          ////重新登陆 result?.data?.code === -1 ||
        } else {
          // 其他情况 code 非 0 情况 有message 就显示
          const title = result?.data?.message ?? result?.message
          const message = JSON.stringify(title).replace(/"/g, '')
          showMessage(message)
        }
        reject(result)
      })
      .finally(() => {
        Taro.hideLoading()
      })
  })
}
export default request
