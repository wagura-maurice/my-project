<template>
    <div class="bg-gray-800 py-4">
      <div class="container mx-auto text-center">
        <p class="text-white text-sm">
          © 2023 Your Company. All rights reserved.
        </p>
        <div class="mt-2">
          <a href="#" class="text-indigo-400 hover:text-indigo-300 text-sm">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    // No reactive data or methods needed for this static footer
  });
  </script>
  
  <!-- If you want to add style scoped to this component -->
  <style scoped>
  .container {
    @apply px-4;
  }
  </style>
  