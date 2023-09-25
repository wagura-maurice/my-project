<template>
    <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-center text-3xl leading-9 font-extrabold text-gray-900">
          Contact List
        </h2>
        <div class="mt-8">
          <ul>
            <li v-for="contact in contacts" :key="contact.id" class="bg-white p-4 rounded-md shadow-sm my-2">
              <div>
                <strong>Name:</strong> {{ contact.name }}
              </div>
              <div class="mt-2">
                <strong>Email:</strong> {{ contact.email }}
              </div>
              <div class="mt-2">
                <strong>Phone:</strong> {{ contact.phone }}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    setup() {
      const contacts = ref([
        { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '+1234567890' },
        { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com', phone: '+0987654321' },
        // Add more sample contacts here...
      ]);
  
      // Fetch the contact list when the component is mounted.
      // Uncomment the following block to activate.
      /*
      onMounted(() => {
        fetch('API_URL_HERE').then((response) => {
          return response.json();
        }).then((data) => {
          contacts.value = data;
        });
      });
      */
  
      return {
        contacts
      };
    }
  });
  </script>
  
  <!-- If you want to add style scoped to this component -->
  <style scoped>
  </style>
  