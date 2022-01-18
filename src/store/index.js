import Vue from 'vue'
import Vuex from 'vuex'
import localCache from 'utils/cache'
import { mapMenusRoutes } from 'utils/map-menus'
import router from 'router'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userMenus: []
  },
  mutations: {
    changeUserMenus(state, userMenus) {
      state.userMenus = userMenus
      //注册动态路由 
      const routes = mapMenusRoutes(userMenus)

      // 将routes => router.main.children
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    }
  },
  actions: {
    saveMenus({ commit }, payload) {
      commit('changeUserMenus', payload)
      localCache.setCache('userMenus', payload)
    },
    loadLocalLogin({ commit }) {
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
})

export function setupStore() {
  store.dispatch('loadLocalLogin')
  // console.log("st");
  //同步localstroe 和vuex数据，
}

export default store