<template>
  <section class="bg-white relative">
    <!-- Background image slider -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="my-carousel-container" ref="carouselContainer">
        <div class="my-carousel" :style="{ transform: `translateX(${translate}px)` }">
          <div
            v-for="(image, index) in carouselImages"
            :key="image.id"
            class="my-carousel-slide"
            :style="{ left: `${index * slideWidth}px`, backgroundImage: `url(${image.url})` }"
          >
            <div class="image-overlay"></div> <!-- Add an overlay -->
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl relative">
      <h1 class="text-4xl font-bold leading-tight sm:text-5xl">Quisquam necessita vel
        <span class="text-violet-400">laborum doloribus</span> delectus
      </h1>
      <p class="px-8 mt-8 mb-12 text-lg">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
      <div class="flex flex-wrap justify-center">
        <button class="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-400 text-white">Get started</button>
        <button class="px-8 py-3 m-2 text-lg border rounded text-gray-900">Learn more</button>
      </div>
    </div>
  </section>
  <section class="bg-white">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-md sm:text-center">
          <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Sign up for our newsletter</h2>
          <p class="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
          <form action="#">
              <div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                  <div class="relative w-full">
                      <label for="email" class="hidden mb-2 text-sm font-medium text-gray-900">Email address</label>
                      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                      </div>
                      <input class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 focus:ring-4 focus:ring-primary-300" placeholder="Enter your email" type="email" id="email" required="">
                  </div>
                  <div>
                      <button type="submit" class="py-3 px-5 w-full text-sm font-semibold text-center text-dark rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">Subscribe</button>
                  </div>
              </div>
              <div class="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer">We care about the protection of your data. <a href="#" class="font-medium text-primary-600 hover:underline">Read our Privacy Policy</a>.</div>
          </form>
      </div>
  </div>
</section>

</template>

<script>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';

export default {
  setup() {
    const carouselImages = ref([
      { id: 1, url: 'https://images.freeimages.com/images/large-previews/f68/textures-2-1056465.jpg' },
      { id: 2, url: 'https://images.freeimages.com/images/large-previews/2c2/locust-tree-1193532.jpg' },
      { id: 3, url: 'https://images.freeimages.com/images/large-previews/3fe/marble-4-1563825.jpg' }
    ]);
    const currentIndex = ref(0);
    const slideWidth = ref(window.innerWidth);  // Initialize with the window width
    const carouselContainer = ref(null);

    const translate = computed(() => {
      return -currentIndex.value * slideWidth.value;
    });

    const calculateSlideWidth = () => {
      if (carouselContainer.value) {
        slideWidth.value = carouselContainer.value.offsetWidth;
      }
    };

    const autoSlide = () => {
      setInterval(() => {
        if (currentIndex.value < carouselImages.value.length - 1) {
          currentIndex.value++;
        } else {
          currentIndex.value = 0;
        }
      }, 5000);
    };

    onMounted(() => {
      calculateSlideWidth();
      window.addEventListener('resize', calculateSlideWidth);
      autoSlide();
    });

    onUnmounted(() => {
      window.removeEventListener('resize', calculateSlideWidth);
    });

    return {
      carouselImages,
      currentIndex,
      slideWidth,
      carouselContainer,
      translate,
    };
  },
};
</script>

<style scoped>
.my-carousel-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 400px; /* Adjust the height as needed */
}

.my-carousel {
  display: flex;
  transition: transform 0.3s ease;
  width: calc(100% * 3); /* Assuming 3 images in the carousel */
}

.my-carousel-slide {
  /* Remove 'flex' property */
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Adjust the opacity (last value) as needed */
  z-index: 1; /* Place the overlay above the image */
}
</style>