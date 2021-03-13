import { createApp } from 'vue';
import Vui from '@/entry.esm';
import Dev from './serve.vue';

const app = createApp(Dev);
app.use(Vui);

app.mount('#app');
