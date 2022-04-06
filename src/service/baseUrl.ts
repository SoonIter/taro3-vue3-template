import { curry } from 'lodash';

const baseUrl = '1.13.5.80:8080';

function trim(str: string) {
  str = str.replace('/', '').trim();
  return str;
}

function getUrl(baseUrl: string, module: string, urlDetail: string) {
  const args = [baseUrl, module, urlDetail].map(trim);
  return args.join('/');
}

//仅需要填入两个URL参数。
const UrlCreate = curry(getUrl)(baseUrl);

export default UrlCreate;
