import { App } from 'vue';
import { Button, Input } from '@nutui/nutui-taro';

const setNutUi = (app: App) => {
  app.use(Button).use(Input);
};
export default setNutUi;
