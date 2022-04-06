import URL from '../baseUrl';
import sFetch from '../sFetch';
import Taro from '@tarojs/taro';

const loginURL = URL('api')('auth/login');

function addTokenInterceptor(token) {
  const interceptor = function(chain) {
    const requestParams = chain.requestParams;
    const { header } = requestParams;
    header['Authorization'] = token;
    return chain.proceed(requestParams).then((res) => {
      return res;
    });
  };
  Taro.addInterceptor(interceptor);
}

interface ReturnData {
  loginAccount: string;
  token: string; //带Bearer前缀
  expirationTime: number;
}

async function login(username: string, password: string) {
  const res = await sFetch<ReturnData>({
    logTitle: '登录成功',
    url: loginURL,
    data: {
      username,
      password,
    },
  });
  console.log('登录成功', res);
  addTokenInterceptor(res.token);
  return res;
}

export default login;
