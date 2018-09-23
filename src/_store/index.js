import Vue from 'vue';
import Vuex from 'vuex';

import { alert } from './alert.module';
import { account } from './account.module';
import { product } from './product.module';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    alert,
    account,
    product
  }
});