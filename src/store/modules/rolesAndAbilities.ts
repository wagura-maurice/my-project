import { Module } from 'vuex';

interface Role {
  id: number;
  name: string;
  // Add more role-related fields as needed
}

interface Ability {
  id: number;
  name: string;
  // Add more ability-related fields as needed
}

interface RolesAndAbilitiesState {
  roles: Role[];
  abilities: Ability[];
}

const rolesAndAbilitiesModule: Module<RolesAndAbilitiesState, RootState> = {
  namespaced: true,

  state: {
    roles: [],
    abilities: [],
  },

  mutations: {
    setRoles(state, roles: Role[]) {
      state.roles = roles;
    },

    setAbilities(state, abilities: Ability[]) {
      state.abilities = abilities;
    },

    addRole(state, role: Role) {
      state.roles.push(role);
    },

    addAbility(state, ability: Ability) {
      state.abilities.push(ability);
    },

    updateRole(state, updatedRole: Role) {
      const index = state.roles.findIndex((r) => r.id === updatedRole.id);
      if (index !== -1) {
        state.roles[index] = updatedRole;
      }
    },

    updateAbility(state, updatedAbility: Ability) {
      const index = state.abilities.findIndex((a) => a.id === updatedAbility.id);
      if (index !== -1) {
        state.abilities[index] = updatedAbility;
      }
    },

    deleteRole(state, roleId: number) {
      state.roles = state.roles.filter((r) => r.id !== roleId);
    },

    deleteAbility(state, abilityId: number) {
      state.abilities = state.abilities.filter((a) => a.id !== abilityId);
    },
  },

  actions: {
    fetchRoles({ commit }) {
      // Simulate fetching roles from an API
      const roles: Role[] = [
        { id: 1, name: 'Admin' },
        { id: 2, name: 'User' },
        // Add more roles as needed
      ];
      commit('setRoles', roles);
    },

    fetchAbilities({ commit }) {
      // Simulate fetching abilities from an API
      const abilities: Ability[] = [
        { id: 1, name: 'Read' },
        { id: 2, name: 'Write' },
        // Add more abilities as needed
      ];
      commit('setAbilities', abilities);
    },

    addNewRole({ commit }, newRole: Role) {
      // Simulate adding a new role to the server or database
      // Then commit 'addRole' mutation with the new role data
      commit('addRole', newRole);
    },

    addNewAbility({ commit }, newAbility: Ability) {
      // Simulate adding a new ability to the server or database
      // Then commit 'addAbility' mutation with the new ability data
      commit('addAbility', newAbility);
    },

    updateExistingRole({ commit }, updatedRole: Role) {
      // Simulate updating an existing role on the server or database
      // Then commit 'updateRole' mutation with the updated role data
      commit('updateRole', updatedRole);
    },

    updateExistingAbility({ commit }, updatedAbility: Ability) {
      // Simulate updating an existing ability on the server or database
      // Then commit 'updateAbility' mutation with the updated ability data
      commit('updateAbility', updatedAbility);
    },

    deleteRoleById({ commit }, roleId: number) {
      // Simulate deleting a role from the server or database
      // Then commit 'deleteRole' mutation with the role ID
      commit('deleteRole', roleId);
    },

    deleteAbilityById({ commit }, abilityId: number) {
      // Simulate deleting an ability from the server or database
      // Then commit 'deleteAbility' mutation with the ability ID
      commit('deleteAbility', abilityId);
    },
  },

  getters: {
    getAllRoles: (state) => state.roles,
    getAllAbilities: (state) => state.abilities,
  },
};

export default rolesAndAbilitiesModule;
