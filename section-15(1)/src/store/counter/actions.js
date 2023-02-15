export default {
  increment(context) {
    setTimeout(function(){
      context.commit('increment');
    }, 2000);
  },
  increase(context, payload) {
    console.log(context); // context include dispatch, commit, getters, state...
    context.commit('increase', payload);
  },
};