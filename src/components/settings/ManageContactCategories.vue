Certainly! Below is a TypeScript-enabled Vue.js example for a "ManageContactCategories" page using Tailwind CSS. The example includes a simple form for adding new categories and a list to display existing categories.

```vue
<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-center text-3xl leading-9 font-extrabold text-gray-900">
        Manage Contact Categories
      </h2>
      <div class="mt-8">
        <form @submit.prevent="addCategory">
          <div class="rounded-md shadow-sm">
            <input aria-label="New Category" v-model="newCategory" name="newCategory" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="New Category">
          </div>
          <div class="mt-6">
            <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
              Add Category
            </button>
          </div>
        </form>

        <div class="mt-8">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Existing Categories
          </h3>
          <ul class="mt-4">
            <li v-for="category in categories" :key="category.id" class="bg-white p-4 rounded-md shadow-sm my-2">
              {{ category.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const newCategory = ref('');
    const categories = ref([
      { id: 1, name: 'Friends' },
      { id: 2, name: 'Family' },
      // Add more sample categories here...
    ]);

    const addCategory = () => {
      // Logic to handle adding a new category.
      const newId = categories.value.length + 1;
      categories.value.push({ id: newId, name: newCategory.value });
      newCategory.value = ''; // Clear the input
    };

    return {
      newCategory,
      categories,
      addCategory
    };
  }
});
</script>

<!-- If you want to add style scoped to this component -->
<style scoped>
</style>
