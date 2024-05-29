import { defineStore } from "pinia";

export const useSessionStore = defineStore({
    id: 'session',
    state: () => ({
        user: null,
        isAuth: false,
    }),
    actions: {
        login(user) {
          this.user = user;
          this.isAuth = true;
        },
        logout() {
          this.user = null,
          this.isAuth = false
        }
    },
    getters: {
      getUser: (state) => state.user,
      getIsAuth: (state) => state.isAuth,
      getRole: (state) => state.user.role
    },
    persist: true
})