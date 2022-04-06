import sFetch from '@/service/sFetch';
import baseUrl from '@/service/baseUrl';

interface FormAskRoom {
  organizationId: string;
  usingId: string;
  num: 1;
  info: string;
  startTime: string; //"2022-04-05 00:10:32"
  endTime: string;
}

async function askRoomUsing(form: FormAskRoom) {
  const message = await sFetch<string>({
    logTitle: '预约表单',
    method: 'POST',
    data: form,
    url: baseUrl('room', 'use/apply'),
  });
  return message; //成功的提示语
}

export default askRoomUsing;
