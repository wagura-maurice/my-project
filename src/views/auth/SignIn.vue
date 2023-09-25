<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="max-w-md w-full px-6 py-8 bg-white shadow-md">
      <h2 class="text-2xl font-semibold text-center mb-6">Sign In</h2>

      <!-- Form submission message -->
      <div v-if="message" :class="messageClass">{{ message }}</div>

      <!-- Sign-in form -->
      <form @submit.prevent="handleSubmit">
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

        <!-- Sign In button -->
        <div class="mb-6">
          <button
            type="submit"
            class="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
          >
            Sign In
          </button>
        </div>

        <!-- Sign Up link -->
        <div class="text-center">
          <router-link to="/signup" class="text-indigo-600 hover:underline">Don't have an account? Sign Up</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from './../../store/index.ts'; // Import your Vuex store
import { useRouter } from 'vue-router'; // Import Vue Router for navigation

export default defineComponent({
  data() {
    return {
      formData: {
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
    async handleSubmit() {
      // Get the store and router instances
      const store = useStore();
      const router = useRouter();

      try {
        // Simulate a sign-in request (replace with your actual API call)
        const response = await store.dispatch('login', this.formData);

        // Check if the sign-in was successful
        if (response.success) {
          // Redirect to the dashboard or another route after successful sign-in
          router.push('/dashboard');
        } else {
          // Handle failed sign-in (e.g., show an error message)
          this.message = 'Error: Invalid email or password';
        }
      } catch (error) {
        // Handle other errors (e.g., network issues)
        this.message = 'Error: Something went wrong. Please try again later.';
      }
    },
    clearForm() {
      this.formData.email = '';
      this.formData.password = '';
    },
  },
});
</script>

<style scoped>
/* Add component-specific styles here */
</style>
