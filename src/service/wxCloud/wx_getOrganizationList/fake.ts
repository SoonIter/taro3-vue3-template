function organizationFactory(name: string) {
  return {
    name
  };
}
const list = ["易班", "实验室1", "实验室2"].map(item => {
  return organizationFactory(item);
});

export default list;
