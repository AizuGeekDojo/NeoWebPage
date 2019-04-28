import Vuex from 'vuex'

// TODO messageを保持したjsonを読み込むようにする
import text_json from '../assets/content/message.json'

export const state = () => ({
  breadcrumb_state: [{ name: '', path: '/' }],
  text: text_json['ja']
})
export const mutations = {
  change_page(state, breadcrumb_state) {
    state.breadcrumb_state = breadcrumb_state
  },
  change_lang(state, new_lang) {
    state.text = text_json[new_lang]
  }
}
