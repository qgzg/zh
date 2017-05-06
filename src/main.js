import Vue from 'vue';
import App from './App';
import goods from './components/goods/goods.vue';

/* eslint-disable no-new */
let app = Vue.extend(App);
let router = new VueRouter();

router.map({
  'goods': {
    component: goods
  }
})
router.start(app,'#app');
