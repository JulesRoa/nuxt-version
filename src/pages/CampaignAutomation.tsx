import React from 'react';
import { ArrowRight, Target, Zap, Gauge, Activity, ChevronRight, BarChart3, RefreshCw, Clock, CreditCard, Users, MessageCircle, Wifi, Server, MousePointer, X, Check } from 'lucide-react';

const CampaignAutomation: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="scanline"></div>
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-6 py-2 mb-6 rounded-full bg-pine/10 border border-pine/30">
            <span className="text-pine flex items-center gap-2 text-sm">
              <Target size={16} />
              <span>campaign automation</span>
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl impact mb-8 text-white">
            automate your marketing. <span className="text-pine">maximize your ROI</span>
          </h1>
          
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            supercharge your campaigns with AI-driven automation. eliminate inefficiencies, reduce costs, and scale your marketing with intelligent automation across paid search, paid social, email, and CRM.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 rounded-lg bg-pine text-base-dark font-medium flex items-center justify-center gap-2 hover:bg-pine-light transition-colors duration-300">
              <span>optimize. automate. convert.</span>
              <Zap size={18} />
            </button>
            
            <button className="px-6 py-3 rounded-lg bg-transparent border border-rose/30 text-rose font-medium flex items-center justify-center gap-2 hover:bg-rose/10 transition-colors duration-300">
              <span>get free audit</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
      
      {/* Why Campaign Automation Section */}
      <section className="container mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl impact mb-6 text-white">why campaign automation?</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            stop wasting valuable time and resources on manual optimizations that AI can handle more efficiently
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="p-8 rounded-xl bg-base/50 border border-pine/20 hover:border-pine/40 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-pine/10 border border-pine/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Clock className="text-pine" size={24} />
            </div>
            <h3 className="text-2xl impact text-white mb-4">real-time optimizations for maximum ROI</h3>
            <p className="text-gray-400">
              traditional marketing teams take hours—or even days—to adjust campaigns. AI-driven automation makes real-time budget shifts, bid adjustments, and audience refinements to ensure every dollar is spent efficiently.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <ChevronRight className="text-pine flex-shrink-0 mt-1" size={16} />
                <span>instant bid adjustments</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <ChevronRight className="text-pine flex-shrink-0 mt-1" size={16} />
                <span>24/7 performance monitoring</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <ChevronRight className="text-pine flex-shrink-0 mt-1" size={16} />
                <span>automated budget reallocation</span>
              </li>
            </ul>
          </div>
          
          {/* Feature 2 */}
          <div className="p-8 rounded-xl bg-base/50 border border-rose/20 hover:border-rose/40 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-rose/10 border border-rose/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Activity className="text-rose" size={24} />
            </div>
            <h3 className="text-2xl impact text-white mb-4">eliminate manual work & human error</h3>
            <p className="text-gray-400">
              from managing ad placements to lead follow-ups, automation ensures your campaigns run 24/7 without missed opportunities. no more wasted time on repetitive tasks.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <ChevronRight className="text-rose flex-shrink-0 mt-1" size={16} />
                <span>automated campaign workflows</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <ChevronRight className="text-rose flex-shrink-0 mt-1" size={16} />
                <span>consistent execution</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <ChevronRight className="text-rose flex-shrink-0 mt-1" size={16} />
                <span>error-free campaign management</span>
              </li>
            </ul>
          </div>
          
          {/* Feature 3 */}
          <div className="p-8 rounded-xl bg-base/50 border border-iris/20 hover:border-iris/40 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-iris/10 border border-iris/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <RefreshCw className="text-iris" size={24} />
            </div>
            <h3 className="text-2xl impact text-white mb-4">cross-platform strategy that works together</h3>
            <p className="text-gray-400">
              rather than managing Google Ads, Facebook, LinkedIn, TikTok, and Email Marketing in silos, automation syncs all channels into a unified strategy—ensuring a seamless customer journey.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <ChevronRight className="text-iris flex-shrink-0 mt-1" size={16} />
                <span>unified cross-channel campaigns</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <ChevronRight className="text-iris flex-shrink-0 mt-1" size={16} />
                <span>consistent messaging everywhere</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <ChevronRight className="text-iris flex-shrink-0 mt-1" size={16} />
                <span>synchronized customer touchpoints</span>
              </li>
            </ul>
          </div>
          
          {/* Feature 4 */}
          <div className="p-8 rounded-xl bg-base/50 border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="text-yellow-400" size={24} />
            </div>
            <h3 className="text-2xl impact text-white mb-4">smarter personalization at scale</h3>
            <p className="text-gray-400">
              AI-driven automation delivers the right message, to the right person, at the right time, optimizing engagement and conversions without requiring constant manual input.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <ChevronRight className="text-yellow-400 flex-shrink-0 mt-1" size={16} />
                <span>dynamic content personalization</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <ChevronRight className="text-yellow-400 flex-shrink-0 mt-1" size={16} />
                <span>behavior-based targeting</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <ChevronRight className="text-yellow-400 flex-shrink-0 mt-1" size={16} />
                <span>AI-optimized customer experiences</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Most Popular Use Cases Section */}
      <section className="container mx-auto px-4 mb-24 py-24 border-y border-pine/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl impact mb-6 text-white">most popular <span className="text-pine">automation use cases</span></h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              our clients see the biggest impact with these proven automation strategies
            </p>
          </div>
          
          <div className="space-y-12">
            {/* Use Case 1 */}
            <div className="p-8 rounded-xl bg-base/50 border border-pine/20 hover:border-pine/40 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-pine/10 border border-pine/20 flex items-center justify-center flex-shrink-0 text-2xl font-bold text-pine">1</div>
                <div>
                  <h3 className="text-2xl impact text-white mb-4">AI-driven budget & bid optimization</h3>
                  <p className="text-gray-400 mb-6">
                    let AI handle your budget allocation across platforms to maximize return on ad spend.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-pine/10 border border-pine/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronRight className="text-pine" size={14} />
                      </div>
                      <span>dynamically adjust budgets based on real-time performance data</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-pine/10 border border-pine/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronRight className="text-pine" size={14} />
                      </div>
                      <span>shift ad spend between platforms (Google, Facebook, TikTok, LinkedIn, etc.) to maximize ROI</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-pine/10 border border-pine/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronRight className="text-pine" size={14} />
                      </div>
                      <span>auto-pause low-performing campaigns and redistribute budgets to high-performing ones</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Use Case 2 */}
            <div className="p-8 rounded-xl bg-base/50 border border-rose/20 hover:border-rose/40 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-rose/10 border border-rose/20 flex items-center justify-center flex-shrink-0 text-2xl font-bold text-rose">2</div>
                <div>
                  <h3 className="text-2xl impact text-white mb-4">cross-platform campaign automation</h3>
                  <p className="text-gray-400 mb-6">
                    launch and manage campaigns across multiple platforms from a single dashboard.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-rose/10 border border-rose/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronRight className="text-rose" size={14} />
                      </div>
                      <span>automate campaign launches across multiple ad platforms from a single dashboard</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-rose/10 border border-rose/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronRight className="text-rose" size={14} />
                      </div>
                      <span>ensure consistent messaging across paid search, social, email, and SMS</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-rose/10 border border-rose/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronRight className="text-rose" size={14} />
                      </div>
                      <span>use AI to predict which channels drive the highest-value leads</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Use Case 3 */}
            <div className="p-8 rounded-xl bg-base/50 border border-iris/20 hover:border-iris/40 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-iris/10 border border-iris/20 flex items-center justify-center flex-shrink-0 text-2xl font-bold text-iris">3</div>
                <div>
                  <h3 className="text-2xl impact text-white mb-4">real-time audience syncing & retargeting</h3>
                  <p className="text-gray-400 mb-6">
                    keep audience data synchronized across all platforms for seamless retargeting.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-iris/10 border border-iris/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronRight className="text-iris" size={14} />
                      </div>
                      <span>sync customer data between all ad platforms (Google, Facebook, LinkedIn, TikTok) for unified targeting</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-iris/10 border border-iris/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronRight className="text-iris" size={14} />
                      </div>
                      <span>trigger retargeting ads based on user engagement, abandoned carts, and CRM insights</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-iris/10 border border-iris/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronRight className="text-iris" size={14} />
                      </div>
                      <span>automate audience segmentation based on behavior, increasing relevance and reducing wasted ad spend</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Use Case 4 */}
            <div className="p-8 rounded-xl bg-base/50 border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center flex-shrink-0 text-2xl font-bold text-yellow-400">4</div>
                <div>
                  <h3 className="text-2xl impact text-white mb-4">multi-step automated lead nurturing</h3>
                  <p className="text-gray-400 mb-6">
                    guide prospects through the sales funnel with automated, personalized follow-ups.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronRight className="text-yellow-400" size={14} />
                      </div>
                      <span>trigger email/SMS sequences based on campaign interactions</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronRight className="text-yellow-400" size={14} />
                      </div>
                      <span>AI-driven follow-ups ensure prospects move through the funnel</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronRight className="text-yellow-400" size={14} />
                      </div>
                      <span>CRM integration updates sales teams with qualified, high-intent leads in real time</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Use Case 5 */}
            <div className="p-8 rounded-xl bg-base/50 border border-pine/20 hover:border-pine/40 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-pine/10 border border-pine/20 flex items-center justify-center flex-shrink-0 text-2xl font-bold text-pine">5</div>
                <div>
                  <h3 className="text-2xl impact text-white mb-4">AI-powered ad creative & content automation</h3>
                  <p className="text-gray-400 mb-6">
                    optimize ad creatives and content in real-time based on performance data.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-pine/10 border border-pine/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronRight className="text-pine" size={14} />
                      </div>
                      <span>auto-generate ad copy and creatives based on real-time performance data</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-pine/10 border border-pine/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronRight className="text-pine" size={14} />
                      </div>
                      <span>A/B test ad variations at scale to identify high-converting assets</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-pine/10 border border-pine/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ChevronRight className="text-pine" size={14} />
                      </div>
                      <span>personalize ad messaging dynamically based on audience behavior</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Cross-Platform Section */}
      <section className="container mx-auto px-4 mb-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl impact mb-6 text-white">cross-platform campaign automation: <span className="text-pine">the ultimate growth strategy</span></h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              sync every marketing channel in real-time for seamless customer journeys and maximum conversions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div className="p-6 rounded-xl bg-base/50 border border-pine/20 hover:border-pine/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-pine/10 border border-pine/20 flex items-center justify-center">
                  <Server className="text-pine" size={18} />
                </div>
                <h3 className="text-xl impact text-white">google & facebook ads</h3>
              </div>
              <p className="text-sm text-gray-400">unified budget optimizations and audience syncing for maximum performance across search and social</p>
            </div>
            
            <div className="p-6 rounded-xl bg-base/50 border border-rose/20 hover:border-rose/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-rose/10 border border-rose/20 flex items-center justify-center">
                  <Wifi className="text-rose" size={18} />
                </div>
                <h3 className="text-xl impact text-white">linkedin & tiktok</h3>
              </div>
              <p className="text-sm text-gray-400">AI-powered targeting and dynamic creative testing to reach B2B and B2C audiences effectively</p>
            </div>
            
            <div className="p-6 rounded-xl bg-base/50 border border-iris/20 hover:border-iris/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-iris/10 border border-iris/20 flex items-center justify-center">
                  <MessageCircle className="text-iris" size={18} />
                </div>
                <h3 className="text-xl impact text-white">email & SMS</h3>
              </div>
              <p className="text-sm text-gray-400">automated follow-ups triggered by campaign engagement for timely and relevant communications</p>
            </div>
            
            <div className="p-6 rounded-xl bg-base/50 border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
                  <Users className="text-yellow-400" size={18} />
                </div>
                <h3 className="text-xl impact text-white">CRM integration</h3>
              </div>
              <p className="text-sm text-gray-400">send real-time conversion data back to ad platforms for improved performance and targeting</p>
            </div>
          </div>
          
          {/* Example Retargeting Process */}
          <div className="p-8 rounded-xl bg-gradient-to-br from-base/80 via-base/50 to-base/80 border border-pine/30 backdrop-blur-sm">
            <h3 className="text-2xl impact text-white mb-6 text-center">example: cross-platform retargeting in action</h3>
            
            <div className="relative">
              {/* Connection lines */}
              <div className="absolute left-[2.25rem] top-12 w-0.5 h-[calc(100%-5rem)] bg-gradient-to-b from-rose via-iris to-pine"></div>
              
              <div className="space-y-12">
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 rounded-full bg-rose/10 border border-rose/30 flex items-center justify-center z-10">
                    <div className="w-5 h-5 rounded-full bg-rose/30 flex items-center justify-center text-xs text-white">1</div>
                  </div>
                  <div>
                    <p className="text-gray-300">A prospect clicks a Google Search Ad for your service but doesn't convert.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 rounded-full bg-rose/10 border border-rose/30 flex items-center justify-center z-10">
                    <div className="w-5 h-5 rounded-full bg-rose/30 flex items-center justify-center text-xs text-white">2</div>
                  </div>
                  <div>
                    <p className="text-gray-300">They immediately see a Facebook Retargeting Ad based on their search behavior.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 rounded-full bg-iris/10 border border-iris/30 flex items-center justify-center z-10">
                    <div className="w-5 h-5 rounded-full bg-iris/30 flex items-center justify-center text-xs text-white">3</div>
                  </div>
                  <div>
                    <p className="text-gray-300">An hour later, they receive an AI-personalized email with a special offer.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 rounded-full bg-iris/10 border border-iris/30 flex items-center justify-center z-10">
                    <div className="w-5 h-5 rounded-full bg-iris/30 flex items-center justify-center text-xs text-white">4</div>
                  </div>
                  <div>
                    <p className="text-gray-300">If they don't engage, they get a LinkedIn ad or SMS reminder 48 hours later.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 rounded-full bg-pine/10 border border-pine/30 flex items-center justify-center z-10">
                    <div className="w-5 h-5 rounded-full bg-pine/30 flex items-center justify-center text-xs text-white">5</div>
                  </div>
                  <div>
                    <p className="text-gray-300">Once they convert, the CRM updates and stops unnecessary retargeting.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-pine/10 p-6 rounded-lg border border-pine/30">
              <div className="flex items-center gap-3 text-white">
                <Target className="text-pine" size={24} />
                <span className="text-xl impact">result?</span>
              </div>
              <p className="text-gray-300 mt-3">Lower CPAs, higher conversions, and zero wasted spend.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 mb-24 py-24 border-y border-pine/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl impact mb-6 text-white">why businesses choose <span className="text-pine">automated campaign management</span></h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              see the difference AI-driven automation makes compared to traditional manual campaigns
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 rounded-xl bg-base/50 border border-rose/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-rose/10 border border-rose/20 flex items-center justify-center">
                  <X className="text-rose" size={20} />
                </div>
                <h3 className="text-xl impact text-white">traditional manual campaigns</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <X className="text-rose flex-shrink-0 mt-0.5" size={16} />
                  <span>slow adjustments to performance changes</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <X className="text-rose flex-shrink-0 mt-0.5" size={16} />
                  <span>inconsistent messaging across platforms</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <X className="text-rose flex-shrink-0 mt-0.5" size={16} />
                  <span>missed opportunities due to manual errors</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <X className="text-rose flex-shrink-0 mt-0.5" size={16} />
                  <span>high management overhead and resource costs</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <X className="text-rose flex-shrink-0 mt-0.5" size={16} />
                  <span>limited ability to scale without adding staff</span>
                </li>
              </ul>
            </div>
            
            <div className="p-8 rounded-xl bg-base/50 border border-pine/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-pine/10 border border-pine/20 flex items-center justify-center">
                  <Check className="text-pine" size={20} />
                </div>
                <h3 className="text-xl impact text-white">AI-driven campaign automation</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="text-pine flex-shrink-0 mt-0.5" size={16} />
                  <span>real-time budget reallocation for maximum efficiency</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="text-pine flex-shrink-0 mt-0.5" size={16} />
                  <span>cross-platform consistency for a seamless customer journey</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="text-pine flex-shrink-0 mt-0.5" size={16} />
                  <span>predictive analytics to improve results before campaigns even launch</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="text-pine flex-shrink-0 mt-0.5" size={16} />
                  <span>reduced management costs and improved team efficiency</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="text-pine flex-shrink-0 mt-0.5" size={16} />
                  <span>infinitely scalable with minimal additional resources</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-pine/20 via-iris/20 to-rose/20 border border-pine/30 text-center">
          <h2 className="text-3xl md:text-4xl impact mb-6 text-white">ready to automate your campaigns?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            stop wasting ad spend, maximize cross-platform conversions, and scale without increasing workload.
          </p>
          
          <ul className="flex flex-col md:flex-row justify-center gap-6 mb-10">
            <li className="flex items-center gap-2 text-gray-200">
              <div className="w-2 h-2 rounded-full bg-pine"></div>
              <span>stop wasting ad spend</span>
            </li>
            <li className="flex items-center gap-2 text-gray-200">
              <div className="w-2 h-2 rounded-full bg-pine"></div>
              <span>maximize conversions</span>
            </li>
            <li className="flex items-center gap-2 text-gray-200">
              <div className="w-2 h-2 rounded-full bg-pine"></div>
              <span>scale without increasing workload</span>
            </li>
          </ul>
          
          <button className="px-8 py-4 rounded-xl bg-pine text-base-dark font-medium flex items-center gap-3 mx-auto hover:bg-pine-light transition-colors duration-300">
            <span>get a free campaign automation audit</span>
            <Zap size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default CampaignAutomation;