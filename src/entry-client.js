import { createApp } from "@/main"
import createStore from '@/store';
import { createRouter } from '@/router';
const router = createRouter('client');
const pinia = createStore();
const { app } = createApp()
app.use(router);
app.use(pinia);
// 初始化 pinia
// 注意：__INITIAL_STATE__需要在 src/types/shims-global.d.ts中定义
// must be set by the user
if (window.__pinia) {
    pinia.state.value = JSON.parse(window.__pinia)
  }

  router.isReady().then(() => {
    app.mount('#app', true);
});

