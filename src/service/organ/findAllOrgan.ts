import URL from '../baseUrl';
import sFetch from '../sFetch';

//获得所有组织
async function findAllOrgan() {
  const data = await sFetch({
    logTitle: '查询所有组织',
    url: URL('add', 'organ'),
    method: 'GET',
  });
  return data;
}

export default findAllOrgan;
