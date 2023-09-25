<!-- App.vue -->
<template>
  <WelcomeNavbar />
  <div class="mt-16">
    <!-- Include your navigation bar component here -->
    <router-view></router-view> <!-- Renders the content of the current route -->
  </div>
  <WelcomeFooter />
</template>

<script>
import WelcomeNavbar from './components/common/WelcomeNavbar.vue';
import WelcomeFooter from './components/common/WelcomeFooter.vue';

export default {
  components: {
    WelcomeNavbar,
    WelcomeFooter,
  },
};
</script>
