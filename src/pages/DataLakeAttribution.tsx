import React from 'react';
import { ArrowRight, Database, GitCompare, GitMerge, HardDrive, Server, ChevronRight } from 'lucide-react';

const DataLakeAttribution: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="scanline"></div>
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-6 py-2 mb-6 rounded-full bg-yellow-400/10 border border-yellow-400/30">
            <span className="text-yellow-400 flex items-center gap-2 text-sm">
              <Database size={16} />
              <span>data lake attribution</span>
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl impact mb-8 text-white">
            unified data for <span className="text-yellow-400">complete attribution</span>
          </h1>
          
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            our comprehensive data lake solution combines all your marketing and sales data to provide true multi-touch attribution across online and offline channels.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 rounded-lg bg-yellow-400 text-base-dark font-medium flex items-center justify-center gap-2 hover:bg-yellow-300 transition-colors duration-300">
              <span>unify your data</span>
              <ArrowRight size={18} />
            </button>
            
            <button className="px-6 py-3 rounded-lg bg-transparent border border-yellow-400/30 text-yellow-400 font-medium flex items-center justify-center gap-2 hover:bg-yellow-400/10 transition-colors duration-300">
              <span>see how it works</span>
              <Database size={18} />
            </button>
          </div>
        </div>
      </section>
      
      {/* Key Features Section */}
      <section className="container mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl impact mb-6 text-white">complete attribution <span className="text-yellow-400">solution</span></h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            track and credit every touchpoint in your customer journey for true ROI understanding
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-8 rounded-xl bg-base/50 border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Database className="text-yellow-400" size={24} />
            </div>
            <h3 className="text-2xl impact text-white mb-4">unified data lake</h3>
            <p className="text-gray-400">
              bring all your marketing, sales, and customer data together in one centralized repository for seamless analysis.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <ChevronRight className="text-yellow-400 flex-shrink-0 mt-1" size={16} />
                <span>multi-source data integration</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <ChevronRight className="text-yellow-400 flex-shrink-0 mt-1" size={16} />
                <span>historical data preservation</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <ChevronRight className="text-yellow-400 flex-shrink-0 mt-1" size={16} />
                <span>real-time data processing</span>
              </li>
            </ul>
          </div>
          
          {/* Feature 2 */}
          <div className="p-8 rounded-xl bg-base/50 border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <GitMerge className="text-yellow-400" size={24} />
            </div>
            <h3 className="text-2xl impact text-white mb-4">multi-touch attribution</h3>
            <p className="text-gray-400">
              understand how each marketing touchpoint contributes to conversions with advanced attribution models.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <ChevronRight className="text-yellow-400 flex-shrink-0 mt-1" size={16} />
                <span>first-touch attribution</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <ChevronRight className="text-yellow-400 flex-shrink-0 mt-1" size={16} />
                <span>last-touch attribution</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <ChevronRight className="text-yellow-400 flex-shrink-0 mt-1" size={16} />
                <span>linear & time decay models</span>
              </li>
            </ul>
          </div>
          
          {/* Feature 3 */}
          <div className="p-8 rounded-xl bg-base/50 border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <GitCompare className="text-yellow-400" size={24} />
            </div>
            <h3 className="text-2xl impact text-white mb-4">cross-channel insights</h3>
            <p className="text-gray-400">
              understand how your marketing channels interact and influence each other throughout the customer journey.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <ChevronRight className="text-yellow-400 flex-shrink-0 mt-1" size={16} />
                <span>channel interaction analysis</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <ChevronRight className="text-yellow-400 flex-shrink-0 mt-1" size={16} />
                <span>conversion path visualization</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <ChevronRight className="text-yellow-400 flex-shrink-0 mt-1" size={16} />
                <span>assisted conversion tracking</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="container mx-auto px-4 mb-24 py-24 border-y border-yellow-400/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl impact mb-6 text-white">how our <span className="text-yellow-400">data lake</span> works</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              our comprehensive data solution seamlessly integrates all your marketing data
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 rounded-xl bg-base/50 border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center flex-shrink-0">
                  <HardDrive className="text-yellow-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl impact text-white mb-2">data collection & integration</h3>
                  <p className="text-gray-400 text-sm">
                    we connect to all your marketing platforms, CRM systems, and offline data sources to create a unified view of your customer interactions.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <ChevronRight className="text-yellow-400" size={14} />
                      <span>API integrations with 50+ platforms</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <ChevronRight className="text-yellow-400" size={14} />
                      <span>offline data import capabilities</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <ChevronRight className="text-yellow-400" size={14} />
                      <span>custom tracking implementation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="p-8 rounded-xl bg-base/50 border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center flex-shrink-0">
                  <Server className="text-yellow-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl impact text-white mb-2">attribution modeling</h3>
                  <p className="text-gray-400 text-sm">
                    our system applies multiple attribution models to your data, allowing you to understand how different marketing touchpoints contribute to conversions.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <ChevronRight className="text-yellow-400" size={14} />
                      <span>algorithmic attribution</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <ChevronRight className="text-yellow-400" size={14} />
                      <span>customizable attribution windows</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <ChevronRight className="text-yellow-400" size={14} />
                      <span>revenue attribution modeling</span>
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
        <div className="max-w-4xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-yellow-400/20 via-yellow-400/10 to-yellow-400/5 border border-yellow-400/30 text-center">
          <h2 className="text-3xl md:text-4xl impact mb-6 text-white">ready to unify your marketing data?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            get a complete picture of your marketing performance with our data lake attribution solution.
          </p>
          
          <button className="px-8 py-4 rounded-xl bg-yellow-400 text-base-dark font-medium flex items-center gap-3 mx-auto hover:bg-yellow-300 transition-colors duration-300">
            <span>request a data consultation</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default DataLakeAttribution;