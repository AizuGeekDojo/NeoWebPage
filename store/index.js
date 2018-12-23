import Vuex from 'vuex'

const Store = () => {
  return new Vuex.Store({
    state: () => ({
      breadcrumb_state: [{ name: '', path: '/' }]
    }),
    mutations: {
      change_page(state, breadcrumb_state) {
        state = breadcrumb_state
      }
    }
  })
}

export default Store

// TODO
// ページが変わった際に, change_pageか何かの関数を叩かせて.breaecrumb_stateを更新
// header側でbreadcrumbのStateをcomputeする
