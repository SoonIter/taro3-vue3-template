import baseUrl from '../baseUrl';
import sFetch from '../sFetch';

interface dataType {
  roomName: string;
  organizationId: string;
  leader: string;
  introduction: string;
}

async function addRoom(data: dataType) {
  const res = await sFetch({
    logTitle: '管理员给组织添加一个场地',
    url: baseUrl('room', 'add'),
    method: 'POST',
    data,
  });
  console.log('添加房间成功', res);
  return res;
}

export default addRoom;
