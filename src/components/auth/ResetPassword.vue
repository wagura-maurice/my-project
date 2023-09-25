<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full">
        <div>
          <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Reset your password
          </h2>
          <p class="mt-2 text-center text-sm leading-5 text-gray-600">
            Please enter your new password.
          </p>
        </div>
        <form class="mt-8" @submit.prevent="resetPassword">
          <div class="rounded-md shadow-sm">
            <div>
              <input aria-label="New Password" v-model="newPassword" name="newPassword" type="password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="New Password">
            </div>
            <div class="mt-2">
              <input aria-label="Confirm Password" v-model="confirmPassword" name="confirmPassword" type="password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Confirm Password">
            </div>
          </div>
  
          <div class="mt-6">
            <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
              Reset Password
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
      const newPassword = ref('');
      const confirmPassword = ref('');
  
      const resetPassword = () => {
        // Logic to handle reset password functionality.
        if (newPassword.value !== confirmPassword.value) {
          console.log('Passwords do not match');
          return;
        }
        console.log(`Resetting password with new password: ${newPassword.value}`);
      };
  
      return {
        newPassword,
        confirmPassword,
        resetPassword
      };
    }
  });
  </script>
  
  <!-- If you want to add style scoped to this component -->
  <style scoped>
  </style>
  