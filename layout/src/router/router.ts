/*npm install vue-router */
import { createRouter, createWebHistory} from 'vue-router'
import Home from '../components/coms/Home.vue';
import Nav1 from '../components/nav/Nav1.vue';
import Nav2 from '../components/nav/Nav2.vue';
import Nav3 from '../components/nav/Nav3.vue';
import Nav4 from '../components/nav/Nav4.vue';
import Nav5 from '../components/nav/Nav5.vue';
import Button from '../components/coms/Button.vue';
import Expan from '../components/coms/Expan.vue';
import HelloWorld from '../components/coms/HelloWorld.vue';
import Tooltip from '../components/coms/Tooltip.vue';
import Bread from '../components/coms/Bread.vue';
import Bottom1 from '../components/nav/Bottom1.vue';
import Fbutton from '../components/coms/Fbutton.vue';
import Footers from '../components/coms/Footers.vue';
import Tabs from '../components/coms/Tabs.vue';
import Page from '../components/coms/Page.vue';
import Dir from '../components/ref/Dir.vue';
import Events from '../components/ref/Events.vue';
import Met from '../components/ref/Met.vue';

const routes = [
   { path: '/', redirect: '/home' }, // 기본 리디렉션
  { path: '/home', component: Home },
  { path: '/nav1', component: Nav1 },
  { path: '/nav2', component: Nav2 },
  { path: '/nav3', component: Nav3 },
  { path: '/nav4', component: Nav4 },
  { path: '/nav5', component: Nav5 },
  { path: '/button', component: Button },
  { path: '/expan', component: Expan },
  { path: '/hello', component: HelloWorld },
  { path: '/tooltip', component: Tooltip },
  { path: '/bread', component: Bread},
  { path: '/bottom1', component: Bottom1},
  { path: '/fbutton', component: Fbutton},
  { path: '/footers', component: Footers},
  { path: '/tabs', component: Tabs},
  { path: '/page', component: Page},
  { path: '/dir', component: Dir},
  { path: '/events', component: Events},
  { path: '/fs', component: Met},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router;