import React, { useState } from 'react';
import { Search, Check, BarChart3, Target, Zap, Database, ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface HeroProps {
  onSearch: (query: string) => void;
  savedAnswers?: Record<string, string>;
  onClearProgress?: () => void;
  onGetStarted?: () => void;
}

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

const Hero: React.FC<HeroProps> = ({ onSearch, savedAnswers, onClearProgress, onGetStarted }) => {
  const [query, setQuery] = useState('');
  const [hoveredTile, setHoveredTile] = useState<number | null>(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      setShowSuggestions(false);
    }
  };

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

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

      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      // When no input, hide suggestions
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setShowSuggestions(false);
    onSearch(suggestion);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleGetStarted = () => {
    if (onGetStarted) {
      onGetStarted();
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* CTA Button */}
      <div className="absolute top-8 right-8 z-30">
        {savedAnswers && Object.keys(savedAnswers).length > 1 ? (
          <button 
            onClick={onClearProgress}
            className="group text-white px-6 py-3 rounded-md hover:text-rose transition-colors duration-300 flex items-center gap-2"
          >
            <span>start over</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
          </button>
        ) : (
          <button 
            onClick={handleGetStarted}
            className="group text-gray-300 px-6 py-3 rounded-md hover:text-rose transition-colors duration-300 flex items-center gap-2"
          >
            <span>get started</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
          </button>
        )}
      </div>

      {/* Title with scrolling animation - no flashlight effect */}
      <div className="fixed top-0 left-0 w-full overflow-hidden whitespace-nowrap z-10 pointer-events-none">
        <h1 
          className="text-[400px] impact lowercase animate-scroll inline-block"
          style={{
            color: 'rgba(255, 255, 255, 0.9)',
            letterSpacing: '0.02em',
            textShadow: '0 0 30px rgba(0, 255, 140, 0.15)',
            opacity: '0.2'
          }}
        >
          it's just good marketing<span className="text-yellow-400 drop-shadow-[0_0_30px_rgba(234,179,8,0.8)]" style={{ textShadow: '0 0 30px rgba(234,179,8,0.8)' }}>.</span> it's just good marketing<span className="text-yellow-400 drop-shadow-[0_0_30px_rgba(234,179,8,0.8)]" style={{ textShadow: '0 0 30px rgba(234,179,8,0.8)' }}>.</span> it's just good marketing<span className="text-yellow-400 drop-shadow-[0_0_30px_rgba(234,179,8,0.8)]" style={{ textShadow: '0 0 30px rgba(234,179,8,0.8)' }}>.</span> it's just good marketing<span className="text-yellow-400 drop-shadow-[0_0_30px_rgba(234,179,8,0.8)]" style={{ textShadow: '0 0 30px rgba(234,179,8,0.8)' }}>.</span>
        </h1>
      </div>
      
      {/* Hero content */}
      <div className="relative z-20 max-w-4xl w-full text-center mt-[55vh]">
        <p className="text-xl md:text-2xl mb-12 text-white lowercase max-w-3xl mx-auto">
          we deliver practical campaign automations for local businesses that lead to <span className="text-white">results</span>
        </p>
        
        <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto mb-16">
          <div className="relative" ref={searchContainerRef}>
            <input
              type="text"
              value={query}
              onChange={handleQueryChange}
              onFocus={() => setShowSuggestions(!!query.trim())}
              placeholder="what marketing challenge can we help you with?"
              className="w-full py-4 px-6 pr-12 rounded-t-md bg-base/80 border border-pine/30 text-pine placeholder-gray-400 focus:outline-none transition-all duration-200 lowercase backdrop-blur-sm"
            />
            <button 
              type="submit" 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-pine hover:text-pine-light transition-colors"
            >
              <Search size={24} />
            </button>
            
            {/* Common Challenges Dropdown */}
            {showSuggestions && (
              <div className="absolute w-full bg-base border border-t-0 border-base-light rounded-b-md shadow-lg z-50 max-h-80 overflow-y-auto">
                <div className="sticky top-0 bg-base border-b border-base-light">
                  <div className="p-3">
                    <p className="text-sm text-gray-400 lowercase flex items-center gap-2">
                      <Target size={14} className="text-rose" />
                      popular searches:
                    </p>
                  </div>
                </div>
                {filteredSuggestions.map((challenge, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(challenge)}
                    className={`w-full text-left px-4 py-3 hover:bg-base-light transition-colors duration-200 flex items-center gap-2 group lowercase
                      ${challenge.toLowerCase().startsWith(query.toLowerCase()) 
                        ? 'text-pine' 
                        : 'text-yellow-200/70'}`}
                  >
                    <Search 
                      size={16} 
                      className={`${challenge.toLowerCase().startsWith(query.toLowerCase())
                        ? 'text-pine group-hover:text-pine-light'
                        : 'text-gray-500 group-hover:text-rose'} 
                        transition-colors duration-200`}
                    />
                    <span>{challenge}</span>
                  </button>
                ))}
                {query.trim() && filteredSuggestions.length === 0 && (
                  <div className="px-4 py-3 text-gray-500 italic lowercase">
                    no matching queries found
                  </div>
                )}
              </div>
            )}
          </div>
        </form>
        
        {/* Feature Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-32 max-w-3xl mx-auto">
          <div 
            className="feature-tile group"
            onMouseEnter={() => setHoveredTile(0)}
            onMouseLeave={() => setHoveredTile(null)}
          >
            <div className="tile-bg-gradient" />
            <div className="tile-floating-blob -right-8 -top-8" />
            <div className="tile-content text-left">
              <div className="flex items-start gap-4">
                <div className="group-hover:scale-110 transition-transform duration-500">
                  <BarChart3 className="text-yellow-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl impact text-yellow-400 lowercase">campaign automation</h3>
                  <p className="text-sm text-white mt-2">we automate your campaign maintenance tasks using AI, where you don't need to pay 3 other marketing managers.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className="feature-tile group"
            onMouseEnter={() => setHoveredTile(1)}
            onMouseLeave={() => setHoveredTile(null)}
          >
            <div className="tile-bg-gradient" />
            <div className="tile-floating-blob -left-8 -bottom-8" />
            <div className="tile-content text-left">
              <div className="flex items-start gap-4">
                <div className="group-hover:scale-110 transition-transform duration-500">
                  <Target className="text-rose" size={24} />
                </div>
                <div>
                  <h3 className="text-xl impact text-rose lowercase">analytics dashboard</h3>
                  <p className="text-sm text-white mt-2">we show you only what matters to you. No more bullsh*t vanity metrics, just the truth.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className="feature-tile group"
            onMouseEnter={() => setHoveredTile(2)}
            onMouseLeave={() => setHoveredTile(null)}
          >
            <div className="tile-bg-gradient" />
            <div className="tile-floating-blob -right-8 -bottom-8" />
            <div className="tile-content text-left">
              <div className="flex items-start gap-4">
                <div className="group-hover:scale-110 transition-transform duration-500">
                  <Zap className="text-iris" size={24} />
                </div>
                <div>
                  <h3 className="text-xl impact text-iris lowercase">lead scoring</h3>
                  <p className="text-sm text-white mt-2">implement a lead scoring system that shows you your most profitable channels</p>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className="feature-tile group"
            onMouseEnter={() => setHoveredTile(3)}
            onMouseLeave={() => setHoveredTile(null)}
          >
            <div className="tile-bg-gradient" />
            <div className="tile-floating-blob -left-8 -top-8" />
            <div className="tile-content text-left">
              <div className="flex items-start gap-4">
                <div className="group-hover:scale-110 transition-transform duration-500">
                  <Database className="text-pine" size={24} />
                </div>
                <div>
                  <h3 className="text-xl impact text-pine lowercase">crm integration</h3>
                  <p className="text-sm text-white mt-2">we combine all your data and leads into 1 place, so you can actually understand what's going on</p>
                </div>
              </div>
              <div className="tesseract">
                {/* Yellow tesseract */}
                <div className="tesseract-inner">
                  <div className="tesseract-face"></div>
                  <div className="tesseract-face"></div>
                  <div className="tesseract-face"></div>
                  <div className="tesseract-face"></div>
                  <div className="tesseract-face"></div>
                  <div className="tesseract-face"></div>
                </div>
                {/* Cyan tesseract */}
                <div className="tesseract-inner">
                  <div className="tesseract-face"></div>
                  <div className="tesseract-face"></div>
                  <div className="tesseract-face"></div>
                  <div className="tesseract-face"></div>
                  <div className="tesseract-face"></div>
                  <div className="tesseract-face"></div>
                </div>
                {/* Purple tesseract */}
                <div className="tesseract-inner">
                  <div className="tesseract-face"></div>
                  <div className="tesseract-face"></div>
                  <div className="tesseract-face"></div>
                  <div className="tesseract-face"></div>
                  <div className="tesseract-face"></div>
                  <div className="tesseract-face"></div>
                </div>
                {/* Green tesseract */}
                <div className="tesseract-inner">
                  <div className="tesseract-face"></div>
                  <div className="tesseract-face"></div>
                  <div className="tesseract-face"></div>
                  <div className="tesseract-face"></div>
                  <div className="tesseract-face"></div>
                  <div className="tesseract-face"></div>
                </div>
                {/* Pink tesseract */}
                <div className="tesseract-inner">
                  <div className="tesseract-face"></div>
                  <div className="tesseract-face"></div>
                  <div className="tesseract-face"></div>
                  <div className="tesseract-face"></div>
                  <div className="tesseract-face"></div>
                  <div className="tesseract-face"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;