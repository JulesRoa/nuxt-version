import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Target, Zap, Database, Mail, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-base/80 border-t border-pine/10 pt-20 pb-8 md:pl-64">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl impact text-rose flex items-center gap-2 transition-colors duration-300 hover:text-pine">
              <span>it's just good marketing</span>
              <Zap className="text-pine" size={20} />
            </Link>
            <p className="text-gray-400 mt-4 max-w-md">
              we deliver practical campaign automations for local businesses that lead to real results. no bullsh*t vanity metrics, just strategies that actually work.
            </p>
            
            <div className="mt-8 flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-base-light flex items-center justify-center text-gray-400 hover:text-pine hover:bg-base transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-base-light flex items-center justify-center text-gray-400 hover:text-pine hover:bg-base transition-colors duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-base-light flex items-center justify-center text-gray-400 hover:text-pine hover:bg-base transition-colors duration-300">
                <Github size={18} />
              </a>
              <a href="mailto:contact@goodmarketing.com" className="w-10 h-10 rounded-full bg-base-light flex items-center justify-center text-gray-400 hover:text-pine hover:bg-base transition-colors duration-300">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg impact text-white mb-4">services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/campaign-automation" className="text-gray-400 hover:text-pine transition-colors duration-200 flex items-center gap-2">
                  <Target size={14} />
                  <span>campaign automation</span>
                </Link>
              </li>
              <li>
                <Link to="/data-analytics" className="text-gray-400 hover:text-pine transition-colors duration-200 flex items-center gap-2">
                  <BarChart3 size={14} />
                  <span>data analytics</span>
                </Link>
              </li>
              <li>
                <Link to="/lead-scoring" className="text-gray-400 hover:text-pine transition-colors duration-200 flex items-center gap-2">
                  <Zap size={14} />
                  <span>lead scoring</span>
                </Link>
              </li>
              <li>
                <Link to="/data-lake-attribution" className="text-gray-400 hover:text-pine transition-colors duration-200 flex items-center gap-2">
                  <Database size={14} />
                  <span>data lake attribution</span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg impact text-white mb-4">resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-pine transition-colors duration-200">case studies</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-pine transition-colors duration-200">blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-pine transition-colors duration-200">documentation</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-pine transition-colors duration-200">faq</a>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg impact text-white mb-4">company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-pine transition-colors duration-200">about us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-pine transition-colors duration-200">careers</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-pine transition-colors duration-200">privacy policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-pine transition-colors duration-200">terms of service</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-pine/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2025 good marketing. all rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <button className="px-6 py-3 rounded-full bg-rose/10 border border-rose/30 text-rose hover:bg-rose/20 transition-all duration-300 flex items-center gap-2">
              <span>schedule a consultation</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;