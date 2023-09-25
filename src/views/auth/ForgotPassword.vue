<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="max-w-md w-full px-6 py-8 bg-white shadow-md">
        <h2 class="text-2xl font-semibold text-center mb-6">Forgot Password</h2>
  
        <!-- Form submission message -->
        <div v-if="message" :class="messageClass">{{ message }}</div>
  
        <!-- Forgot password form -->
        <form @submit.prevent="handleSubmit">
          <!-- Email field -->
          <div class="mb-6">
            <label for="email" class="block text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
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
  
          <!-- Sign In link -->
          <div class="text-center">
            <router-link to="/signin" class="text-indigo-600 hover:underline">Remembered your password? Sign In</router-link>
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
          email: '',
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
        // Example: You can perform form validation and send a password reset email here.
        // For simplicity, let's assume the email is sent successfully.
        // Replace this with your actual password reset logic.
  
        // Simulate success
        this.message = 'Password reset instructions sent to your email.';
        this.clearForm();
      },
      clearForm() {
        this.formData.email = '';
      },
    },
  });
  </script>
  
  <style scoped>
  /* Add component-specific styles here */
  </style>
  