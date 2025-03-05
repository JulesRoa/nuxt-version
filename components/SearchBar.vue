<template>
  <form @submit.prevent="handleSubmit" class="w-full max-w-2xl mx-auto">
    <div class="relative">
      <input
        type="text"
        v-model="query"
        placeholder="what marketing challenge can we help you with?"
        class="w-full py-4 px-6 pr-12 rounded-md bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 lowercase"
      />
      <button 
        type="submit" 
        class="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-400 hover:text-yellow-300 transition-colors"
      >
        <Search :size="24" />
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Search } from 'lucide-vue-next';

const props = defineProps({
  onSearch: {
    type: Function,
    required: true
  }
});

const query = ref('');

const handleSubmit = () => {
  if (query.value.trim()) {
    props.onSearch(query.value);
  }
};
</script>