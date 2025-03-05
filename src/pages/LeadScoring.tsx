import React from 'react';
import { ArrowRight, Zap, Users, Star, Bell, Plus, ChevronRight } from 'lucide-react';

const LeadScoring: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="scanline"></div>
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-6 py-2 mb-6 rounded-full bg-rose/10 border border-rose/30">
            <span className="text-rose flex items-center gap-2 text-sm">
              <Zap size={16} />
              <span>lead scoring</span>
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl impact mb-8 text-white">
            focus on the leads that <span className="text-rose">actually convert</span>
          </h1>
          
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            our AI-powered lead scoring system helps you identify your most valuable prospects so you can prioritize your time and resources effectively.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 rounded-lg bg-rose text-white font-medium flex items-center justify-center gap-2 hover:bg-rose-light transition-colors duration-300">
              <span>start scoring leads</span>
              <ArrowRight size={18} />
            </button>
            
            <button className="px-6 py-3 rounded-lg bg-transparent border border-pine/30 text-pine font-medium flex items-center justify-center gap-2 hover:bg-pine/10 transition-colors duration-300">
              <span>how it works</span>
              <Zap size={18} />
            </button>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="container mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl impact mb-6 text-white">how our lead scoring <span className="text-rose">works</span></h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            our sophisticated algorithm analyzes multiple factors to predict which leads are most likely to become customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="p-8 rounded-xl bg-base/50 border border-rose/20 hover:border-rose/40 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-rose/10 border border-rose/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="text-rose" size={24} />
            </div>
            <h3 className="text-2xl impact text-white mb-4">data collection</h3>
            <p className="text-gray-400">
              our system collects behavioral, demographic, and engagement data from multiple touchpoints to build a comprehensive lead profile.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <ChevronRight className="text-rose flex-shrink-0 mt-1" size={16} />
                <span>website behavior tracking</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <ChevronRight className="text-rose flex-shrink-0 mt-1" size={16} />
                <span>form submission analysis</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <ChevronRight className="text-rose flex-shrink-0 mt-1" size={16} />
                <span>engagement metrics monitoring</span>
              </li>
            </ul>
          </div>
          
          {/* Step 2 */}
          <div className="p-8 rounded-xl bg-base/50 border border-rose/20 hover:border-rose/40 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-rose/10 border border-rose/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Star className="text-rose" size={24} />
            </div>
            <h3 className="text-2xl impact text-white mb-4">AI scoring algorithm</h3>
            <p className="text-gray-400">
              our proprietary algorithm analyzes patterns to assign scores based on likelihood to convert, potential value, and fit with your business.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <ChevronRight className="text-rose flex-shrink-0 mt-1" size={16} />
                <span>predictive conversion modeling</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <ChevronRight className="text-rose flex-shrink-0 mt-1" size={16} />
                <span>value-based scoring</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <ChevronRight className="text-rose flex-shrink-0 mt-1" size={16} />
                <span>fit analysis</span>
              </li>
            </ul>
          </div>
          
          {/* Step 3 */}
          <div className="p-8 rounded-xl bg-base/50 border border-rose/20 hover:border-rose/40 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-rose/10 border border-rose/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Bell className="text-rose" size={24} />
            </div>
            <h3 className="text-2xl impact text-white mb-4">actionable insights</h3>
            <p className="text-gray-400">
              receive prioritized lead lists, notifications for high-value prospects, and tailored nurturing recommendations.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <ChevronRight className="text-rose flex-shrink-0 mt-1" size={16} />
                <span>priority lead notifications</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <ChevronRight className="text-rose flex-shrink-0 mt-1" size={16} />
                <span>personalized nurturing paths</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <ChevronRight className="text-rose flex-shrink-0 mt-1" size={16} />
                <span>follow-up recommendations</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="container mx-auto px-4 mb-24 py-24 border-y border-rose/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl impact mb-6 text-white">benefits of our <span className="text-rose">lead scoring</span></h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              transform how you handle leads and dramatically improve your conversion rates
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Benefit 1 */}
            <div className="p-8 rounded-xl bg-base/50 border border-rose/20 hover:border-rose/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-rose/10 border border-rose/20 flex items-center justify-center flex-shrink-0">
                  <Plus className="text-rose" size={24} />
                </div>
                <div>
                  <h3 className="text-xl impact text-white mb-2">increased conversion rates</h3>
                  <p className="text-gray-400 text-sm">
                    by focusing on your highest-quality leads, clients have seen conversion rates increase by an average of 37%.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <ChevronRight className="text-rose" size={14} />
                      <span>prioritize high-potential prospects</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <ChevronRight className="text-rose" size={14} />
                      <span>tailor approaches to lead quality</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <ChevronRight className="text-rose" size={14} />
                      <span>optimize timing of follow-ups</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Benefit 2 */}
            <div className="p-8 rounded-xl bg-base/50 border border-rose/20 hover:border-rose/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-rose/10 border border-rose/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="text-rose" size={24} />
                </div>
                <div>
                  <h3 className="text-xl impact text-white mb-2">improved sales efficiency</h3>
                  <p className="text-gray-400 text-sm">
                    sales teams typically see a 28% increase in productivity by focusing their time on leads that are most likely to convert.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <ChevronRight className="text-rose" size={14} />
                      <span>eliminate time wasted on poor leads</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <ChevronRight className="text-rose" size={14} />
                      <span>streamline follow-up processes</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <ChevronRight className="text-rose" size={14} />
                      <span>increase sales team morale</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Benefit 3 */}
            <div className="p-8 rounded-xl bg-base/50 border border-rose/20 hover:border-rose/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-rose/10 border border-rose/20 flex items-center justify-center flex-shrink-0">
                  <Users className="text-rose" size={24} />
                </div>
                <div>
                  <h3 className="text-xl impact text-white mb-2">better customer fit</h3>
                  <p className="text-gray-400 text-sm">
                    focus on acquiring customers who are the best fit for your business, leading to higher retention and lifetime value.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <ChevronRight className="text-rose" size={14} />
                      <span>match ideal customer profiles</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <ChevronRight className="text-rose" size={14} />
                      <span>reduce customer churn</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <ChevronRight className="text-rose" size={14} />
                      <span>increase customer satisfaction</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Benefit 4 */}
            <div className="p-8 rounded-xl bg-base/50 border border-rose/20 hover:border-rose/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-rose/10 border border-rose/20 flex items-center justify-center flex-shrink-0">
                  <Star className="text-rose" size={24} />
                </div>
                <div>
                  <h3 className="text-xl impact text-white mb-2">data-driven marketing</h3>
                  <p className="text-gray-400 text-sm">
                    use lead scoring insights to optimize your marketing campaigns and focus budget on channels that generate the highest quality leads.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <ChevronRight className="text-rose" size={14} />
                      <span>optimize channel allocation</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <ChevronRight className="text-rose" size={14} />
                      <span>improve campaign targeting</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <ChevronRight className="text-rose" size={14} />
                      <span>enhance content personalization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-rose/20 via-rose/10 to-rose/5 border border-rose/30 text-center">
          <h2 className="text-3xl md:text-4xl impact mb-6 text-white">ready to start scoring your leads?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            stop wasting time on low-quality leads and focus on the prospects that actually convert.
          </p>
          
          <button className="px-8 py-4 rounded-xl bg-rose text-white font-medium flex items-center gap-3 mx-auto hover:bg-rose-light transition-colors duration-300">
            <span>start lead scoring now</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default LeadScoring;