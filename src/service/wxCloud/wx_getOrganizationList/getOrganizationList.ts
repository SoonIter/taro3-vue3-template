import Taro from "@tarojs/taro";
import list from "./fake";
async function getOrganizationList() {
  try {
    const res = await Taro.cloud.callFunction({
      name: "getOrganizationList"
    });
    // @ts-ignore
    const organizationList = res?.result?.data as Application[];
    console.log("请求云函数成功，获取到的组织列表为", organizationList);
    return organizationList;
  } catch (err) {
    console.log(err);
    throw new Error("获取列表失败");
  }
}
export default getOrganizationList;
