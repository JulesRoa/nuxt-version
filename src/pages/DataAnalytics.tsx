import React from 'react';
import { ArrowRight, BarChart3, PieChart, LineChart, AreaChart, Layers, ChevronRight } from 'lucide-react';

const DataAnalytics: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="scanline"></div>
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-6 py-2 mb-6 rounded-full bg-iris/10 border border-iris/30">
            <span className="text-iris flex items-center gap-2 text-sm">
              <BarChart3 size={16} />
              <span>data analytics</span>
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl impact mb-8 text-white">
            analytics that <span className="text-iris">actually matter</span> for your business
          </h1>
          
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            forget vanity metrics. our platform focuses on the numbers that directly impact your bottom line and drive real business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 rounded-lg bg-iris text-white font-medium flex items-center justify-center gap-2 hover:bg-iris-light transition-colors duration-300">
              <span>explore dashboards</span>
              <ArrowRight size={18} />
            </button>
            
            <button className="px-6 py-3 rounded-lg bg-transparent border border-rose/30 text-rose font-medium flex items-center justify-center gap-2 hover:bg-rose/10 transition-colors duration-300">
              <span>request a demo</span>
              <BarChart3 size={18} />
            </button>
          </div>
        </div>
      </section>
      
      {/* Key Features Section */}
      <section className="container mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl impact mb-6 text-white">data analytics features</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            comprehensive analytics tools designed specifically for local business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-8 rounded-xl bg-base/50 border border-iris/20 hover:border-iris/40 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-iris/10 border border-iris/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <BarChart3 className="text-iris" size={24} />
            </div>
            <h3 className="text-2xl impact text-white mb-4">performance dashboards</h3>
            <p className="text-gray-400">
              real-time, customizable dashboards that visualize your most important marketing KPIs and business metrics.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <ChevronRight className="text-iris flex-shrink-0 mt-1" size={16} />
                <span>custom metric tracking</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <ChevronRight className="text-iris flex-shrink-0 mt-1" size={16} />
                <span>real-time data updates</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <ChevronRight className="text-iris flex-shrink-0 mt-1" size={16} />
                <span>goal progress visualization</span>
              </li>
            </ul>
          </div>
          
          {/* Feature 2 */}
          <div className="p-8 rounded-xl bg-base/50 border border-rose/20 hover:border-rose/40 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-rose/10 border border-rose/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <LineChart className="text-rose" size={24} />
            </div>
            <h3 className="text-2xl impact text-white mb-4">attribution modeling</h3>
            <p className="text-gray-400">
              understand the true impact of each marketing channel with advanced attribution models tailored to your business.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <ChevronRight className="text-rose flex-shrink-0 mt-1" size={16} />
                <span>multi-touch attribution</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <ChevronRight className="text-rose flex-shrink-0 mt-1" size={16} />
                <span>channel performance analysis</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <ChevronRight className="text-rose flex-shrink-0 mt-1" size={16} />
                <span>conversion path tracking</span>
              </li>
            </ul>
          </div>
          
          {/* Feature 3 */}
          <div className="p-8 rounded-xl bg-base/50 border border-pine/20 hover:border-pine/40 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-pine/10 border border-pine/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <PieChart className="text-pine" size={24} />
            </div>
            <h3 className="text-2xl impact text-white mb-4">competitive analysis</h3>
            <p className="text-gray-400">
              track your position in the market with competitive intelligence and benchmarking tools.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <ChevronRight className="text-pine flex-shrink-0 mt-1" size={16} />
                <span>market share tracking</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <ChevronRight className="text-pine flex-shrink-0 mt-1" size={16} />
                <span>competitor performance metrics</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <ChevronRight className="text-pine flex-shrink-0 mt-1" size={16} />
                <span>industry benchmarking</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Reports Section */}
      <section className="container mx-auto px-4 mb-24 py-24 border-y border-iris/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl impact mb-6 text-white">automated <span className="text-iris">reports & insights</span></h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              get the insights you need delivered automatically, when you need them
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 rounded-xl bg-base/50 border border-iris/20 hover:border-iris/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-iris/10 border border-iris/20 flex items-center justify-center flex-shrink-0">
                  <AreaChart className="text-iris" size={24} />
                </div>
                <div>
                  <h3 className="text-xl impact text-white mb-2">scheduled reporting</h3>
                  <p className="text-gray-400 text-sm">
                    set up automated reports delivered to your inbox daily, weekly, or monthly, with exactly the metrics that matter to your business.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <ChevronRight className="text-iris" size={14} />
                      <span>customizable reporting templates</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <ChevronRight className="text-iris" size={14} />
                      <span>flexible delivery schedules</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <ChevronRight className="text-iris" size={14} />
                      <span>multiple format options (PDF, CSV, etc.)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="p-8 rounded-xl bg-base/50 border border-iris/20 hover:border-iris/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-iris/10 border border-iris/20 flex items-center justify-center flex-shrink-0">
                  <Layers className="text-iris" size={24} />
                </div>
                <div>
                  <h3 className="text-xl impact text-white mb-2">AI-powered insights</h3>
                  <p className="text-gray-400 text-sm">
                    our AI analyzes your data to uncover hidden patterns, opportunities, and actionable recommendations specific to your business goals.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <ChevronRight className="text-iris" size={14} />
                      <span>anomaly detection</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <ChevronRight className="text-iris" size={14} />
                      <span>opportunity identification</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <ChevronRight className="text-iris" size={14} />
                      <span>performance forecasting</span>
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
        <div className="max-w-4xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-iris/20 via-rose/20 to-iris/20 border border-iris/30 text-center">
          <h2 className="text-3xl md:text-4xl impact mb-6 text-white">ready for data that drives growth?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            stop guessing and start growing with analytics that directly impact your bottom line.
          </p>
          
          <button className="px-8 py-4 rounded-xl bg-iris text-white font-medium flex items-center gap-3 mx-auto hover:bg-iris-light transition-colors duration-300">
            <span>get started with analytics</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default DataAnalytics;