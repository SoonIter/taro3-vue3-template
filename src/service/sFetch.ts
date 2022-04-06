import Taro from '@tarojs/taro';

//返回最里层的data
async function sFetch<T>(option: Taro.request.Option & { logTitle: string }) {
  const { logTitle, ...taroOption } = option;
  const { data, statusCode, errMsg } = await Taro.request(taroOption);

  console.log('发生错误', errMsg);
  if (statusCode !== 200) {
    throw new Error('网络错误');
  }
  const { data: innerData, code, message } = data;

  console.log(logTitle, data);
  if (code === 200) {
    return innerData as T;
  } else {
    throw new Error(message);
  }
}

export default sFetch;
