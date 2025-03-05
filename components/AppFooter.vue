<template>
  <footer class="bg-base/80 border-t border-pine/10 pt-20 pb-8 md:pl-64">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-12">
        <!-- Brand Section -->
        <div class="md:col-span-2">
          <NuxtLink to="/" class="text-2xl impact text-rose flex items-center gap-2 transition-colors duration-300 hover:text-pine">
            <span>it's just good marketing</span>
            <Zap class="text-pine" :size="20" />
          </NuxtLink>
          <p class="text-gray-400 mt-4 max-w-md">
            we deliver practical campaign automations for local businesses that lead to real results. no bullsh*t vanity metrics, just strategies that actually work.
          </p>
          
          <div class="mt-8 flex space-x-4">
            <a href="#" class="w-10 h-10 rounded-full bg-base-light flex items-center justify-center text-gray-400 hover:text-pine hover:bg-base transition-colors duration-300">
              <Twitter :size="18" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-base-light flex items-center justify-center text-gray-400 hover:text-pine hover:bg-base transition-colors duration-300">
              <Linkedin :size="18" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-base-light flex items-center justify-center text-gray-400 hover:text-pine hover:bg-base transition-colors duration-300">
              <Github :size="18" />
            </a>
            <a href="mailto:contact@goodmarketing.com" class="w-10 h-10 rounded-full bg-base-light flex items-center justify-center text-gray-400 hover:text-pine hover:bg-base transition-colors duration-300">
              <Mail :size="18" />
            </a>
          </div>
        </div>
        
        <!-- Services -->
        <div class="space-y-4">
          <h3 class="text-lg impact text-white mb-4">services</h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="/campaign-automation" class="text-gray-400 hover:text-pine transition-colors duration-200 flex items-center gap-2">
                <Target :size="14" />
                <span>campaign automation</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/data-analytics" class="text-gray-400 hover:text-pine transition-colors duration-200 flex items-center gap-2">
                <BarChart3 :size="14" />
                <span>data analytics</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/lead-scoring" class="text-gray-400 hover:text-pine transition-colors duration-200 flex items-center gap-2">
                <Zap :size="14" />
                <span>lead scoring</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/data-lake-attribution" class="text-gray-400 hover:text-pine transition-colors duration-200 flex items-center gap-2">
                <Database :size="14" />
                <span>data lake attribution</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
        
        <!-- Resources -->
        <div class="space-y-4">
          <h3 class="text-lg impact text-white mb-4">resources</h3>
          <ul class="space-y-3">
            <li>
              <a href="#" class="text-gray-400 hover:text-pine transition-colors duration-200">case studies</a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-pine transition-colors duration-200">blog</a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-pine transition-colors duration-200">documentation</a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-pine transition-colors duration-200">faq</a>
            </li>
          </ul>
        </div>
        
        <!-- Company -->
        <div class="space-y-4">
          <h3 class="text-lg impact text-white mb-4">company</h3>
          <ul class="space-y-3">
            <li>
              <a href="#" class="text-gray-400 hover:text-pine transition-colors duration-200">about us</a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-pine transition-colors duration-200">careers</a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-pine transition-colors duration-200">privacy policy</a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-pine transition-colors duration-200">terms of service</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="mt-20 pt-8 border-t border-pine/10 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-500 text-sm">© 2025 good marketing. all rights reserved.</p>
        <div class="mt-4 md:mt-0">
          <button class="px-6 py-3 rounded-full bg-rose/10 border border-rose/30 text-rose hover:bg-rose/20 transition-all duration-300 flex items-center gap-2">
            <span>schedule a consultation</span>
            <ArrowRight :size="16" />
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { BarChart3, Target, Zap, Database, ArrowRight, Mail, Twitter, Linkedin, Github } from 'lucide-vue-next';
</script>