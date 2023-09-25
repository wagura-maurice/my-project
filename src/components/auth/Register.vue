<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full">
        <div>
          <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Create a new account
          </h2>
        </div>
        <form class="mt-8" @submit.prevent="register">
          <div class="rounded-md shadow-sm">
            <div>
              <input aria-label="Username" v-model="username" name="username" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Username">
            </div>
            <div class="mt-2">
              <input aria-label="Email address" v-model="email" name="email" type="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Email address">
            </div>
            <div class="mt-2">
              <input aria-label="Password" v-model="password" name="password" type="password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Password">
            </div>
          </div>
          <div class="mt-6">
            <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
              Register
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
      const username = ref('');
      const email = ref('');
      const password = ref('');
  
      const register = () => {
        // Logic to handle registration functionality.
        console.log(`Registering with username: ${username.value}, email: ${email.value}, and password: ${password.value}`);
      };
  
      return {
        username,
        email,
        password,
        register
      };
    }
  });
  </script>
  
  <!-- If you want to add style scoped to this component -->
  <style scoped>
  </style>
  