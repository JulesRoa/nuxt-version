import React, { useState, useEffect } from 'react';
import { BarChart3, Target, Zap, Check, ArrowRight, Skull, Loader2, Pencil, RefreshCw, X, Calculator, TrendingUp, PieChart, DollarSign } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface PricingPlansProps {
  answers: Record<string, string>;
  onSave: (answers: Record<string, string>) => void;
}

const PricingPlans: React.FC<PricingPlansProps> = ({ answers, onSave }) => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [animation, setAnimation] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editedAnswers, setEditedAnswers] = useState(answers);
  const [strategyPoints, setStrategyPoints] = useState<Array<{ title: string; description: string; icon: JSX.Element }>>([]);
  const currentPaidSearchBudget = answers.current_paid_search_budget;
  const [loading, setLoading] = useState(true);
  const [showBusinessMath, setShowBusinessMath] = useState(false);

  useEffect(() => {
    console.log("PricingPlans component mounted with answers:", answers);
    setAnimation('animate-fadeIn');
    generateStrategyPoints();
    
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const generateStrategyPoints = () => {
    const points: Array<{ title: string; description: string; icon: JSX.Element }> = [];
    const query = answers.search_query?.toLowerCase() || '';
    const businessType = answers.business_type?.toLowerCase() || '';
    const currentMarketing = answers.current_marketing?.toLowerCase() || '';
    const businessSize = answers.business_size?.toLowerCase() || '';

    // Strategy 1: Based on initial query
    if (query.includes('google ads') || query.includes('paid search') || query.includes('ppc')) {
      points.push({
        title: currentPaidSearchBudget ? 'optimize existing paid search' : 'establish paid search presence',
        description: currentPaidSearchBudget 
          ? `optimize your current $${parseInt(currentPaidSearchBudget).toLocaleString()}/month budget with enhanced targeting and automation for ${businessType} businesses`
          : `create highly targeted ${businessType} specific ad campaigns with location-based bidding strategies and ${
              businessSize.includes('1-10') ? 'budget-conscious' : 'scalable'
            } automation rules`,
        icon: <Target className="text-yellow-400" size={24} />
      });
      // Add complementary strategies for paid search
      points.push({
        title: 'conversion rate optimization',
        description: `implement advanced tracking and optimize landing pages to maximize ROI from your paid search campaigns`,
        icon: <BarChart3 className="text-iris" size={24} />
      });
      points.push({
        title: 'competitor analysis automation',
        description: `set up automated monitoring of competitor ads and keywords to maintain competitive advantage`,
        icon: <Zap className="text-rose" size={24} />
      });
    }

    if (query.includes('seo') || query.includes('rankings') || query.includes('visibility')) {
      points.push({
        title: 'dominate local search results',
        description: `implement location-specific SEO strategies for ${businessType} businesses, including targeted content clusters and local citation building`,
        icon: <Target className="text-yellow-400" size={24} />
      });
      // Add complementary strategies for SEO
      points.push({
        title: 'content optimization system',
        description: `create a scalable content strategy focused on local search intent and business-specific keywords`,
        icon: <BarChart3 className="text-iris" size={24} />
      });
      points.push({
        title: 'local authority building',
        description: `develop automated systems for gathering and managing customer reviews and local citations`,
        icon: <Zap className="text-rose" size={24} />
      });
    }

    if (query.includes('lead') || query.includes('traffic') || query.includes('customers')) {
      points.push({
        title: 'advanced lead generation system',
        description: `implement multi-channel lead capture system optimized for ${businessType} businesses`,
        icon: <Target className="text-yellow-400" size={24} />
      });
      // Add complementary strategies for lead generation
      points.push({
        title: 'lead scoring automation',
        description: `create intelligent lead scoring system to prioritize high-value prospects and optimize follow-up`,
        icon: <BarChart3 className="text-iris" size={24} />
      });
      points.push({
        title: 'nurture workflow automation',
        description: `develop automated lead nurturing sequences tailored to your ${businessType} sales cycle`,
        icon: <Zap className="text-rose" size={24} />
      });
    }

    // Default strategies if no specific query match
    if (points.length === 0) {
      points.push({
        title: `optimize ${businessType} marketing strategy`,
        description: `create a customized marketing plan leveraging your ${businessSize} size for maximum local impact`,
        icon: <Target className="text-yellow-400" size={24} />
      });
      points.push({
        title: 'multi-channel presence',
        description: `establish strong presence across key marketing channels relevant to ${businessType} businesses`,
        icon: <BarChart3 className="text-iris" size={24} />
      });
      points.push({
        title: 'performance tracking system',
        description: `implement comprehensive analytics to track and optimize marketing ROI`,
        icon: <Zap className="text-rose" size={24} />
      });
    }

    setStrategyPoints(points);
  };

  const calculateRecommendedBudget = (revenue: string): string => {
    const annualRevenue = parseInt(revenue) || 0;
    const monthlyMarketingBudget = (annualRevenue * 0.10) / 12;
    return `$${Math.round(monthlyMarketingBudget).toLocaleString()}`;
  };

  const recommendedBudget = calculateRecommendedBudget(answers.yearly_revenue || '0');
  const recommendedBudgetNumeric = parseInt(recommendedBudget.replace(/[^0-9]/g, '')) || 0;

  const calculateMarketingMetrics = () => {
    const annualRevenue = parseInt(answers.yearly_revenue?.replace(/[^0-9]/g, '') || '0');
    const monthlyLeads = parseInt(answers.monthly_leads || '0');
    const yearlyLeads = monthlyLeads * 12;
    const costPerLead = yearlyLeads > 0 ? annualRevenue / yearlyLeads : 0;
    const monthlyMarketingBudget = (annualRevenue * 0.10) / 12;
    
    const currentPaidBudget = parseInt(currentPaidSearchBudget?.replace(/[^0-9]/g, '') || '0');
    const adjustedBudget = currentPaidBudget > monthlyMarketingBudget ? currentPaidBudget : monthlyMarketingBudget;
    
    // Assuming more than 30% increase in leads
    const leadIncreasePercent = 0.35; // 35% increase
    const potentialLeads = Math.round(yearlyLeads * (1 + leadIncreasePercent));
    const potentialIncreaseLeads = potentialLeads - yearlyLeads;
    const potentialRevenue = potentialLeads * costPerLead;
    const roi = potentialRevenue > 0 ? ((potentialRevenue - (adjustedBudget * 12)) / (adjustedBudget * 12)) * 100 : 0;
    
    const businessType = answers.business_type || '';
    const businessSize = answers.business_size || '';
    const profitMargin = answers.profit_margin || '';
    
    return {
      annualRevenue,
      monthlyLeads,
      yearlyLeads,
      costPerLead,
      monthlyMarketingBudget,
      currentPaidBudget,
      adjustedBudget,
      potentialLeads,
      potentialIncreaseLeads,
      leadIncreasePercent,
      potentialRevenue,
      roi,
      businessType,
      businessSize,
      profitMargin
    };
  };

  const metrics = calculateMarketingMetrics();

  const calculatePlanPrice = (plan: typeof plans[0], revenue: string, currentPaidSearchBudget?: string): number => {
    const annualRevenue = parseInt(revenue?.replace(/[^0-9]/g, '') || '0');
    if (annualRevenue === 0) return 0;

    let monthlyMarketingBudget = (annualRevenue * 0.10) / 12;
    
    // If they have an existing paid search budget, factor it into our calculations
    if (currentPaidSearchBudget) {
      const currentBudget = parseInt(currentPaidSearchBudget.replace(/[^0-9]/g, ''));
      // If their current budget is higher than our base calculation, use that as the minimum
      if (currentBudget > monthlyMarketingBudget) {
        monthlyMarketingBudget = currentBudget;
      }
    }
    
    return Math.round(monthlyMarketingBudget * plan.valueMultiplier);
  };

  const plans = [
    {
      id: 'sprint-1',
      name: '1 week sprint',
      valueMultiplier: 1.0, // 100% of monthly marketing budget
      description: 'perfect for businesses ready to establish a strong local presence with focused, rapid results',
      features: [
        'current marketing KPI audit for baseline',
        '1 channel focus',
        'competitor focused research',
        '1 channel audit',
        'keyword/content gap analysis',
        'campaign recommendations that focus on growth',
        'two 1-hour long meetings',
        '1 ppt delivered with all the above'
      ],
      icon: <BarChart3 className="text-accent" size={24} />,
      color: 'accent'
    },
    {
      id: 'sprint-2',
      name: '2 week sprint',
      valueMultiplier: 1.75, // 175% of monthly marketing budget
      description: 'accelerated growth through advanced automation and multi-channel presence',
      features: [
        'all what\'s in the 1 week sprint',
        'recommendation implementation, plug and play',
        'three 1-hour long meetings and a final presentation',
        'walkthrough of implementation',
        'data dashboard',
        'customer journey optimization',
        'competitive advantage tracking'
      ],
      icon: <Target className="text-primary" size={24} />,
      color: 'primary',
      recommended: true
    },
    {
      id: 'full-dept',
      name: "you're my marketing department",
      valueMultiplier: 3.0, // 300% of monthly marketing budget (changed from 5.0)
      description: 'comprehensive solution for businesses seeking total marketing outsourcing',
      features: [
        'everything that\'s in the sprints +',
        'custom crm - all data in one place',
        'offline conversions uploads for lead tracking',
        'monthly data analysis of campaigns',
        'constant implementation of best practices',
        'direct communication with site creator',
        'any channel implementation that fits your business',
        'ai-powered market analysis',
        'cross-channel attribution',
        'multi-channel tracking setup',
        'ai-optimized landing pages',
        'custom automation development',
        'brand authority building',
        '24/7 priority support',
        'quarterly strategy planning'
      ],
      icon: <Zap className="text-accent" size={24} />,
      color: 'accent'
    }
  ];

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
  };

  // Recommend a plan based on answers
  const getRecommendedPlan = () => {
    const { yearly_revenue, profit_margin, business_size } = answers;
    const annualRevenue = parseInt(yearly_revenue || '0');
    
    if (annualRevenue > 5000000 || business_size === '201+ employees') {
      return 'full-dept';
    } else if (annualRevenue > 1000000 || business_size === '51-200 employees') {
      return 'sprint-2';
    } else {
      return 'sprint-1';
    }
  };

  const recommendedPlan = getRecommendedPlan();

  const handleEdit = () => {
    setIsEditing(true);
    setEditedAnswers(answers);
  };

  const handleSave = () => {
    setIsEditing(false);
    onSave(editedAnswers);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedAnswers(answers);
  };

  const handleInputChange = (field: string, value: string) => {
    if (field !== 'yearly_leads_confirmation') {
      setEditedAnswers(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const renderEditableField = (key: string, value: string) => {
    if (key === 'search_query') return null;

    const labelMap: Record<string, string> = {
      business_size: 'business size',
      business_type: 'business type',
      current_marketing: 'current marketing',
      current_paid_search_budget: 'paid search budget',
      yearly_revenue: 'yearly revenue',
      monthly_leads: 'monthly leads',
      profit_margin: 'profit margin',
      goals: 'goals'
    };

    const options: Record<string, string[]> = {
      business_size: ['1-10 employees', '11-50 employees', '51-200 employees', '201+ employees'],
      business_type: [
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
      current_marketing: [
        'social media',
        'email marketing',
        'local seo',
        'paid search',
        'traditional marketing',
        'none/minimal marketing'
      ],
      profit_margin: ['under 10%', '10% - 20%', '20% - 30%', '30% - 40%', 'over 40%'],
      goals: [
        'increase foot traffic',
        'generate more leads',
        'improve online visibility',
        'retain existing customers'
      ]
    };

    return (
      <div key={key} className="group p-4 rounded-xl bg-base/50 border border-base-light hover:border-pine/30 transition-all duration-300">
        <div className="text-sm text-gray-400 mb-1 lowercase">{labelMap[key] || key}</div>
        {isEditing ? (
          options[key] ? (
            <select
              value={editedAnswers[key]}
              onChange={(e) => handleInputChange(key, e.target.value)}
              className="w-full bg-base border border-base-light rounded-lg p-2 text-white focus:outline-none focus:border-pine transition-all duration-200 lowercase"
            >
              {options[key].map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          ) : (
            <input
              type={key.includes('revenue') || key.includes('leads') ? 'number' : 'text'}
              value={editedAnswers[key]}
              onChange={(e) => handleInputChange(key, e.target.value)}
              className="w-full bg-base border border-base-light rounded-lg p-2 text-white focus:outline-none focus:border-pine transition-all duration-200 lowercase"
            />
          )
        ) : (
          <div className="text-lg text-white font-medium lowercase group-hover:text-pine transition-colors duration-300">
            {value}
          </div>
        )}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <Loader2 className="w-12 h-12 mx-auto animate-spin text-pine mb-4" />
          <p className="text-gray-400 lowercase">generating your personalized marketing recommendation...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`max-w-7xl mx-auto transition-opacity duration-500 ${animation}`}>
      <div className="text-center mb-16">
        <h2 className="text-5xl mb-6 text-pine lowercase impact">
          your tailored marketing solution
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto lowercase leading-relaxed">
          based on your needs, we've created these marketing packages specifically for local businesses like yours.
        </p>
      </div>

      {/* AI Advice Section */}
      <div className="mb-24 overflow-hidden">
        <div className="p-8 rounded-2xl bg-base/50 border border-iris/20 backdrop-blur-sm relative">
          <div className="absolute inset-0 bg-gradient-to-br from-iris/5 via-transparent to-transparent" />
          
          <div className="relative">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-iris/10 border border-iris/20 flex items-center justify-center">
                <Skull className="text-iris" size={24} />
              </div>
              <h3 className="text-2xl text-pine lowercase impact">
                based on your business profile, here are our recommendations:
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl text-pine mb-4 lowercase flex items-center gap-2 impact">
                  <BarChart3 size={20} className="text-iris" />
                  recommended monthly budget
                </h4>
                <div className="space-y-2">
                  {/* Highlighted recommended budget */}
                  <div className="p-6 bg-yellow-400/20 border border-yellow-400/30 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-yellow-400 mb-1 text-sm">recommended monthly investment</p>
                        <p className="text-2xl md:text-4xl font-bold text-white">{recommendedBudget}</p>
                      </div>
                      <button
                        onClick={() => setShowBusinessMath(!showBusinessMath)}
                        className="bg-yellow-400/10 hover:bg-yellow-400/20 border border-yellow-400/30 p-2 rounded-lg transition-colors duration-200"
                      >
                        <Calculator className="text-yellow-400" size={24} />
                      </button>
                    </div>
                    
                    {showBusinessMath && (
                      <div className="mt-6 pt-6 border-t border-yellow-400/20">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          <div className="p-4 bg-base/40 rounded-lg border border-base-light">
                            <div className="flex items-center gap-2 mb-2">
                              <DollarSign className="text-yellow-400" size={18} />
                              <h5 className="text-yellow-400 lowercase">yearly revenue</h5>
                            </div>
                            <p className="text-xl font-bold text-white">${metrics.annualRevenue.toLocaleString()}</p>
                          </div>
                          <div className="p-4 bg-base/40 rounded-lg border border-base-light">
                            <div className="flex items-center gap-2 mb-2">
                              <TrendingUp className="text-yellow-400" size={18} />
                              <h5 className="text-yellow-400 lowercase">leads per year</h5>
                            </div>
                            <p className="text-xl font-bold text-white">{metrics.yearlyLeads.toLocaleString()}</p>
                          </div>
                          <div className="p-4 bg-base/40 rounded-lg border border-base-light">
                            <div className="flex items-center gap-2 mb-2">
                              <PieChart className="text-yellow-400" size={18} />
                              <h5 className="text-yellow-400 lowercase">avg. cost per lead</h5>
                            </div>
                            <p className="text-xl font-bold text-white">${metrics.costPerLead.toFixed(2)}</p>
                          </div>
                        </div>

                        <h5 className="text-white mb-3 text-lg lowercase">budget calculation breakdown:</h5>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-400">annual revenue</span>
                            <span className="text-white">${metrics.annualRevenue.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">marketing allocation (10% of revenue)</span>
                            <span className="text-white">${(metrics.annualRevenue * 0.1).toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">monthly marketing budget</span>
                            <span className="text-white">${metrics.monthlyMarketingBudget.toLocaleString()}</span>
                          </div>
                          {metrics.currentPaidBudget > 0 && (
                            <div className="flex justify-between">
                              <span className="text-gray-400">current paid search budget</span>
                              <span className="text-white">${metrics.currentPaidBudget.toLocaleString()}</span>
                            </div>
                          )}
                          <div className="flex justify-between font-bold">
                            <span className="text-yellow-400">final recommended budget</span>
                            <span className="text-yellow-400">${metrics.adjustedBudget.toLocaleString()}</span>
                          </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-yellow-400/20">
                          <h5 className="text-white mb-3 text-lg lowercase">expected outcomes:</h5>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-400">current yearly leads</span>
                              <span className="text-white">{metrics.yearlyLeads.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">potential leads generated</span>
                              <span className="text-white">{metrics.potentialLeads.toLocaleString()} per year (+{Math.round(metrics.leadIncreasePercent * 100)}%)</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">additional yearly leads</span>
                              <span className="text-white">+{metrics.potentialIncreaseLeads.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">potential revenue impact</span>
                              <span className="text-white">~${metrics.potentialRevenue.toLocaleString()} per year</span>
                            </div>
                            <div className="flex justify-between font-bold">
                              <span className="text-yellow-400">estimated ROI</span>
                              <span className="text-yellow-400">~{metrics.roi.toFixed(0)}%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2 mt-4">
                    <p className="text-gray-400 text-sm">
                      based on your {answers.yearly_revenue} annual revenue and {answers.profit_margin} profit margin, 
                      we recommend allocating approximately 10% of revenue to marketing initiatives. 
                      this ensures a sustainable investment while maintaining healthy profit margins.
                    </p>
                    <p className="text-gray-400 text-sm">
                      for {metrics.businessSize} {metrics.businessType} businesses in your revenue bracket, this budget typically yields the best ROI while allowing for:
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li className="text-gray-400 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-pine"></div>
                        <span>consistent market presence across multiple channels</span>
                      </li>
                      <li className="text-gray-400 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-pine"></div>
                        <span>adequate testing and optimization cycles</span>
                      </li>
                      <li className="text-gray-400 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-pine"></div>
                        <span>scalable automation implementation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg text-pine mb-3 lowercase impact">focus areas based on your query</h4>
                <div className="space-y-2">
                  <p className="text-gray-300">"{answers.search_query}"</p>
                  <p className="text-gray-400 text-sm">
                    your query indicates a focus on {answers.goals?.toLowerCase() || 'growth'}, which aligns well with your 
                    current use of {answers.current_marketing?.toLowerCase() || 'marketing'} strategies. we'll build upon these 
                    existing efforts while introducing new channels for maximum impact.
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg text-pine mb-3 lowercase impact">suggested strategy</h4>
                <ul className="space-y-4">
                  {strategyPoints.slice(0, 3).map((point, index) => (
                    <li key={`strategy-${index}`} className="p-4 rounded-xl bg-base/50 border border-base-light hover:border-rose/30 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-base border border-base-light flex items-center justify-center">
                          {point.icon}
                        </div>
                        <div className="space-y-2">
                          <h5 className="text-pine">{point.title}</h5>
                          <p className="text-sm text-gray-400">{point.description}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Business Profile Card */}
      <div className="mb-16 p-8 rounded-2xl bg-base/50 border border-base-light backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pine/5 via-transparent to-transparent opacity-50" />
        <div className="absolute -right-24 -top-24 w-48 h-48 bg-pine/10 rounded-full blur-3xl" />
        <div className="absolute -left-24 -bottom-24 w-48 h-48 bg-iris/10 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-pine/10 border border-pine/20 flex items-center justify-center">
              <BarChart3 className="text-pine" size={24} />
            </div>
            <div className="flex items-center justify-between flex-grow">
              <h3 className="text-2xl text-pine lowercase impact">your business profile</h3>
              <div className="flex items-center gap-2">
                {isEditing ? (
                  <>
                    <button 
                      onClick={handleSave}
                      className="p-2 rounded-lg bg-pine/10 border border-pine/20 text-pine hover:bg-pine/20 transition-all duration-200"
                    >
                      <Check size={18} />
                    </button>
                    <button 
                      onClick={handleCancel}
                      className="p-2 rounded-lg bg-rose/10 border border-rose/20 text-rose hover:bg-rose/20 transition-all duration-200"
                    >
                      <X size={18} />
                    </button>
                  </>
                ) : (
                  <button 
                    onClick={handleEdit}
                    className="p-2 rounded-lg bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 hover:bg-yellow-400/20 transition-all duration-200"
                  >
                    <Pencil size={18} />
                  </button>
                )}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(answers).map(([key, value]) => {
              if (key === 'search_query') return null;
              if (key === 'current_paid_search_budget' && !value) return null;
              return renderEditableField(key, value);
            })}
          </div>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 relative">
        <div className="absolute inset-0 bg-gradient-radial from-pine/10 via-transparent to-transparent opacity-50 blur-3xl -z-10" />
        {plans.map((plan) => {
          const isRecommended = plan.id === recommendedPlan;
          const isSelected = plan.id === selectedPlan;
          
          return (
            <div 
              key={plan.id}
              className={`relative rounded-md overflow-hidden transition-all duration-300 ${
                isSelected ? 'ring-2 ring-pine scale-105 z-10' : ''
              } ${
                isRecommended ? 'card-highlight' : 'card'
              }`}
            >
              {isRecommended && (
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 lowercase">
                  recommended
                </div>
              )}
              
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-pine/10 border border-pine/20 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-500">
                    {plan.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white lowercase">{plan.name}</h3>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-white lowercase">
                      {'$' + calculatePlanPrice(plan, answers.yearly_revenue || '0', currentPaidSearchBudget).toLocaleString()}
                    </span>
                    <span className="text-gray-400 ml-2 lowercase">
                      {plan.id === 'sprint-1' ? '1 time, 1 week' : 
                       plan.id === 'sprint-2' ? '1 time, 2 weeks' : 
                       '/ month'}
                    </span>
                  </div>
                  <p className="text-gray-400 mt-2 lowercase">{plan.description}</p>
                </div>
                
                <div className="mb-8 flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className={`flex items-start lowercase group transition-colors duration-200 ${
                        plan.id === 'sprint-1' ? 'hover:text-rose' :
                        plan.id === 'sprint-2' ? 'hover:text-yellow-400' :
                        'hover:text-iris'
                      }`}>
                        <Check 
                          size={18} 
                          className={`mr-2 mt-0.5 flex-shrink-0 transition-colors duration-200 ${
                            plan.id === 'sprint-1' ? 'text-rose group-hover:text-rose' :
                            plan.id === 'sprint-2' ? 'text-yellow-400 group-hover:text-yellow-400' :
                            'text-iris group-hover:text-iris'
                          }`}
                        />
                        <span className={`text-gray-300 transition-colors duration-200 ${
                          plan.id === 'sprint-1' ? 'group-hover:text-rose' :
                          plan.id === 'sprint-2' ? 'group-hover:text-yellow-400' :
                          'group-hover:text-iris'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button
                  onClick={() => handleSelectPlan(plan.id)}
                  className={'w-full py-4 px-6 rounded-xl flex items-center justify-center transition-all duration-300 group ' +
                    (isSelected 
                      ? 'bg-pine/10 text-pine border border-pine/30' 
                      : 'text-gray-400 hover:text-pine hover:bg-pine/5 border border-base-light hover:border-pine/20')}
                >
                  <span className="mr-2 group-hover:translate-x-[-4px] transition-transform duration-300 lowercase">
                    {isSelected ? 'selected plan' : 'select plan'}
                  </span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA section */}
      <div className="text-center relative">
        <div className="absolute inset-0 bg-gradient-radial from-iris/10 via-transparent to-transparent opacity-50 blur-3xl -z-10" />
        <p className="text-gray-300 mb-8 text-lg lowercase max-w-2xl mx-auto">
          all plans include a detailed consultation to understand your specific local business needs and customize our approach accordingly.
        </p>
        <button className="group bg-iris/10 text-iris hover:bg-iris/20 border border-iris/30 font-medium py-4 px-8 rounded-xl transition-all duration-300 flex items-center gap-2 mx-auto lowercase">
          <span className="group-hover:translate-x-[-4px] transition-transform duration-300">schedule a free consultation</span>
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default PricingPlans;