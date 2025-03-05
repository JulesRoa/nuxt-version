<template>
  <div>
    <HeroSection 
      v-if="!showQuestions && !showPricing"
      :on-search="handleSearch" 
      :saved-answers="answers" 
      :on-clear-progress="clearProgress" 
      :on-get-started="handleStartQuestionnaire" 
    />

    <div v-if="showQuestions && !showPricing" class="container mx-auto px-4 py-16">
      <QualifyingQuestions 
        :on-complete="handleQuestionsComplete" 
        :search-query="searchQuery"
        :saved-answers="answers"
      />
    </div>

    <div v-if="showPricing" class="container mx-auto px-4 py-16">
      <PricingPlans 
        :answers="answers" 
        :on-save="handleSaveAnswers"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';

const STORAGE_KEY = 'marketing_answers';

// State
const searchQuery = ref('');
const showQuestions = ref(false);
const showPricing = ref(false);
const answers = ref<Record<string, string>>({
  search_query: ''
});

// Load initial state
onMounted(() => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    answers.value = JSON.parse(saved);
    // If answers include more than just search_query, user has completed some questions
    if (Object.keys(answers.value).length > 1) {
      showQuestions.value = true;
      searchQuery.value = answers.value.search_query || '';
    }
    
    // Check if they've answered enough to show pricing
    if (answers.value.business_type && answers.value.business_size && answers.value.yearly_revenue) {
      showPricing.value = true;
    }
  }
});

// For debugging
watch([answers, showPricing], () => {
  console.log("Current answers:", answers.value);
  console.log("Show pricing:", showPricing.value);
}, { deep: true });

// Methods
const handleSearch = (query: string) => {
  searchQuery.value = query;
  const newAnswers = { ...answers.value, search_query: query };
  answers.value = newAnswers;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newAnswers));
  showQuestions.value = true;
};

const handleStartQuestionnaire = () => {
  // Start with a default search query
  const defaultQuery = "marketing automation help";
  searchQuery.value = defaultQuery;
  const newAnswers = { ...answers.value, search_query: defaultQuery };
  answers.value = newAnswers;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newAnswers));
  showQuestions.value = true;
  showPricing.value = false;
  
  // Scroll to the top
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleQuestionsComplete = (questionAnswers: Record<string, string>) => {
  const newAnswers = {
    ...questionAnswers,
    search_query: answers.value.search_query // Preserve the initial search query
  };
  answers.value = newAnswers;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newAnswers));
  showPricing.value = true;
};

const handleSaveAnswers = (updatedAnswers: Record<string, string>) => {
  answers.value = updatedAnswers;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedAnswers));
};

const clearProgress = () => {
  localStorage.removeItem(STORAGE_KEY);
  answers.value = { search_query: '' };
  showQuestions.value = false;
  showPricing.value = false;
};
</script>