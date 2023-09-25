<template>
    <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md mx-auto">
        <h2 class="text-center text-3xl leading-9 font-extrabold text-gray-900">
          Contact Details
        </h2>
        <div class="mt-8 bg-white p-6 rounded-md shadow-sm">
          <div>
            <strong>Name:</strong> {{ contact.name }}
          </div>
          <div class="mt-2">
            <strong>Email:</strong> {{ contact.email }}
          </div>
          <div class="mt-2">
            <strong>Phone:</strong> {{ contact.phone }}
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    setup() {
      const contact = ref({
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1234567890'
      });
  
      // Fetch the contact details when the component is mounted.
      // Uncomment the following block to activate.
      /*
      onMounted(() => {
        fetch('API_URL_HERE').then((response) => {
          return response.json();
        }).then((data) => {
          contact.value = data;
        });
      });
      */
  
      return {
        contact
      };
    }
  });
  </script>
  
  <!-- If you want to add style scoped to this component -->
  <style scoped>
  </style>
  