@@ .. @@
       {/* CTA Button */}
       <div className="absolute top-8 right-8 z-30">
-        <button className="group text-iris-dark px-6 py-3 rounded-md hover:text-rose transition-colors duration-300 flex items-center gap-2">
+        <button className="group text-gray-300 px-6 py-3 rounded-md hover:text-rose transition-colors duration-300 flex items-center gap-2">
           <span>I need help</span>
           <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
         </button>
@@ .. @@
         </h2>
 
-        <p className="text-xl md:text-2xl mb-12 text-iris-dark lowercase max-w-3xl mx-auto">
-          we deliver practical campaign automations for local businesses that lead to <span className="text-iris-dark">results</span>
+        <p className="text-xl md:text-2xl mb-12 text-gray-300 lowercase max-w-3xl mx-auto">
+          we deliver practical campaign automations for local businesses that lead to <span className="text-gray-300">results</span>
         </p>
@@ .. @@
                 </div>
                 <div>
                   <h3 className="text-xl font-semibold text-pine lowercase">campaign automation</h3>
-                  <p className="text-sm text-iris-dark mt-2">we automate your campaign maintenance tasks using AI, where you don't need to pay 3 other marketing managers.</p>
+                  <p className="text-sm text-gray-300 mt-2">we automate your campaign maintenance tasks using AI, where you don't need to pay 3 other marketing managers.</p>
                 </div>
@@ .. @@
                 </div>
                 <div>
                   <h3 className="text-xl font-semibold text-rose lowercase">analytics dashboard</h3>
-                  <p className="text-sm text-iris-dark mt-2">we show you only what matters to you. No more bullsh*t vanity metrics, just the truth.</p>
+                  <p className="text-sm text-gray-300 mt-2">we show you only what matters to you. No more bullsh*t vanity metrics, just the truth.</p>
                 </div>
@@ .. @@
                 </div>
                 <div>
                   <h3 className="text-xl font-semibold text-iris lowercase">lead scoring</h3>
-                  <p className="text-sm text-iris-dark mt-2">implement a lead scoring system that shows you your most profitable channels</p>
+                  <p className="text-sm text-gray-300 mt-2">implement a lead scoring system that shows you your most profitable channels</p>
                 </div>
@@ .. @@
                 </div>
                 <div>
                   <h3 className="text-xl font-semibold text-pine lowercase">crm integration</h3>
-                  <p className="text-sm text-iris-dark mt-2">we combine all your data and leads into 1 place, so you can actually understand what's going on</p>
+                  <p className="text-sm text-gray-300 mt-2">we combine all your data and leads into 1 place, so you can actually understand what's going on</p>
                 </div>
@@ .. @@
         {/* Quote below tiles */}
         <div className="mt-32 text-center">
-          <p className="text-iris-dark lowercase text-xl">
+          <p className="text-gray-300 lowercase text-xl">
             <span className="text-rose bg-clip-text text-transparent bg-gradient-to-r from-rose-light to-rose">"</span>{quotes[currentQuote].text}<span className="text-rose bg-clip-text text-transparent bg-gradient-to-r from-rose to-rose-light">"</span>
-            <span className="block mt-2 text-iris-dark">— {quotes[currentQuote].author}</span>
+            <span className="block mt-2 text-gray-400">— {quotes[currentQuote].author}</span>
           </p>
         </div>