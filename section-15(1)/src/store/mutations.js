export default { // synchronize
  setAuth(state, payload) {
    state.isLoggedIn = payload.isAuth;
  }
};