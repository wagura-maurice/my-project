<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full">
        <div>
          <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form class="mt-8" @submit.prevent="login">
          <input type="hidden" name="remember" value="true">
          <div class="rounded-md shadow-sm">
            <div>
              <input aria-label="Email address" v-model="email" name="email" type="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Email address">
            </div>
            <div class="mt-2">
              <input aria-label="Password" v-model="password" name="password" type="password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Password">
            </div>
          </div>
  
          <div class="mt-6">
            <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
              Sign In
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
      const email = ref('');
      const password = ref('');
  
      const login = () => {
        // Logic to handle login functionality.
        console.log(`Logging in with email: ${email.value} and password: ${password.value}`);
      };
  
      return {
        email,
        password,
        login
      };
    }
  });
  </script>
  
  <!-- If you want to add style scoped to this component -->
  <style scoped>
  </style>
  