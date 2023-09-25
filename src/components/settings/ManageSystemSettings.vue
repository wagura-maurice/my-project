<template>
    <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-center text-3xl leading-9 font-extrabold text-gray-900">
          Manage System Settings
        </h2>
        <form class="mt-8" @submit.prevent="updateSettings">
          <div class="rounded-md shadow-sm">
            <div class="mt-2">
              <label for="system_name" class="text-gray-700">System Name</label>
              <input id="system_name" aria-label="System Name" v-model="settings.systemName" name="systemName" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="System Name">
            </div>
            <div class="mt-2">
              <label for="notifications" class="text-gray-700">Enable Notifications</label>
              <input id="notifications" type="checkbox" v-model="settings.notifications" class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
            </div>
          </div>
  
          <div class="mt-6">
            <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
              Update Settings
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
      const settings = ref({
        systemName: 'My Awesome System',
        notifications: true
      });
  
      const updateSettings = () => {
        // Logic to handle updating system settings.
        console.log(`Updating settings: ${JSON.stringify(settings.value)}`);
      };
  
      return {
        settings,
        updateSettings
      };
    }
  });
  </script>
  
  <!-- If you want to add style scoped to this component -->
  <style scoped>
  </style>
  