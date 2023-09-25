<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="max-w-md w-full px-6 py-8 bg-white shadow-md">
        <h2 class="text-2xl font-semibold text-center mb-6">Sign Up</h2>
  
        <!-- Form submission message -->
        <div v-if="message" :class="messageClass">{{ message }}</div>
  
        <!-- Registration form -->
        <form @submit.prevent="handleSubmit">
          <!-- Username field -->
          <div class="mb-4">
            <label for="username" class="block text-gray-600">Username</label>
            <input
              type="text"
              id="username"
              v-model="formData.username"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
  
          <!-- Email field -->
          <div class="mb-4">
            <label for="email" class="block text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
  
          <!-- Password field -->
          <div class="mb-6">
            <label for="password" class="block text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              v-model="formData.password"
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
  
          <!-- Sign Up button -->
          <div class="mb-6">
            <button
              type="submit"
              class="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
            >
              Sign Up
            </button>
          </div>
  
          <!-- Sign In link -->
          <div class="text-center">
            <router-link to="/signin" class="text-indigo-600 hover:underline">Already have an account? Sign In</router-link>
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
          username: '',
          email: '',
          password: '',
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
        // Example: You can perform form validation and registration logic here.
        // For simplicity, let's assume successful registration.
        // Replace this with your actual registration logic.
  
        // Simulate successful registration
        this.message = 'Registration successful!';
        this.clearForm();
      },
      clearForm() {
        this.formData.username = '';
        this.formData.email = '';
        this.formData.password = '';
      },
    },
  });
  </script>
  
  <style scoped>
  /* Add component-specific styles here */
  </style>
  