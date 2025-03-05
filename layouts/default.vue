<template>
  <AppNavBar :clear-progress="clearProgress" :on-get-started="handleStartQuestionnaire" />
  <div class="relative md:pl-64">
    <div class="relative z-10">
      <slot />
    </div>
  </div>
  <AppFooter />
</template>

<script setup lang="ts">
const STORAGE_KEY = 'marketing_answers';

function clearProgress() {
  localStorage.removeItem(STORAGE_KEY);
  navigateTo('/');
}

function handleStartQuestionnaire() {
  // Start with a default search query if the user clicks "get started" without searching
  const defaultQuery = "marketing automation help";
  const newAnswers = { search_query: defaultQuery };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newAnswers));
  
  // Scroll to the top to ensure the user sees the questions
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  navigateTo('/qualify');
}
</script>