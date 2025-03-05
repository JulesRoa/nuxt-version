<template>
  <div class="max-w-3xl mx-auto">
    <!-- Progress bar -->
    <div class="mb-8">
      <div class="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
        <div 
          class="h-full bg-gradient-to-r from-rose via-iris to-pine transition-all duration-500 ease-out"
          :style="{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }"
        ></div>
      </div>
      <div class="text-right text-sm text-gray-400 mt-2 lowercase">
        question {{ currentQuestionIndex + 1 }} of {{ questions.length }}
      </div>
    </div>

    <div :class="`transition-opacity duration-300 ${animation}`">
      <!-- Search query summary -->
      <div class="mb-8 p-4 rounded-md bg-gray-800 border border-gray-700">
        <p class="text-gray-400 lowercase">you searched for:</p>
        <p class="text-xl text-rose font-medium lowercase">{{ searchQuery || '' }}</p>
      </div>

      <!-- Current question -->
      <div class="mb-8" v-if="currentQuestion">
        <div class="flex items-center gap-2 mb-6">
          <h2 class="text-2xl impact gradient-text lowercase">
            <span class="text-white">
              {{ typeof currentQuestion.question === 'function' 
                ? currentQuestion.question(answers)
                : currentQuestion.question }}
            </span>
          </h2>
          <button 
            v-if="currentQuestion.explanation"
            type="button"
            @click="showExplanation = !showExplanation"
            class="text-gray-400 hover:text-rose transition-colors duration-200"
          >
            <HelpCircle :size="18" />
          </button>
        </div>
        
        <div v-if="showExplanation && currentQuestion.explanation" class="mb-6 p-4 rounded-xl bg-base/50 border border-yellow-400/30">
          <div class="flex items-start gap-3">
            <AlertCircle class="text-yellow-400 mt-1 flex-shrink-0" :size="18" />
            <p class="text-sm text-gray-300">{{ currentQuestion.explanation }}</p>
          </div>
        </div>
        
        <!-- Number/slider input type -->
        <div v-if="currentQuestion.type === 'slider' || currentQuestion.type === 'number'" class="mb-8 bg-base/50 p-8 rounded-xl border border-base-light">
          <!-- Current value display -->
          <div v-if="answers[currentQuestion.id]" class="text-center mb-8">
            <div class="inline-block bg-rose/10 px-6 py-3 rounded-lg border border-rose/20">
              <span class="text-3xl font-bold text-white">
                {{ currentQuestion.id === 'yearly_revenue' ? 
                  `$${parseInt(answers[currentQuestion.id] || '0').toLocaleString()}` : 
                  parseInt(answers[currentQuestion.id] || '0').toLocaleString() }}
              </span>
              <span class="text-gray-400 text-sm ml-1">
                {{ currentQuestion.id === 'yearly_revenue' ? '/ year' : ' leads / month' }}
              </span>
            </div>
          </div>

          <div class="relative">
            <input
              type="number"
              min="0"
              :placeholder="currentQuestion.id === 'yearly_revenue' ? 'enter your yearly revenue...' : 'enter number of monthly leads...'"
              v-model="answers[currentQuestion.id]"
              class="w-full p-4 rounded-lg bg-base border border-base-light text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rose focus:border-transparent transition-all duration-200"
            />
            <div v-if="currentQuestion.id === 'monthly_leads' && answers.monthly_leads" class="mt-8 p-6 rounded-xl bg-rose/10 border border-rose/30">
              <div class="flex items-center justify-between">
                <div>
                  <h4 class="text-sm text-gray-400 lowercase">current cost per lead</h4>
                  <div class="text-2xl font-bold text-rose mt-1">
                    ${{ (parseInt(answers.yearly_revenue || '0') / (parseInt(answers.monthly_leads || '0') * 12)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}
                  </div>
                </div>
                <div class="text-right">
                  <div class="text-sm text-gray-400 lowercase">yearly leads</div>
                  <div class="text-lg text-gray-300 mt-1">
                    {{ (parseInt(answers.monthly_leads || '0') * 12).toLocaleString() }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <button
            @click="handleNumberContinue"
            class="w-full mt-12 p-4 rounded-xl bg-rose/10 border border-rose/30 text-rose hover:bg-rose/20 transition-all duration-200 flex justify-center items-center gap-2 lowercase font-medium"
          >
            <span>continue</span>
            <ArrowRight :size="18" />
          </button>
        </div>

        <!-- Feedback popup -->
        <div v-if="showFeedback && currentQuestion.feedback && answers[currentQuestion.id]" class="fixed inset-0 flex items-center justify-center z-50 bg-base/50 backdrop-blur-sm">
          <div class="lightbox-feedback mx-4 p-6 rounded-xl bg-base/95 border border-rose/20">
            <div class="flex items-start gap-3">
              <div class="text-pine mt-1 transform scale-x-[-1]">
                <Footprints :size="20" />
              </div>
              <p class="text-gray-300">
                {{ feedbackText }}
              </p>
            </div>
          </div>
        </div>
        
        <!-- Custom input for "other" option -->
        <form v-if="isCustom" @submit.prevent="handleCustomSubmit" class="space-y-4">
          <input
            type="text"
            v-model="customInput"
            placeholder="please specify your business type..."
            class="w-full p-4 rounded-md bg-base border border-base-light text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rose focus:border-transparent transition-all duration-200 lowercase"
          />
          <div class="flex gap-4">
            <button
              type="submit"
              class="flex-1 p-4 rounded-md bg-rose/10 border border-rose/30 hover:bg-rose/20 transition-all duration-200 text-rose lowercase"
            >
              submit
            </button>
            <button
              type="button"
              @click="isCustom = false"
              class="p-4 rounded-md bg-base border border-base-light hover:border-rose/30 transition-all duration-200 text-gray-300 lowercase"
            >
              cancel
            </button>
          </div>
        </form>
        
        <!-- Standard options -->
        <div v-else-if="!isCustom && currentQuestion.options" class="space-y-4">
          <!-- MultiSelect options -->
          <div v-if="currentQuestion.multiSelect">
            <div v-if="showTraditionalTypes" class="space-y-3">
              <h3 class="text-xl impact mb-4 text-rose lowercase">what type of traditional marketing?</h3>
              <button
                v-for="(type, index) in traditionalMarketingTypes"
                :key="index"
                @click="() => handleTraditionalTypeSelect(type)"
                class="w-full text-left p-4 rounded-md bg-base border border-base-light hover:border-rose/30 hover:bg-base-light transition-all duration-200 flex justify-between items-center group lowercase"
              >
                <span>{{ type }}</span>
                <ArrowRight class="text-rose opacity-0 group-hover:opacity-100 transition-opacity" :size="18" />
              </button>
              <button
                @click="showTraditionalTypes = false"
                class="w-full mt-4 p-4 rounded-md bg-base border border-base-light hover:border-rose/30 transition-all duration-200 text-gray-300 lowercase"
              >
                back to marketing strategies
              </button>
            </div>
            
            <div v-else class="space-y-3">
              <!-- Paid search budget input -->
              <div v-if="showPaidSearchBudget" class="mb-6 p-6 rounded-xl bg-base/50 border border-yellow-400/30">
                <h3 class="text-xl font-semibold text-yellow-400 mb-4 lowercase">what's your current monthly paid search budget?</h3>
                <input
                  type="number"
                  v-model="paidSearchBudget"
                  placeholder="enter monthly budget in dollars..."
                  class="w-full p-4 rounded-md bg-base border border-base-light text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 lowercase"
                />
              </div>
              
              <!-- Multiselect options -->
              <button
                v-for="(option, index) in currentQuestion.options"
                :key="index"
                @click="() => handleMultiSelect(option)"
                :class="`w-full text-left p-4 rounded-md transition-all duration-200 flex justify-between items-center group lowercase
                  ${selectedOptions.includes(option) 
                    ? 'bg-rose/10 border-rose/30 border' 
                    : 'bg-base border border-base-light hover:border-rose/30 hover:bg-base-light'}`"
              >
                <span>{{ option }}</span>
                <div :class="`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors
                  ${selectedOptions.includes(option)
                    ? 'border-rose bg-rose/10'
                    : 'border-gray-500'}`"
                >
                  <div v-if="selectedOptions.includes(option)" class="w-2 h-2 rounded-sm bg-rose" />
                </div>
              </button>
              
              <!-- Continue button -->
              <button
                @click="handleContinue"
                :disabled="selectedOptions.length === 0 || isTransitioning"
                :class="`w-full mt-6 p-4 rounded-md transition-all duration-200 flex justify-center items-center gap-2 lowercase ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}
                  ${selectedOptions.length > 0
                    ? 'bg-rose/10 border-rose/30 border text-rose hover:bg-rose/20'
                    : 'bg-base border border-base-light text-gray-500 cursor-not-allowed'}`"
              >
                <span>continue</span>
                <ArrowRight :size="18" />
              </button>
            </div>
          </div>
          
          <!-- Single select options -->
          <div v-else>
            <button
              v-for="(option, index) in currentQuestion.options"
              :key="index"
              @click="() => handleOptionSelect(option)"
              :class="`w-full text-left p-4 rounded-md transition-all duration-200 flex justify-between items-center group lowercase 
                ${option === 'other' ? 'bg-yellow-400/10 border-yellow-400/30 hover:bg-yellow-400/20 hover:border-yellow-400/50' : ''}
                ${selectedOptions.includes(option) ? 'bg-rose/10 border-rose/30 border' : 'bg-base border border-base-light hover:border-rose/30 hover:bg-base-light'}`"
            >
              <span>{{ option }}</span>
              <div v-if="selectedOptions.includes(option)" class="w-5 h-5 rounded border-2 border-rose bg-rose/10 flex items-center justify-center">
                <div class="w-2 h-2 rounded-sm bg-rose" />
              </div>
              <ArrowRight v-else class="text-rose opacity-0 group-hover:opacity-100 transition-opacity" :size="18" />
            </button>
          
            <!-- Continue button -->
            <button
              v-if="selectedOptions.length > 0 && !currentQuestion.multiSelect"
              @click="() => !isTransitioning && handleContinue()"
              :disabled="isTransitioning"
              class="w-full mt-6 p-4 rounded-md bg-rose/10 border border-rose/30 text-rose hover:bg-rose/20 transition-all duration-200 flex justify-center items-center gap-2 lowercase"
            >
              <span>continue</span>
              <ArrowRight :size="18" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { ChevronRight, ArrowRight, Footprints, HelpCircle, AlertCircle } from 'lucide-vue-next';

interface Question {
  id: string;
  question: string | ((answers: Record<string, string>) => string);
  options?: string[];
  multiSelect?: boolean;
  feedback?: (answer: string) => string;
  type?: string;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  conditionalDisplay?: (answers: Record<string, string>) => boolean;
  explanation?: string;
}

const props = defineProps({
  onComplete: {
    type: Function,
    required: true
  },
  searchQuery: {
    type: String,
    required: true
  },
  savedAnswers: {
    type: Object,
    default: () => ({})
  }
});

// State variables
const currentQuestionIndex = ref(0);
const answers = ref<Record<string, string>>({
  ...props.savedAnswers,
  search_query: props.searchQuery
});
const selectedOptions = ref<string[]>([]);
const animation = ref('');
const customInput = ref('');
const isCustom = ref(false);
const showPaidSearchBudget = ref(false);
const paidSearchBudget = ref('0');
const feedbackText = ref('');
const isTransitioning = ref(false);
const showFeedback = ref(false);
const showExplanation = ref(false);
const showTraditionalTypes = ref(false);
const traditionalType = ref('');

// All questions
const allQuestions = ref<Question[]>([
  {
    id: 'business_type',
    question: 'what type of local business do you operate?',
    options: [
      'healthcare & medical',
      'real estate & construction',
      'retail & shopping',
      'restaurants & food service',
      'automotive services',
      'professional services',
      'beauty & personal care',
      'home services',
      'fitness & wellness',
      'education & training',
      'other'
    ],
    feedback: (answer) => {
      const responses: Record<string, string> = {
        'healthcare & medical': "healthcare marketing requires trust and credibility. we'll help you build both.",
        'real estate & construction': "property and construction need visual impact. let's showcase your projects effectively.",
        'retail & shopping': "retail success is all about customer experience. we'll help you create a seamless one.",
        'restaurants & food service': "food service thrives on local presence. we'll get you in front of hungry customers.",
        'automotive services': "auto services need reliability. we'll help establish your expertise.",
        'professional services': "professional services sell expertise. we'll position you as the go-to authority.",
        'beauty & personal care': "beauty is visual and personal. we'll help you connect emotionally with clients.",
        'home services': "home services need trust. we'll help you build a strong local reputation.",
        'fitness & wellness': "wellness is about transformation. we'll help you inspire and motivate.",
        'education & training': "education marketing is about outcomes. we'll showcase your success stories.",
        'other': "unique businesses need unique strategies. we'll create something perfect for you."
      };
      return responses[answer] || "we'll create a custom strategy for your specific industry.";
    }
  },
  {
    id: 'business_size',
    question: 'what is the size of your business?',
    options: ['1-10 employees', '11-50 employees', '51-200 employees', '201+ employees'],
    feedback: (answer) => {
      switch(answer) {
        case '1-10 employees':
          return "small team, big potential! we'll help you punch above your weight with smart automation.";
        case '11-50 employees':
          return "growing strong! time to streamline your marketing processes for the next phase of growth.";
        case '51-200 employees':
          return "substantial operation you've built! let's ensure your marketing scales with your team.";
        default:
          return "impressive scale! we'll help coordinate your marketing efforts across your organization.";
      }
    }
  },
  {
    id: 'business_age',
    question: 'how long have you been in business?',
    options: ['less than 1 year', '1-3 years', '4-10 years', 'over 10 years'],
    feedback: (answer) => {
      switch(answer) {
        case 'less than 1 year':
          return "new businesses need rapid growth strategies. we'll help you establish a strong foundation.";
        case '1-3 years':
          return "you've proven your concept. now let's scale it with systematic marketing.";
        case '4-10 years':
          return "established businesses need optimization and innovation. we'll fine-tune your marketing engine.";
        default:
          return "long-standing businesses need to balance tradition with innovation. we'll help you stay relevant.";
      }
    }
  },
  {
    id: 'yearly_revenue',
    question: 'what is your yearly revenue?',
    type: 'number',
    feedback: (answer) => {
      const revenue = parseInt(answer);
      if (revenue < 500000) {
        return "perfect starting point! we'll help you scale efficiently with targeted strategies.";
      } else if (revenue < 1000000) {
        return "solid foundation! we'll help you accelerate your growth with proven tactics.";
      } else if (revenue < 5000000) {
        return "impressive revenue! let's focus on scaling your success even further.";
      } else {
        return "substantial operation! we'll help you maintain and expand your market position.";
      }
    }
  },
  {
    id: 'monthly_leads',
    question: 'how many estimated leads do you currently get per month?',
    type: 'number',
    feedback: (answer) => {
      const monthlyLeads = parseInt(answer);
      const yearlyLeads = monthlyLeads * 12;
      const revenue = parseInt(answers.value.yearly_revenue || '0');
      const costPerLead = revenue / yearlyLeads;
      return `your current cost per lead is approximately $${costPerLead.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
    }
  },
  {
    id: 'profit_margin',
    question: 'what is your estimated profit margin?',
    options: ['under 10%', '10% - 20%', '20% - 30%', '30% - 40%', 'over 40%'],
    feedback: (answer) => {
      switch(answer) {
        case 'under 10%':
          return "that's a tight squeeze - we'll focus on strategies that maximize ROI while keeping costs lean.";
        case '10% - 20%':
          return "solid foundation! let's optimize your marketing spend to push those margins higher.";
        case '20% - 30%':
          return "healthy margins! we can reinvest some of that profit into growth-focused campaigns.";
        case '30% - 40%':
          return "excellent profitability! this gives us room to explore more aggressive growth strategies.";
        default:
          return "outstanding margins! we'll help you maintain this exceptional profitability while scaling up.";
      }
    }
  },
  {
    id: 'current_marketing',
    question: 'what marketing strategies are you currently using?',
    multiSelect: true,
    options: ['social media', 'email marketing', 'local seo', 'paid search', 'traditional marketing', 'none/minimal marketing'],
    feedback: (answers: string) => {
      const selected = answers.split(',');
      if (selected.includes('none/minimal marketing')) {
        return "starting fresh gives us a clean slate to build the perfect marketing mix for you.";
      }
      
      if (selected.length === 1) {
        const responses: Record<string, string> = {
          'social media': "great start with social! let's optimize your presence and expand to other channels.",
          'email marketing': "email is powerful! we'll help you segment and automate for better results.",
          'local seo': "smart focus on local SEO! let's dominate your local search results.",
          'paid search': "great investment in paid search! let's optimize your campaigns for better ROI.",
          'traditional marketing': "traditional marketing still works! we'll help you blend it with digital strategies."
        };
        return responses[selected[0]] || "";
      }
      
      return `impressive mix! you're already using ${selected.length} channels. let's optimize them and find new opportunities for growth.`;
    }
  },
  {
    id: 'marketing_challenges',
    question: "what's your biggest marketing challenge right now?",
    options: [
      'not enough leads or customers',
      'leads aren\'t converting to sales',
      'too expensive to acquire customers',
      'can\'t measure ROI of marketing',
      'not sure which channels work best',
      'lack of marketing expertise/staff',
      'keeping up with competitors',
      'other'
    ],
    feedback: (answer) => {
      const responses: Record<string, string> = {
        'not enough leads or customers': "we'll focus on lead generation strategies tailored to your industry and audience.",
        'leads aren\'t converting to sales': "let's implement conversion optimization and lead nurturing sequences.",
        'too expensive to acquire customers': "we'll audit your channels and optimize for better cost per acquisition.",
        'can\'t measure ROI of marketing': "our analytics and attribution model will give you crystal-clear ROI visibility.",
        'not sure which channels work best': "we'll test and analyze multiple channels to find your ideal marketing mix.",
        'lack of marketing expertise/staff': "we become your virtual marketing department with all the expertise you need.",
        'keeping up with competitors': "our competitive analysis tools will help you stay ahead of the market.",
        'other': "we'll dig deeper into your unique challenges during our consultation."
      };
      return responses[answer] || "we'll create a custom solution for your specific challenge.";
    },
    explanation: "Understanding your primary challenge helps us focus our strategy on solving your most pressing problem first. Each challenge requires a different approach and set of tactics."
  },
  {
    id: 'previous_efforts',
    question: "which marketing channels have you tried that didn't work well?",
    multiSelect: true,
    options: [
      'social media advertising',
      'search engine optimization (SEO)',
      'pay-per-click advertising',
      'email marketing',
      'content marketing',
      'traditional advertising',
      'influencer marketing',
      'direct mail',
      'none - haven\'t tried much yet',
      'all channels performed well'
    ],
    feedback: (answer) => {
      if (answer.includes('none - haven\'t tried much yet')) {
        return "having a clean slate is actually beneficial. we can build your strategy based on proven approaches.";
      }
      if (answer.includes('all channels performed well')) {
        return "excellent! we'll build on your successes and look for optimization opportunities.";
      }
      const channels = answer.split(',');
      return `understanding what hasn't worked helps us avoid those pitfalls. we'll analyze why ${channels.length > 1 ? 'these channels' : 'this channel'} underperformed and adjust our approach accordingly.`;
    },
    explanation: "Knowing which channels haven't performed well helps us avoid repeating unsuccessful tactics. Sometimes the issue isn't the channel itself but how it was implemented."
  },
  {
    id: 'tech_savvy',
    question: "how would you describe your team's marketing technology expertise?",
    options: [
      'beginners - need simple solutions',
      'intermediate - comfortable with common tools',
      'advanced - use multiple marketing systems',
      'experts - fully utilize marketing technology stack'
    ],
    feedback: (answer) => {
      const responses: Record<string, string> = {
        'beginners - need simple solutions': "we'll provide user-friendly solutions with plenty of guidance and training.",
        'intermediate - comfortable with common tools': "we'll build on your existing knowledge with semi-automated systems.",
        'advanced - use multiple marketing systems': "we'll integrate advanced automation with your existing marketing stack.",
        'experts - fully utilize marketing technology stack': "we'll implement cutting-edge strategies that leverage your technical expertise."
      };
      return responses[answer] || "";
    },
    explanation: "This helps us determine the complexity level of the solutions we'll implement and how much training or support you might need."
  },
  {
    id: 'sales_cycle',
    question: 'how long is your typical sales cycle?',
    options: [
      'immediate (same day)',
      'short (days to 2 weeks)',
      'medium (2 weeks to 2 months)',
      'long (2+ months)'
    ],
    conditionalDisplay: (answers) => {
      const businessType = answers.business_type?.toLowerCase() || '';
      // Skip for certain business types where sales cycle is typically immediate
      return !['restaurants & food service', 'retail & shopping'].includes(businessType);
    },
    feedback: (answer) => {
      const responses: Record<string, string> = {
        'immediate (same day)': "we'll focus on immediate conversion tactics and local visibility.",
        'short (days to 2 weeks)': "we'll implement short nurturing sequences with clear call-to-actions.",
        'medium (2 weeks to 2 months)': "our campaigns will nurture leads throughout this consideration period.",
        'long (2+ months)': "we'll design comprehensive lead nurturing journeys for your extended sales cycle."
      };
      return responses[answer] || "";
    },
    explanation: "Your sales cycle length determines our nurturing strategy and how we'll structure campaigns to maintain engagement throughout the buyer's journey."
  },
  {
    id: 'customer_lifetime_value',
    question: (answers) => {
      const businessType = answers.business_type?.toLowerCase() || '';
      const revenueStr = answers.yearly_revenue || '0';
      const revenue = parseInt(revenueStr.replace(/[^0-9]/g, ''));
      const monthlyLeadsStr = answers.monthly_leads || '0';
      const monthlyLeads = parseInt(monthlyLeadsStr);
      const yearlyLeads = monthlyLeads * 12;
      
      // Calculate average customer value
      const avgValue = yearlyLeads > 0 ? Math.round(revenue / yearlyLeads) : 0;
      
      return `what's the lifetime value of a typical customer? (your average transaction is ~$${avgValue.toLocaleString()})`;
    },
    options: [
      'under $500',
      '$500 - $2,000',
      '$2,000 - $10,000',
      '$10,000 - $50,000',
      'over $50,000'
    ],
    feedback: (answer) => {
      const responses: Record<string, string> = {
        'under $500': "for lower LTV customers, we'll focus on high-efficiency acquisition and retention strategies.",
        '$500 - $2,000': "this LTV range allows for more robust acquisition campaigns with retention focus.",
        '$2,000 - $10,000': "with this solid LTV, we can implement comprehensive acquisition and loyalty programs.",
        '$10,000 - $50,000': "high-value customers justify sophisticated personalized marketing approaches.",
        'over $50,000': "premium LTV enables us to deploy elite-level acquisition and relationship marketing."
      };
      return responses[answer] || "";
    },
    explanation: "Customer lifetime value dramatically impacts how much we can spend to acquire new customers. Higher LTV businesses can afford more aggressive customer acquisition strategies."
  },
  {
    id: 'goals',
    question: 'what are your primary marketing goals for the next 6 months?',
    multiSelect: true,
    options: [
      'increase foot traffic', 
      'generate more leads',
      'improve online visibility',
      'retain existing customers',
      'enter new markets',
      'launch new product/service',
      'build brand awareness',
      'reduce marketing costs'
    ],
    feedback: (answer) => {
      const goals = answer.split(',');
      if (goals.length === 1) {
        const responses: Record<string, string> = {
          'increase foot traffic': "local presence is key! we'll help drive qualified visitors to your door.",
          'generate more leads': "lead generation is our specialty. let's build your pipeline!",
          'improve online visibility': "visibility is the first step to growth. we'll get you found online!",
          'retain existing customers': "retention is smart business! we'll help you maximize customer lifetime value.",
          'enter new markets': "expansion requires precision targeting. we'll help you reach new audiences efficiently.",
          'launch new product/service': "successful launches need momentum. we'll create buzz around your offering.",
          'build brand awareness': "brand building is long-term growth. we'll increase your market recognition.",
          'reduce marketing costs': "efficiency is critical. we'll optimize your spend for maximum ROI."
        };
        return responses[goals[0]] || "";
      }
      return `focusing on ${goals.length} key goals will give us clear targets. we'll prioritize these objectives in our strategy.`;
    },
    explanation: "Your goals determine which metrics we'll prioritize and which tactics will be most effective for your needs."
  },
  {
    id: 'success_metrics',
    question: 'how do you primarily measure marketing success?',
    options: [
      'revenue growth',
      'lead quantity',
      'lead quality/conversion rate',
      'return on ad spend (ROAS)',
      'cost per acquisition (CPA)',
      'website traffic',
      'store traffic/foot traffic',
      'social media engagement',
      'brand awareness metrics'
    ],
    feedback: (answer) => {
      return `we'll make sure our reporting focuses on ${answer.toLowerCase()} while tracking complementary metrics to give you a complete picture of performance.`;
    },
    explanation: "This tells us which KPIs matter most to you and how we should structure our reporting to demonstrate value in terms that align with your business objectives."
  }
]);

// Traditional marketing types
const traditionalMarketingTypes = [
  'print advertising',
  'radio advertising',
  'television advertising',
  'direct mail',
  'billboards/outdoor',
  'trade shows/events',
  'other'
];

// Computed property to get filtered questions based on conditions
const questions = computed(() => {
  return allQuestions.value.filter(q => !q.conditionalDisplay || q.conditionalDisplay(answers.value));
});

// Current question
const currentQuestion = computed(() => {
  return questions.value[currentQuestionIndex.value];
});

// Methods
const handleMultiSelect = (option: string) => {
  if (option === 'none/minimal marketing') {
    selectedOptions.value = ['none/minimal marketing'];
    showPaidSearchBudget.value = false;
    return;
  }

  if (option === 'traditional marketing') {
    showTraditionalTypes.value = true;
    return;
  }
  
  selectedOptions.value = selectedOptions.value.includes('none/minimal marketing') ? 
    [option] : 
    selectedOptions.value.includes(option) ? 
      selectedOptions.value.filter(o => o !== option) : 
      [...selectedOptions.value, option];
      
  if (option === 'paid search') {
    showPaidSearchBudget.value = !selectedOptions.value.includes(option);
  }
};

const handleTraditionalTypeSelect = (type: string) => {
  setTraditionalType(type);
  selectedOptions.value = selectedOptions.value.filter(o => o !== 'traditional marketing');
  selectedOptions.value.push(`traditional marketing (${type})`);
  showTraditionalTypes.value = false;
};

const handleContinue = () => {
  if (selectedOptions.value.length === 0) return;
  
  const currentQ = currentQuestion.value;
  if (!currentQ || (showPaidSearchBudget.value && !paidSearchBudget.value)) return;
  
  // Show feedback if available
  if (currentQ.feedback) {
    const answer = selectedOptions.value.join(',');
    const feedback = currentQ.feedback(answer);
    feedbackText.value = feedback;
    showFeedback.value = true;
    isTransitioning.value = true;
    
    // Wait for feedback to be shown before continuing
    setTimeout(() => {
      showFeedback.value = false;
      isTransitioning.value = false;
      proceedToNextQuestion();
    }, 2000);
    return;
  }
  
  proceedToNextQuestion();
};

const handleNumberContinue = () => {
  const currentQ = currentQuestion.value;
  if (!currentQ) return;
  
  // Show feedback if available
  if (currentQ.feedback && answers.value[currentQ.id]) {
    const feedback = currentQ.feedback(answers.value[currentQ.id]);
    feedbackText.value = feedback;
    showFeedback.value = true;
    isTransitioning.value = true;
    
    // Wait for feedback to be shown before continuing
    setTimeout(() => {
      showFeedback.value = false;
      isTransitioning.value = false;
      setCurrentQuestionIndex(currentQuestionIndex.value + 1);
      setAnimation('animate-fadeIn');
    }, 2000);
    return;
  }
  
  setCurrentQuestionIndex(currentQuestionIndex.value + 1);
  setAnimation('animate-fadeIn');
};

const proceedToNextQuestion = () => {
  const answer = selectedOptions.value.join(',');
  const nextAnswers = {
    ...answers.value,
    [questions.value[currentQuestionIndex.value].id]: answer,
    ...(paidSearchBudget.value && { current_paid_search_budget: paidSearchBudget.value })
  };
  
  if (currentQuestionIndex.value < questions.value.length - 1) {
    answers.value = nextAnswers;
    currentQuestionIndex.value++;
    selectedOptions.value = [];
    showFeedback.value = false;
    animation.value = 'animate-fadeIn';
  } else {
    props.onComplete({
      ...nextAnswers,
      search_query: props.searchQuery
    });
  }
};

const handleOptionSelect = (option: string) => {
  const currentQ = currentQuestion.value;

  if (!currentQ) return;
  
  // Handle lead confirmation "no" response
  if (currentQ.id === 'yearly_leads_confirmation' && option === 'no, let me adjust') {
    currentQuestionIndex.value--;
    return;
  }
  
  if (currentQ.multiSelect) {
    handleMultiSelect(option);
    return;
  }

  if (currentQ.type === 'slider') {
    answers.value = {
      ...answers.value,
      [currentQ.id]: option
    };
    
    currentQuestionIndex.value++;
    
    return;
  }

  if (option === 'other') {
    isCustom.value = true;
    return;
  }
  
  // For non-multiSelect questions, set the selected option
  selectedOptions.value = [option];
};

const handleCustomSubmit = (e: Event) => {
  e.preventDefault();
  const currentQ = currentQuestion.value;
  if (!currentQ) return;
  
  if (customInput.value.trim()) {
    handleOptionSelect(customInput.value);
    isCustom.value = false;
    customInput.value = '';
  }
};

const setAnimation = (value: string) => {
  animation.value = value;
};

const setCurrentQuestionIndex = (value: number) => {
  currentQuestionIndex.value = value;
};

const setTraditionalType = (value: string) => {
  traditionalType.value = value;
};

onMounted(() => {
  setAnimation('animate-fadeIn');
});
</script>