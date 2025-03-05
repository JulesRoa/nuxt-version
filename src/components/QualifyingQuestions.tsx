import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ArrowRight, Footprints, HelpCircle, AlertCircle } from 'lucide-react';

interface QualifyingQuestionsProps {
  onComplete: (answers: Record<string, string>) => void;
  searchQuery: string;
  savedAnswers?: Record<string, string>;
}

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

const QualifyingQuestions: React.FC<QualifyingQuestionsProps> = ({ onComplete, searchQuery, savedAnswers }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>(() => ({
    ...savedAnswers,
    search_query: searchQuery
  }));
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [animation, setAnimation] = useState('');
  const [customInput, setCustomInput] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const [showPaidSearchBudget, setShowPaidSearchBudget] = useState<boolean>(false);
  const [paidSearchBudget, setPaidSearchBudget] = useState<string>('0');
  const [feedbackText, setFeedbackText] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const feedbackTimeout = useRef<NodeJS.Timeout>();

  // Generate questions based on search query
  const allQuestions: Question[] = [
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
        const revenue = parseInt(answers.yearly_revenue || '0');
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
  ];

  // Filter questions based on conditional display
  const questions = allQuestions.filter(q => !q.conditionalDisplay || q.conditionalDisplay(answers));

  const [showTraditionalTypes, setShowTraditionalTypes] = useState(false);
  const [traditionalType, setTraditionalType] = useState('');

  const traditionalMarketingTypes = [
    'print advertising',
    'radio advertising',
    'television advertising',
    'direct mail',
    'billboards/outdoor',
    'trade shows/events',
    'other'
  ];

  const handleMultiSelect = (option: string) => {
    if (option === 'none/minimal marketing') {
      setSelectedOptions(['none/minimal marketing']);
      setShowPaidSearchBudget(false);
      return;
    }

    if (option === 'traditional marketing') {
      setShowTraditionalTypes(true);
      return;
    }
    
    setSelectedOptions(prev => {
      if (prev.includes('none/minimal marketing')) {
        setShowPaidSearchBudget(option === 'paid search');
        return [option];
      }
      
      if (prev.includes(option)) {
        if (option === 'paid search') {
          setShowPaidSearchBudget(false);
          setPaidSearchBudget('');
        }
        return prev.filter(o => o !== option);
      }
      
      if (option === 'paid search') {
        setShowPaidSearchBudget(true);
      }
      
      return [...prev, option];
    });
  };

  const handleTraditionalTypeSelect = (type: string) => {
    setTraditionalType(type);
    setSelectedOptions(prev => {
      const withoutTraditional = prev.filter(o => o !== 'traditional marketing');
      return [...withoutTraditional, `traditional marketing (${type})`];
    });
    setShowTraditionalTypes(false);
  };

  const handleContinue = () => {
    if (selectedOptions.length === 0) return;
    
    const currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion || (showPaidSearchBudget && !paidSearchBudget)) return;
    
    // Show feedback if available
    if (currentQuestion.feedback) {
      const answer = selectedOptions.join(',');
      const feedback = currentQuestion.feedback(answer);
      setFeedbackText(feedback);
      setShowFeedback(true);
      setIsTransitioning(true);
      
      // Wait for feedback to be shown before continuing
      setTimeout(() => {
        setShowFeedback(false);
        setIsTransitioning(false);
        proceedToNextQuestion();
      }, 2000);
      return;
    }
    
    proceedToNextQuestion();
  };

  const proceedToNextQuestion = () => {
    const answer = selectedOptions.join(',');
    const nextAnswers = {
      ...answers,
      [questions[currentQuestionIndex].id]: answer,
      ...(paidSearchBudget && { current_paid_search_budget: paidSearchBudget })
    };
    
    if (currentQuestionIndex < questions.length - 1) {
      setAnswers(nextAnswers);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOptions([]);
      setShowFeedback(false);
      setAnimation('animate-fadeIn');
    } else {
      onComplete({
        ...nextAnswers,
        search_query: searchQuery
      });
    }
  };

  const handleOptionSelect = (option: string) => {
    const currentQuestion = questions[currentQuestionIndex];

    if (!currentQuestion) return;
    
    // Handle lead confirmation "no" response
    if (currentQuestion.id === 'yearly_leads_confirmation' && option === 'no, let me adjust') {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      return;
    }
    
    if (currentQuestion.multiSelect) {
      handleMultiSelect(option);
      return;
    }

    if (currentQuestion.type === 'slider') {
      setAnswers({
        ...answers,
        [currentQuestion.id]: option
      });
      
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      
      return;
    }

    if (option === 'other') {
      setIsCustom(true);
      return;
    }
    
    // For non-multiSelect questions, set the selected option
    setSelectedOptions([option]);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion) return;
    
    if (customInput.trim()) {
      handleOptionSelect(customInput);
      setIsCustom(false);
      setCustomInput('');
    }
  };

  useEffect(() => {
    setAnimation('animate-fadeIn');
  }, []);

  const currentQuestion = questions[currentQuestionIndex];
  if (!currentQuestion) return null;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-rose via-iris to-pine transition-all duration-500 ease-out"
            style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
        <div className="text-right text-sm text-gray-400 mt-2 lowercase">
          question {currentQuestionIndex + 1} of {questions.length}
        </div>
      </div>

      <div className={`transition-opacity duration-300 ${animation}`}>
        {/* Search query summary */}
        <div className="mb-8 p-4 rounded-md bg-gray-800 border border-gray-700">
          <p className="text-gray-400 lowercase">you searched for:</p>
          <p className="text-xl text-rose font-medium lowercase">"{searchQuery || ''}"</p>
        </div>

        {/* Current question */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-2xl impact gradient-text lowercase">
              <span className="text-white">
                {typeof currentQuestion.question === 'function' 
                  ? currentQuestion.question(answers)
                  : currentQuestion.question}
              </span>
            </h2>
            {currentQuestion.explanation && (
              <button 
                type="button"
                onClick={() => setShowExplanation(!showExplanation)}
                className="text-gray-400 hover:text-rose transition-colors duration-200"
              >
                <HelpCircle size={18} />
              </button>
            )}
          </div>
          
          {showExplanation && currentQuestion.explanation && (
            <div className="mb-6 p-4 rounded-xl bg-base/50 border border-yellow-400/30">
              <div className="flex items-start gap-3">
                <AlertCircle className="text-yellow-400 mt-1 flex-shrink-0" size={18} />
                <p className="text-sm text-gray-300">{currentQuestion.explanation}</p>
              </div>
            </div>
          )}
          
          {(currentQuestion.type === 'slider' || currentQuestion.type === 'number') && (
            <div className="mb-8 bg-base/50 p-8 rounded-xl border border-base-light">
              {/* Current value display */}
              {answers[currentQuestion.id] && (
                <div className="text-center mb-8">
                  <div className="inline-block bg-rose/10 px-6 py-3 rounded-lg border border-rose/20">
                    <span className="text-3xl font-bold text-white">
                      {currentQuestion.id === 'yearly_revenue' ? 
                        `$${parseInt(answers[currentQuestion.id] || '0').toLocaleString()}` : 
                        parseInt(answers[currentQuestion.id] || '0').toLocaleString()}
                    </span>
                    <span className="text-gray-400 text-sm ml-1">
                      {currentQuestion.id === 'yearly_revenue' ? '/ year' : ' leads / month'}
                    </span>
                  </div>
                </div>
              )}

              <div className="relative">
                  <input
                    type="number"
                    min="0"
                    placeholder={currentQuestion.id === 'yearly_revenue' ? "enter your yearly revenue..." : "enter number of monthly leads..."}
                    value={answers[currentQuestion.id] || ''}
                    onChange={(e) => {
                      setAnswers(prev => ({
                        ...prev,
                        [currentQuestion.id]: e.target.value
                      }))
                    }}
                    className="w-full p-4 rounded-lg bg-base border border-base-light text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rose focus:border-transparent transition-all duration-200"
                  />
                {currentQuestion.id === 'monthly_leads' && answers.monthly_leads && (
                  <div className="mt-8 p-6 rounded-xl bg-rose/10 border border-rose/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm text-gray-400 lowercase">current cost per lead</h4>
                        <div className="text-2xl font-bold text-rose mt-1">
                          ${(parseInt(answers.yearly_revenue || '0') / (parseInt(answers.monthly_leads || '0') * 12)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400 lowercase">yearly leads</div>
                        <div className="text-lg text-gray-300 mt-1">
                          {(parseInt(answers.monthly_leads || '0') * 12).toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {currentQuestion.type === 'slider' && (
                <div className="flex justify-between text-sm text-gray-400 mt-6">
                  <span>{currentQuestion.id === 'yearly_revenue' ? 'enter your yearly revenue' : 'enter your monthly leads'}</span>
                </div>
              )}
              
              <button
                onClick={() => {
                  if (currentQuestion.feedback) {
                    const feedback = currentQuestion.feedback(answers[currentQuestion.id]);
                    setFeedbackText(feedback);
                    setShowFeedback(true);
                    setIsTransitioning(true);
                    
                    setTimeout(() => {
                      setShowFeedback(false);
                      setIsTransitioning(false);
                      setCurrentQuestionIndex(currentQuestionIndex + 1);
                      setAnimation('animate-fadeIn');
                    }, 2000);
                  } else {
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                    setAnimation('animate-fadeIn');
                  }
                }}
                className="w-full mt-12 p-4 rounded-xl bg-rose/10 border border-rose/30 text-rose hover:bg-rose/20 transition-all duration-200 flex justify-center items-center gap-2 lowercase font-medium"
              >
                <span>continue</span>
                <ArrowRight size={18} />
              </button>
            </div>
          )}

          {showFeedback && currentQuestion.feedback && answers[currentQuestion.id] && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-base/50 backdrop-blur-sm">
              <div className="lightbox-feedback mx-4 p-6 rounded-xl bg-base/95 border border-rose/20">
               <div className="flex items-start gap-3">
                <div className="text-pine mt-1 transform scale-x-[-1]">
                  <Footprints size={20} />
                </div>
                <p className="text-gray-300">
                  {feedbackText}
                </p>
               </div>
              </div>
            </div>
          )}
          
          {isCustom ? (
            <form onSubmit={handleCustomSubmit} className="space-y-4">
              <input
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder="please specify your business type..."
                className="w-full p-4 rounded-md bg-base border border-base-light text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rose focus:border-transparent transition-all duration-200 lowercase"
              />
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 p-4 rounded-md bg-rose/10 border border-rose/30 hover:bg-rose/20 transition-all duration-200 text-rose lowercase"
                >
                  submit
                </button>
                <button
                  type="button"
                  onClick={() => setIsCustom(false)}
                  className="p-4 rounded-md bg-base border border-base-light hover:border-rose/30 transition-all duration-200 text-gray-300 lowercase"
                >
                  cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              {currentQuestion.multiSelect ? (
                showTraditionalTypes ? (
                  <div className="space-y-3">
                    <h3 className="text-xl impact mb-4 text-rose lowercase">what type of traditional marketing?</h3>
                    {traditionalMarketingTypes?.map((type, index) => (
                      <button
                        key={index}
                        onClick={() => handleTraditionalTypeSelect(type)}
                        className="w-full text-left p-4 rounded-md bg-base border border-base-light hover:border-rose/30 hover:bg-base-light transition-all duration-200 flex justify-between items-center group lowercase"
                      >
                        <span>{type}</span>
                        <ArrowRight className="text-rose opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
                      </button>
                    ))}
                    <button
                      onClick={() => setShowTraditionalTypes(false)}
                      className="w-full mt-4 p-4 rounded-md bg-base border border-base-light hover:border-rose/30 transition-all duration-200 text-gray-300 lowercase"
                    >
                      back to marketing strategies
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {showPaidSearchBudget && (
                      <div className="mb-6 p-6 rounded-xl bg-base/50 border border-yellow-400/30">
                        <h3 className="text-xl font-semibold text-yellow-400 mb-4 lowercase">what's your current monthly paid search budget?</h3>
                        <input
                          type="number"
                          value={paidSearchBudget || '0'}
                          onChange={(e) => setPaidSearchBudget(e.target.value)}
                          placeholder="enter monthly budget in dollars..."
                          className="w-full p-4 rounded-md bg-base border border-base-light text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 lowercase"
                        />
                      </div>
                    )}
                    {currentQuestion.options?.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleMultiSelect(option)}
                        className={`w-full text-left p-4 rounded-md transition-all duration-200 flex justify-between items-center group lowercase
                          ${selectedOptions.includes(option) 
                            ? 'bg-rose/10 border-rose/30 border' 
                            : 'bg-base border border-base-light hover:border-rose/30 hover:bg-base-light'}`}
                      >
                        <span>{option}</span>
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors
                          ${selectedOptions.includes(option)
                            ? 'border-rose bg-rose/10'
                            : 'border-gray-500'}`}
                        >
                          {selectedOptions.includes(option) && (
                            <div className="w-2 h-2 rounded-sm bg-rose" />
                          )}
                        </div>
                      </button>
                    ))}
                    <button
                      onClick={handleContinue}
                      disabled={selectedOptions.length === 0}
                      className={`w-full mt-6 p-4 rounded-md transition-all duration-200 flex justify-center items-center gap-2 lowercase ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}
                        ${selectedOptions.length > 0
                          ? 'bg-rose/10 border-rose/30 border text-rose hover:bg-rose/20'
                          : 'bg-base border border-base-light text-gray-500 cursor-not-allowed'}`}
                    >
                      <span>continue</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                )
              ) : (
                <div>
                  {currentQuestion.options?.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionSelect(option)}
                      className={`w-full text-left p-4 rounded-md transition-all duration-200 flex justify-between items-center group lowercase 
                        ${option === 'other' ? 'bg-yellow-400/10 border-yellow-400/30 hover:bg-yellow-400/20 hover:border-yellow-400/50' : ''}
                        ${selectedOptions.includes(option) ? 'bg-rose/10 border-rose/30 border' : 'bg-base border border-base-light hover:border-rose/30 hover:bg-base-light'}`}
                    >
                      <span>{option}</span>
                      {selectedOptions.includes(option) ? (
                        <div className="w-5 h-5 rounded border-2 border-rose bg-rose/10 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-sm bg-rose" />
                        </div>
                      ) : (
                        <ArrowRight className="text-rose opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
                      )}
                    </button>
                  ))}
                
                  {/* Continue button */}
                  {selectedOptions.length > 0 && !currentQuestion.multiSelect && (
                    <button
                      onClick={() => !isTransitioning && handleContinue()}
                      disabled={isTransitioning}
                      className="w-full mt-6 p-4 rounded-md bg-rose/10 border border-rose/30 text-rose hover:bg-rose/20 transition-all duration-200 flex justify-center items-center gap-2 lowercase"
                    >
                      <span>continue</span>
                      <ArrowRight size={18} />
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QualifyingQuestions;