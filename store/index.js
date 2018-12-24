import Vuex from 'vuex'

// TODO messageを保持したjsonを読み込むようにする
import text_json from '../assets/content/message.json'
console.log(text_json)

const Store = () => {
  return new Vuex.Store({
    state: () => ({
      breadcrumb_state: [{ name: '', path: '/' }],
      text: text_json['ja']
    }),
    mutations: {
      change_page(state, breadcrumb_state) {
        state.breadcrumb_state = breadcrumb_state
      },
      change_lang(state, new_lang) {
        state.text = text_json[new_lang]
      }
    }
  })
}

export default Store

// TODO
// ページが変わった際に, change_pageか何かの関数を叩かせて.breaecrumb_stateを更新
// header側でbreadcrumbのStateをcomputeする

// TODO
// lang change周りは既存のvuexを参考する
