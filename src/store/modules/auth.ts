import { Module } from 'vuex';

interface User {
  id: number;
  username: string;
  email: string;
  // Add more user-related fields as needed
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

const authModule: Module<AuthState, RootState> = {
  namespaced: true,

  state: {
    user: null,
    isAuthenticated: false,
  },

  mutations: {
    setUser(state, user: User) {
      state.user = user;
      state.isAuthenticated = true;
    },

    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },

  actions: {
    login({ commit }, credentials: { username: string; password: string }) {
      // Perform authentication logic (e.g., API request)
      // If authentication is successful, commit 'setUser' mutation with the user data
      const user: User = {
        id: 1,
        username: credentials.username,
        email: 'user@example.com',
        // Add more user-related fields as needed
      };
      commit('setUser', user);
    },

    logout({ commit }) {
      // Perform logout logic (e.g., clear session)
      // Then commit 'logout' mutation to reset authentication state
      commit('logout');
    },
  },

  getters: {
    currentUser: (state) => state.user,
    isAuthenticated: (state) => state.isAuthenticated,
  },
};

export default authModule;
