<template>
  <header 
    :class="`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm ${
      scrolled ? 'bg-base-dark/80 border-b border-pine/20' : 'bg-transparent'
    }`"
  >
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink
          to="/" 
          class="text-2xl impact text-rose flex items-center gap-2 transition-colors duration-300 hover:text-pine"
          @click="clearProgress"
        >
          <span>we do things that just make sense</span>
          <Zap class="text-pine" :size="20" />
        </NuxtLink>

        <!-- Mobile Menu Toggle -->
        <button class="md:hidden text-gray-300 hover:text-pine transition-colors" @click="toggleMenu">
          <component :is="isMenuOpen ? 'X' : 'Menu'" :size="24" />
        </button>
        
        <!-- Desktop CTA -->
        <div class="hidden md:block">
          <button 
            @click="onGetStarted"
            class="text-sm px-4 py-2 bg-rose/10 border border-rose/30 text-rose rounded-lg flex items-center gap-2 transition-all duration-300 hover:bg-rose/20"
          >
            <span>get started</span>
            <ArrowRight :size="14" />
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Left Side Navigation -->
  <div :class="`fixed left-0 top-0 bottom-0 z-40 transition-all duration-300 transform ${isMenuOpen || windowWidth >= 768 ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`">
    <div class="h-full w-64 bg-base-dark/95 border-r border-pine/20 backdrop-blur-sm pt-20 flex flex-col justify-between">
      <!-- Main Menu Links -->
      <nav class="p-6">
        <ul class="space-y-4">
          <li>
            <NuxtLink 
              to="/campaign-automation" 
              :class="`flex items-center gap-3 py-3 px-4 rounded-lg transition-colors duration-200 ${
                route.path === '/campaign-automation' 
                  ? 'bg-yellow-400/10 text-yellow-400' 
                  : 'text-gray-300 hover:bg-yellow-400/10 hover:text-yellow-400'
              }`"
            >
              <Target :size="18" /> 
              <span>campaign automation</span>
            </NuxtLink>
          </li>
          
          <li>
            <NuxtLink 
              to="/data-analytics" 
              :class="`flex items-center gap-3 py-3 px-4 rounded-lg transition-colors duration-200 ${
                route.path === '/data-analytics' 
                  ? 'bg-blue-500/10 text-blue-500' 
                  : 'text-gray-300 hover:bg-blue-500/10 hover:text-blue-500'
              }`"
            >
              <BarChart3 :size="18" /> 
              <span>data analytics</span>
            </NuxtLink>
          </li>
          
          <li>
            <NuxtLink 
              to="/lead-scoring" 
              :class="`flex items-center gap-3 py-3 px-4 rounded-lg transition-colors duration-200 ${
                route.path === '/lead-scoring' 
                  ? 'bg-iris/10 text-iris' 
                  : 'text-gray-300 hover:bg-iris/10 hover:text-iris'
              }`"
            >
              <Zap :size="18" /> 
              <span>lead scoring</span>
            </NuxtLink>
          </li>
          
          <li>
            <NuxtLink 
              to="/data-lake-attribution" 
              :class="`flex items-center gap-3 py-3 px-4 rounded-lg transition-colors duration-200 ${
                route.path === '/data-lake-attribution' 
                  ? 'bg-pine/10 text-pine' 
                  : 'text-gray-300 hover:bg-pine/10 hover:text-pine'
              }`"
            >
              <Database :size="18" /> 
              <span>data lake attribution</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
      
      <!-- Bottom CTA -->
      <div class="p-6 border-t border-pine/10">
        <button 
          @click="onGetStarted"
          class="w-full py-3 px-4 bg-rose/10 border border-rose/30 text-rose rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:bg-rose/20"
        >
          <span>get started</span>
          <ArrowRight :size="16" />
        </button>
      </div>
    </div>
    
    <!-- Semi-transparent overlay for mobile -->
    <div 
      v-if="isMenuOpen"
      class="fixed inset-0 bg-base-dark/50 z-[-1] md:hidden"
      @click="isMenuOpen = false"
    ></div>
  </div>
  
  <!-- Push content to the right on desktop -->
  <div class="md:pl-64 transition-all duration-300">
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed, watch } from 'vue';
import { BarChart3, Target, Zap, Database, ArrowRight, Menu, X } from 'lucide-vue-next';
import { useRoute } from 'vue-router';

const props = defineProps({
  clearProgress: {
    type: Function,
    default: () => {}
  },
  onGetStarted: {
    type: Function,
    default: () => {}
  }
});

const route = useRoute();
const isMenuOpen = ref(false);
const scrolled = ref(false);
const windowWidth = ref(0);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleScroll = () => {
  scrolled.value = window.scrollY > 20;
};

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);
  handleResize(); // Initialize on mount
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
});

// Close mobile menu on route change
watch(() => route.path, () => {
  isMenuOpen.value = false;
});
</script>