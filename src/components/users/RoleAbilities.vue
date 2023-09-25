<template>
    <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-center text-3xl leading-9 font-extrabold text-gray-900">
          Role Abilities
        </h2>
        <form class="mt-8" @submit.prevent="updateRoleAbilities">
          <div class="rounded-md shadow-sm">
            <div>
              <label for="role" class="block text-sm font-medium text-gray-700">Select Role</label>
              <select id="role" v-model="selectedRole" class="form-select block w-full mt-1">
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>
            <div class="mt-4">
              <label class="block text-sm font-medium text-gray-700">Role Abilities</label>
              <div class="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div v-for="ability in abilities" :key="ability.id">
                  <label class="flex items-center">
                    <input type="checkbox" v-model="selectedAbilities" :value="ability.id" class="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out">
                    <span class="ml-2 text-gray-700">{{ ability.name }}</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
  
          <div class="mt-6">
            <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
              Update Role Abilities
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    setup() {
      const selectedRole = ref('admin'); // Default role
      const selectedAbilities = ref([]);
  
      // Simulated abilities data
      const abilities = [
        { id: 'read', name: 'Read' },
        { id: 'write', name: 'Write' },
        { id: 'delete', name: 'Delete' }
      ];
  
      const updateRoleAbilities = () => {
        // Logic to handle updating role abilities.
        console.log(`Updating abilities for role ${selectedRole.value}: ${selectedAbilities.value}`);
      };
  
      return {
        selectedRole,
        selectedAbilities,
        abilities,
        updateRoleAbilities
      };
    }
  });
  </script>
  
  <!-- If you want to add style scoped to this component -->
  <style scoped>
  </style>
  