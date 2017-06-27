export default {
  state: {
    url: '127.0.0.1',
    port: 6800,
    rpc: '/jsonrpc',
    password: '',
    ssl: false
  },
  mutations: {
    auth(state, auth) {
      state.url = auth.url;
      state.port = auth.port;
      state.rpc = auth.rpc;
      state.password = auth.password;
      state.ssl = auth.ssl;
    }
  }
};
