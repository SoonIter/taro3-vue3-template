import baseUrl from '../baseUrl';
import sFetch from '../sFetch';

async function analyseToken() {
  const res = await sFetch({
    logTitle: '测试admin身份',
    url: baseUrl('api', 'admin'),
    method: 'GET',
  });
  console.log('测试admin身份', res);
  return res;
}

export default analyseToken;
