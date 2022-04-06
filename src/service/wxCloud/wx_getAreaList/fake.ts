function organizationFactory(name: string) {
  return {
    name
  };
}
const list = [
  "实验室",
  "大厅",
  "实验物品1",
  "实验物品2",
  "实验物品3",
  "实验物品4",
  "实验物品5",
  "实验物品6",
  "实验物品7",
  "实验物品8",
  "实验物品9",
  "实验物品10",
  "实验物品11",
  "实验物品12",
  "实验物品13",
  "实验物品14",
  "实验物品15"
].map(item => {
  return organizationFactory(item);
});

export default list;
