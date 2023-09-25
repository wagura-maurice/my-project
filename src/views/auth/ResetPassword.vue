<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="max-w-md w-full px-6 py-8 bg-white shadow-md">
        <h2 class="text-2xl font-semibold text-center mb-6">Reset Password</h2>
  
        <!-- Form submission message -->
        <div v-if="message" :class="messageClass">{{ message }}</div>
  
        <!-- Reset password form -->
        <form @submit.prevent="handleSubmit">
          <!-- Password field -->
          <div class="mb-6">
            <label for="password" class="block text-gray-600">New Password</label>
            <input
              type="password"
              id="password"
              v-model="formData.password"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
  
          <!-- Confirm Password field -->
          <div class="mb-6">
            <label for="confirmPassword" class="block text-gray-600">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              v-model="formData.confirmPassword"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
  
          <!-- Reset Password button -->
          <div class="mb-6">
            <button
              type="submit"
              class="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
            >
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
    data() {
      return {
        formData: {
          password: '',
          confirmPassword: '',
        },
        message: '',
      };
    },
    computed: {
      messageClass() {
        return this.message.startsWith('Error') ? 'text-red-600' : 'text-green-600';
      },
    },
    methods: {
      handleSubmit() {
        // Example: You can perform form validation and password reset here.
        // For simplicity, let's assume the password is reset successfully.
        // Replace this with your actual password reset logic.
  
        if (this.formData.password !== this.formData.confirmPassword) {
          this.message = 'Error: Passwords do not match.';
          return;
        }
  
        // Simulate success
        this.message = 'Password reset successfully.';
        this.clearForm();
      },
      clearForm() {
        this.formData.password = '';
        this.formData.confirmPassword = '';
      },
    },
  });
  </script>
  
  <style scoped>
  /* Add component-specific styles here */
  </style>
  