<template>
    <nav class="bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="text-white text-2xl font-semibold">
              Dashboard
            </div>
          </div>
          <div class="flex items-center">
            <a href="#" class="text-white px-3 py-2 rounded-md text-sm font-medium">
              Home
            </a>
            <a href="#" class="text-white px-3 py-2 rounded-md text-sm font-medium">
              Settings
            </a>
            <a href="#" class="text-white px-3 py-2 rounded-md text-sm font-medium">
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    // No reactive data or methods needed for this static navbar
  });
  </script>
  
  <!-- If you want to add style scoped to this component -->
  <style scoped>
  </style>
  