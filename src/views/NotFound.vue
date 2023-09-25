<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="max-w-md w-full">
        <div>
          <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Not Found
          </h2>
          <p class="mt-2 text-center text-sm leading-5 text-gray-600">
            The page you're looking for doesn't exist.
          </p>
        </div>
        <div class="mt-8">
          <div class="mt-6">
            <router-link to="/" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
              Go to Home
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({});
  </script>
  
  <!-- If you want to add style scoped to this component -->
  <style scoped>
  </style>
  