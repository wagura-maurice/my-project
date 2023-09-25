<template>
    <aside class="bg-gray-800 h-screen w-64 fixed">
      <div class="text-white text-2xl font-semibold p-4">
        Dashboard
      </div>
      <nav class="text-white text-base font-semibold">
        <a href="#" class="block px-4 py-2 hover:bg-gray-700">
          Home
        </a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-700">
          Users
        </a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-700">
          Settings
        </a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-700">
          Logout
        </a>
      </nav>
    </aside>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    // No reactive data or methods needed for this static sidebar
  });
  </script>
  
  <!-- If you want to add style scoped to this component -->
  <style scoped>
  </style>
  