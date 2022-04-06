import sFetch from '../sFetch';
import URL from '../baseUrl';

interface dataType {
  organizationName: string;
  leader: string;
  phone: string;
  introduction: string;
  location: string;
}

//管理员添加组织
async function addOrgan(data: dataType) {
  const res = await sFetch({
    logTitle: '管理员添加组织',
    url: URL('add', 'organ'),
    method: 'POST',
    data: data,
  });
  console.log('添加组织', res);
  return res;
}

export default addOrgan;
