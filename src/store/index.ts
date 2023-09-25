// Import required modules
import { createStore, Store } from 'vuex';
import { InjectionKey } from 'vue';

// Define the root state interface
export interface RootState {
  user: {
    id: number | null;
    username: string | null;
    email: string | null;
    // Add other user-related properties here
  };
  isLoggedIn: boolean;
  // Add other root state properties here
}

// Define the injection key for the store
export const key: InjectionKey<Store<RootState>> = Symbol();

// Create the Vuex store instance
const store = createStore<RootState>({
  state: {
    user: {
      id: null,
      username: null,
      email: null,
    },
    isLoggedIn: false, // Initialize as not logged in
    // Initialize other root state properties here
  },
  mutations: {
    // Mutation to set the user when logged in
    setUser(state, user) {
      state.user = user;
      state.isLoggedIn = true;
    },
    // Mutation to clear the user and set as logged out
    clearUser(state) {
      state.user = {
        id: null,
        username: null,
        email: null,
      };
      state.isLoggedIn = false;
    },
    // Add other root mutations here
  },
  actions: {
    // Action to log in the user
    async login({ commit }, user) {
      try {
        // Perform login logic (e.g., make an API request), then commit the user to state
        // Example: Assuming user contains user data from the API response
        commit('setUser', user);
      } catch (error) {
        // Handle login error
        throw error;
      }
    },
    // Action to log out the user
    async logout({ commit }) {
      try {
        // Perform logout logic (e.g., clear user data), then commit the clearUser mutation
        // Example: Clear user data and access tokens
        commit('clearUser');
      } catch (error) {
        // Handle logout error
        throw error;
      }
    },
    // Add other root actions here
  },
  modules: {
    // Include your modules here
  },
});

// Define and export the useStore function
export function useStore() {
  return store as Store<RootState>;
}

export default store;
