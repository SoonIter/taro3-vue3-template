import Taro from "@tarojs/taro";
import list from "./fake";
async function getAreaList(id: string) {
  const areas = await Taro.cloud
    .callFunction({
      name: "getAreaList",
      data: {
        id: id
      }
    })
    .then(res => {
      return (res.result as any).data as IArea[];
    });
  console.log(`请求getAreaList云函数成功`, areas);

  return areas;
}
export default getAreaList;
