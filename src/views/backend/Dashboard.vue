<template>
    <div class="min-h-screen bg-gray-100">
      <!-- Main content container -->
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <!-- Widget 1 - Example Card -->
          <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div class="p-6">
              <div class="flex items-center">
                <div class="ml-4 text-lg leading-7 font-semibold">Widget 1</div>
              </div>
              <!-- Widget content goes here -->
            </div>
          </div>
  
          <!-- Widget 2 - Example Card -->
          <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div class="p-6">
              <div class="flex items-center">
                <div class="ml-4 text-lg leading-7 font-semibold">Widget 2</div>
              </div>
              <!-- Widget content goes here -->
            </div>
          </div>
  
          <!-- Widget 3 - Example Card -->
          <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div class="p-6">
              <div class="flex items-center">
                <div class="ml-4 text-lg leading-7 font-semibold">Widget 3</div>
              </div>
              <!-- Widget content goes here -->
            </div>
          </div>
  
          <!-- Add more widgets as needed -->
  
        </div>
  
        <!-- Statistics Section - Example -->
        <div class="mt-8">
          <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div class="p-6">
              <div class="flex items-center">
                <div class="ml-4 text-lg leading-7 font-semibold">Statistics</div>
              </div>
              <!-- Statistics content goes here -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    setup() {
      // Your data and logic can be added here
  
      return {};
    },
  });
  </script>
  
  <!-- If you want to add style scoped to this component -->
  <style scoped>
  </style>
  