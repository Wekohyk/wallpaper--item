import { createApp } from 'vue';
// pinia and pinia-plugin-persistedstate
import pinia from './stores';
// vue-router
import router from './router';
// i18n
import i18n from './lang';
/**
 * Import the Unocss core styles
 * Best placed after reset style, before uno.css
 */
import './assets/styles/index.scss';
// Import the Unocss utilities styles
import 'uno.css';
// App
import App from './App.vue';
// 全局定义指令
import backToTop from './directive/back-to-top';

const app = createApp(App);
app.directive('back-to-top', backToTop);

app.use(pinia);
app.use(i18n);
app.use(router);
app.mount('#app');
