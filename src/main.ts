import Vue from 'vue';
import App from './App.vue';
/*
如需使用elementui,请打开下面elementui注释
*/
import '@/element-ui' // api: https://github.com/ElemeFE/element
import '@/element-ui-theme'

// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
import router from './router'; // 项目路由
import Vfilters from '@/views/filters/filters'; // 项目中所有的过滤器
import store from '@/views/store/store'; // 项目中的状态管理工具
import './assets/index.css'; // 引入css
import './permission'; // 全局路由守卫

// Vue.use(Antd);

for (const key in Vfilters) {
  Vue.filter(key, Vfilters[key]);
}

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

