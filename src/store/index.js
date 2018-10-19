import Vue from 'vue';
import Vuex from 'vuex';
import appProperty from '@/store/modules/prop';

Vue.use(Vuex);

// const debug = process.env.NODE_ENV !== 'production';
const debug = false;

export default function() {
  const Store = new Vuex.Store({
    modules: {
      appProperty
    },
    strict: debug
  });

  return Store;
}
