import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Hero from './components/Hero';
import QualifyingQuestions from './components/QualifyingQuestions';
import PricingPlans from './components/PricingPlans';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CampaignAutomation from './pages/CampaignAutomation';
import DataAnalytics from './pages/DataAnalytics';
import LeadScoring from './pages/LeadScoring';
import DataLakeAttribution from './pages/DataLakeAttribution';

const STORAGE_KEY = 'marketing_answers';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showQuestions, setShowQuestions] = useState(false);
  const [showPricing, setShowPricing] = useState(false);

  const [answers, setAnswers] = useState<Record<string, string>>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : { search_query: '' };
  });

  // For debugging
  useEffect(() => {
    console.log("Current answers:", answers);
    console.log("Show pricing:", showPricing);
  }, [answers, showPricing]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const newAnswers = { ...answers, search_query: query };
    setAnswers(newAnswers);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newAnswers));
    setShowQuestions(true);
  };

  const handleStartQuestionnaire = () => {
    // Start with a default search query if the user clicks "get started" without searching
    const defaultQuery = "marketing automation help";
    setSearchQuery(defaultQuery);
    const newAnswers = { ...answers, search_query: defaultQuery };
    setAnswers(newAnswers);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newAnswers));
    setShowQuestions(true);
    setShowPricing(false);
    
    // Scroll to the top to ensure the user sees the questions
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuestionsComplete = (questionAnswers: Record<string, string>) => {
    const newAnswers = {
      ...questionAnswers,
      search_query: answers.search_query // Preserve the initial search query
    };
    setAnswers(newAnswers);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newAnswers));
    setShowPricing(true);
  };

  const clearProgress = () => {
    localStorage.removeItem(STORAGE_KEY);
    setAnswers({ search_query: '' });
    setShowQuestions(false);
    setShowPricing(false);
  };

  const HomeContent = () => (
    <>
      {!showQuestions && (
        <Hero onSearch={handleSearch} savedAnswers={answers} onClearProgress={clearProgress} onGetStarted={handleStartQuestionnaire} />
      )}

      {showQuestions && !showPricing && (
        <div className="container mx-auto px-4 py-16">
          <QualifyingQuestions 
            onComplete={handleQuestionsComplete} 
            searchQuery={searchQuery}
            savedAnswers={answers}
          />
        </div>
      )}

      {showPricing && (
        <div className="container mx-auto px-4 py-16">
          <PricingPlans 
            answers={answers} 
            onSave={(updatedAnswers) => {
              setAnswers(updatedAnswers);
              localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedAnswers));
            }}
          />
        </div>
      )}
    </>
  );

  return (
    <Router>
      <div className="min-h-screen bg-base-dark text-gray-300 font-sans lowercase">
        <div className="scanline"></div>
        <NavBar clearProgress={clearProgress} onGetStarted={handleStartQuestionnaire} />
        <div className="relative md:pl-64">
          <div className="relative z-10">
            <Routes>
              <Route path="/" element={<HomeContent />} />
              <Route path="/campaign-automation" element={<CampaignAutomation />} />
              <Route path="/data-analytics" element={<DataAnalytics />} />
              <Route path="/lead-scoring" element={<LeadScoring />} />
              <Route path="/data-lake-attribution" element={<DataLakeAttribution />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;