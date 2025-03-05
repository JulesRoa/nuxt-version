<template>
  <div class="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
    <!-- Title with scrolling animation - no flashlight effect -->
    <div class="fixed top-0 left-0 w-full overflow-hidden whitespace-nowrap z-10 pointer-events-none">
      <h1 
        class="text-[360px] impact lowercase animate-scroll inline-block"
        style="color: rgba(255, 255, 255, 0.9); letter-spacing: 0.02em; text-shadow: 0 0 30px rgba(0, 255, 140, 0.15); opacity: 0.2;"
      >
        it's just good marketing<span class="text-yellow-400 drop-shadow-[0_0_30px_rgba(234,179,8,0.8)]" style="text-shadow: 0 0 30px rgba(234,179,8,0.8)">.</span> it's just good marketing<span class="text-yellow-400 drop-shadow-[0_0_30px_rgba(234,179,8,0.8)]" style="text-shadow: 0 0 30px rgba(234,179,8,0.8)">.</span> it's just good marketing<span class="text-yellow-400 drop-shadow-[0_0_30px_rgba(234,179,8,0.8)]" style="text-shadow: 0 0 30px rgba(234,179,8,0.8)">.</span> it's just good marketing<span class="text-yellow-400 drop-shadow-[0_0_30px_rgba(234,179,8,0.8)]" style="text-shadow: 0 0 30px rgba(234,179,8,0.8)">.</span>
      </h1>
    </div>
    
    <!-- Hero content -->
    <div class="relative z-20 max-w-4xl w-full text-center mt-[55vh]">
      <p class="text-xl md:text-2xl mb-12 text-white lowercase max-w-3xl mx-auto">
        we deliver results to smb's through marketing automation. it's like going from a stick to auto
      </p>
      
      <form @submit.prevent="handleSubmit" class="w-full max-w-2xl mx-auto mb-16">
        <div class="relative" ref="searchContainerRef">
          <input
            type="text"
            v-model="query"
            @input="handleQueryChange"
            @focus="() => showSuggestions = !!query.trim()"
            placeholder="what marketing challenge can we help you with?"
            class="w-full py-4 px-6 pr-12 rounded-t-md bg-base/80 border border-pine/30 text-pine placeholder-gray-400 focus:outline-none transition-all duration-200 lowercase backdrop-blur-sm"
          />
          <button 
            type="submit" 
            class="absolute right-3 top-1/2 transform -translate-y-1/2 text-pine hover:text-pine-light transition-colors"
          >
            <Search :size="24" />
          </button>
          
          <!-- Common Challenges Dropdown -->
          <div v-if="showSuggestions" class="absolute w-full bg-base border border-t-0 border-base-light rounded-b-md shadow-lg z-50 max-h-80 overflow-y-auto">
            <div class="sticky top-0 bg-base border-b border-base-light">
              <div class="p-3">
                <p class="text-sm text-gray-400 lowercase flex items-center gap-2">
                  <Target :size="14" class="text-rose" />
                  popular searches:
                </p>
              </div>
            </div>
            <button
              v-for="(challenge, index) in filteredSuggestions"
              :key="index"
              @click="() => handleSuggestionClick(challenge)"
              :class="`w-full text-left px-4 py-3 hover:bg-base-light transition-colors duration-200 flex items-center gap-2 group lowercase
                ${challenge.toLowerCase().startsWith(query.toLowerCase()) 
                  ? 'text-pine' 
                  : 'text-yellow-200/70'}`"
            >
              <Search 
                :size="16" 
                :class="`${challenge.toLowerCase().startsWith(query.toLowerCase())
                  ? 'text-pine group-hover:text-pine-light'
                  : 'text-gray-500 group-hover:text-rose'} 
                  transition-colors duration-200`"
              />
              <span>{{ challenge }}</span>
            </button>
            <div v-if="query.trim() && filteredSuggestions.length === 0" class="px-4 py-3 text-gray-500 italic lowercase">
              no matching queries found
            </div>
          </div>
        </div>
      </form>
      
      <!-- Feature Tiles -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-32 max-w-3xl mx-auto">
        <div 
          class="feature-tile group"
          @mouseenter="hoveredTile = 0"
          @mouseleave="hoveredTile = null"
        >
          <div class="tile-bg-gradient" />
          <div class="tile-floating-blob -right-8 -top-8" />
          <div class="tile-content text-left">
            <div class="flex items-start gap-4">
              <div class="group-hover:scale-110 transition-transform duration-500">
                <BarChart3 class="text-yellow-400" :size="24" />
              </div>
              <div>
                <h3 class="text-xl impact text-yellow-400 lowercase">campaign automation</h3>
                <p class="text-sm text-white mt-2">we automate your campaign maintenance tasks using AI, where you don't need to pay 3 other marketing managers.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div 
          class="feature-tile group"
          @mouseenter="hoveredTile = 1"
          @mouseleave="hoveredTile = null"
        >
          <div class="tile-bg-gradient" />
          <div class="tile-floating-blob -left-8 -bottom-8" />
          <div class="tile-content text-left">
            <div class="flex items-start gap-4">
              <div class="group-hover:scale-110 transition-transform duration-500">
                <Target class="text-blue-500" :size="24" />
              </div>
              <div>
                <h3 class="text-xl impact text-blue-500 lowercase">data analytics done right</h3>
                <p class="text-sm text-white mt-2">we show you only what matters to you. No more bullsh*t vanity metrics, just the truth.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div 
          class="feature-tile group"
          @mouseenter="hoveredTile = 2"
          @mouseleave="hoveredTile = null"
        >
          <div class="tile-bg-gradient" />
          <div class="tile-floating-blob -right-8 -bottom-8" />
          <div class="tile-content text-left">
            <div class="flex items-start gap-4">
              <div class="group-hover:scale-110 transition-transform duration-500">
                <Zap class="text-iris" :size="24" />
              </div>
              <div>
                <h3 class="text-xl impact text-iris lowercase">lead scoring</h3>
                <p class="text-sm text-white mt-2">implement a lead scoring system that shows you your most profitable channels</p>
              </div>
            </div>
          </div>
        </div>
        
        <div 
          class="feature-tile group"
          @mouseenter="hoveredTile = 3"
          @mouseleave="hoveredTile = null"
        >
          <div class="tile-bg-gradient" />
          <div class="tile-floating-blob -left-8 -top-8" />
          <div class="tile-content text-left">
            <div class="flex items-start gap-4">
              <div class="group-hover:scale-110 transition-transform duration-500">
                <Database class="text-pine" :size="24" />
              </div>
              <div>
                <h3 class="text-xl impact text-pine lowercase">data lake attribution</h3>
                <p class="text-sm text-white mt-2">we combine all your data and leads into 1 place, so you can actually understand what's going on</p>
              </div>
            </div>
            <div class="tesseract">
              <!-- Yellow tesseract -->
              <div class="tesseract-inner">
                <div class="tesseract-face"></div>
                <div class="tesseract-face"></div>
                <div class="tesseract-face"></div>
                <div class="tesseract-face"></div>
                <div class="tesseract-face"></div>
                <div class="tesseract-face"></div>
              </div>
              <!-- Cyan tesseract -->
              <div class="tesseract-inner">
                <div class="tesseract-face"></div>
                <div class="tesseract-face"></div>
                <div class="tesseract-face"></div>
                <div class="tesseract-face"></div>
                <div class="tesseract-face"></div>
                <div class="tesseract-face"></div>
              </div>
              <!-- Purple tesseract -->
              <div class="tesseract-inner">
                <div class="tesseract-face"></div>
                <div class="tesseract-face"></div>
                <div class="tesseract-face"></div>
                <div class="tesseract-face"></div>
                <div class="tesseract-face"></div>
                <div class="tesseract-face"></div>
              </div>
              <!-- Green tesseract -->
              <div class="tesseract-inner">
                <div class="tesseract-face"></div>
                <div class="tesseract-face"></div>
                <div class="tesseract-face"></div>
                <div class="tesseract-face"></div>
                <div class="tesseract-face"></div>
                <div class="tesseract-face"></div>
              </div>
              <!-- Pink tesseract -->
              <div class="tesseract-inner">
                <div class="tesseract-face"></div>
                <div class="tesseract-face"></div>
                <div class="tesseract-face"></div>
                <div class="tesseract-face"></div>
                <div class="tesseract-face"></div>
                <div class="tesseract-face"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { Search, BarChart3, Target, Zap, Database, ArrowRight } from 'lucide-vue-next';

const props = defineProps({
  onSearch: {
    type: Function,
    required: true
  },
  savedAnswers: {
    type: Object,
    default: () => ({})
  },
  onClearProgress: {
    type: Function,
    default: () => {}
  },
  onGetStarted: {
    type: Function,
    default: () => {}
  }
});

// State
const query = ref('');
const hoveredTile = ref<number | null>(null);
const showSuggestions = ref(false);
const filteredSuggestions = ref<string[]>([]);
const searchContainerRef = ref<HTMLDivElement | null>(null);

const commonChallenges = [
  // Paid Search
  "need help with google ads campaigns",
  "google ads setup",
  "google ads help",
  "how to optimize my google ads budget?",
  "setup microsoft/bing ads for my business",
  "setup bing advertising",
  "improve my paid search ROI",
  "reduce cost per click in google ads",
  "google ads not working",
  "adwords optimization help",
  
  // Social Media Advertising
  "setup facebook ads for my business",
  "facebook ads help",
  "create instagram ad campaigns",
  "instagram ads setup",
  "how to advertise on tiktok?",
  "tiktok marketing",
  "meta ads strategy for local business",
  "facebook business manager help",
  "linkedin advertising for b2b",
  "pinterest ads for retail business",
  "twitter ads worth it for local business?",
  
  // Display & Video
  "youtube advertising strategy",
  "youtube ads setup",
  "google display network campaigns",
  "retargeting ads setup",
  
  // SEO Specific
  "local seo optimization",
  "google maps ranking help",
  "google maps optimization",
  "google maps ranking",
  "improve google my business ranking",
  "google business profile help",
  "local search optimization",
  "website seo audit",
  "technical seo help",
  "local citations building",
  "seo keyword research",
  "local business schema markup",
  "google business profile optimization",
  
  // General Marketing
  "how can I improve my local SEO rankings?",
  "need help with social media marketing",
  "want to increase foot traffic to my store",
  "looking for better lead generation",
  "how to compete with bigger businesses?",
  "need help with online reputation management",
  "want to automate my marketing",
  "how to get more customer reviews?",
  "setup email marketing campaigns",
  "how to measure marketing ROI?",
  "marketing automation setup"
];

const handleSubmit = () => {
  if (query.value.trim()) {
    props.onSearch(query.value);
    showSuggestions.value = false;
  }
};

const handleQueryChange = () => {
  const value = query.value;
  
  if (value.trim()) {
    // Filter suggestions
    const filtered = commonChallenges.filter(suggestion =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );

    // Remove duplicates and sort by relevance
    const uniqueFiltered = Array.from(new Set(filtered)).sort((a, b) => {
      const aStartsWith = a.toLowerCase().startsWith(value.toLowerCase());
      const bStartsWith = b.toLowerCase().startsWith(value.toLowerCase());
      if (aStartsWith && !bStartsWith) return -1;
      if (!aStartsWith && bStartsWith) return 1;
      return a.length - b.length;
    });

    filteredSuggestions.value = filtered;
    showSuggestions.value = true;
  } else {
    // When no input, hide suggestions
    filteredSuggestions.value = [];
    showSuggestions.value = false;
  }
};

const handleSuggestionClick = (suggestion: string) => {
  query.value = suggestion;
  showSuggestions.value = false;
  props.onSearch(suggestion);
};

onMounted(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (searchContainerRef.value && !searchContainerRef.value.contains(event.target as Node)) {
      showSuggestions.value = false;
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', () => {});
});
</script>