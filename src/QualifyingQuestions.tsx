@@ .. @@
               type="text"
               value={customInput}
               onChange={(e) => setCustomInput(e.target.value)}
               placeholder="please specify your business type..."
-              className="w-full p-4 rounded-md bg-base border border-base-light text-iris-light placeholder-iris-dark focus:outline-none focus:ring-2 focus:ring-rose focus:border-transparent transition-all duration-200 lowercase"
+              className="w-full p-4 rounded-md bg-base border border-base-light text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rose focus:border-transparent transition-all duration-200 lowercase"
             />
@@ .. @@
                 type="button"
                 onClick={() => setIsCustom(false)}
-                className="p-4 rounded-md bg-base border border-base-light hover:border-rose/30 transition-all duration-200 text-iris-dark lowercase"
+                className="p-4 rounded-md bg-base border border-base-light hover:border-rose/30 transition-all duration-200 text-gray-300 lowercase"
               >
                 cancel
               </button>