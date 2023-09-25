<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="max-w-md w-full px-6 py-8 bg-white shadow-md">
        <h2 class="text-2xl font-semibold text-center mb-6">Verify Your Account</h2>
  
        <!-- Verification message -->
        <div v-if="message" :class="messageClass">{{ message }}</div>
  
        <!-- Verify account button -->
        <div class="mb-6">
          <button
            @click="verifyAccount"
            class="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
          >
            Verify Account
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    data() {
      return {
        message: '',
      };
    },
    computed: {
      messageClass() {
        return this.message.startsWith('Error') ? 'text-red-600' : 'text-green-600';
      },
    },
    methods: {
      verifyAccount() {
        // Example: You can perform account verification logic here.
        // For simplicity, let's assume the account is verified successfully.
        // Replace this with your actual verification logic.
  
        // Simulate success
        this.message = 'Account verified successfully.';
      },
    },
  });
  </script>
  
  <style scoped>
  /* Add component-specific styles here */
  </style>
  