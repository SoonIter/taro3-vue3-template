import { createApp } from 'vue';
import { setupStore } from '@/stores';
import setNutUi from './nutui';
import { useSystem } from '@/stores';
import Taro from '@tarojs/taro';
import './app.scss';
import '@nutui/nutui-taro/dist/style.css';


const App = createApp({
  // 可以使用所有的 Vue 生命周期方法
  mounted() {},

  // 对应 onLaunch
  onLaunch(options) {
    // 将启动参数放进到全局去
    const system = useSystem();
    system.init(options);
    system.setInfo(Taro.getSystemInfoSync());
  },

  // 对应 onShow
  onShow() {},

  // 对应 onHide
  onHide() {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});
setNutUi(App);
setupStore(App);
export default App;
