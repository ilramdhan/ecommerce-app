import {createStore} from "vuex";

const store = createStore({
    state: {
        test: '1234',
        isLogin: false,
    },
    mutations: {
        login(state) {
            state.isLogin = true;
        },
        logout(state) {
            state.isLogin = false;
        }
    },
    actions: {
        login(context) {
            context.commit('login');
        },
        logout(context) {
            context.commit('logout');
        }
    },
    getters: {
        isLogin(state) {
            return state.isLogin;
        }
    }
})

export default store
