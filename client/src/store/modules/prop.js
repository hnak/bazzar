const getters = {
  uid: state => state.uid,
  userName: state => state.userName,
  operatorId: state => state.operatorId,
  lastLogin: state => state.lastLogin,
  isLogin: state => state.isLogin,
  jwt: state => state.jwt,
  roles: state => state.roles
};

const mutations = {
  doLogin(state, payload) {
    state.uid = payload.uid;
    state.userName = payload.userName;
    state.operatorId = '';
    state.roles = payload.roles;
    state.lastLogin = '2018/9/12 10:55:21(sample)';
    state.isLogin = true;
  },
  doLogout(state) {
    state.isLogin = false;
  },
  saveJwt(state, payload) {
    state.jwt = payload;
  },
  reset(state) {
    state.userName = '';
    state.lastLogin = '';
    state.isLogin = false;
    state.jwt = '';
    state.roles = [];
  }
};

const state = {
  uid: '',
  userName: '',
  operatorId: '',
  lastLogin: '',
  isLogin: false,
  jwt: '',
  roles: []
};

export default {
  state,
  getters,
  mutations
};
