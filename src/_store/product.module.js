import { productService } from '../_services';

const state = {
  all: {}
};

const actions = {
  getAll({ commit }) {
    commit('getAllRequest');

    productService.getAll()
      .then(
        products => commit('getAllSuccess', products),
        error => commit('getAllFailure', error)
      );
  }
};

const mutations = {
  getAllRequest(state) {
    state.all = { loading: true };
  },
  getAllSuccess(state, products) {
    state.all = { items: products };
  },
  getAllFailure(state, error) {
    state.all = { error };
  }
};

export const product = {
  namespaced: true,
  state,
  actions,
  mutations
};