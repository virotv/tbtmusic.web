import React from 'react';
import { FileText, Check, BarChart, Ban, Lock, Baby, Copyright, Shield, X, Mail } from 'lucide-react';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-16 border border-gray-100">
          <div className="text-center mb-16">
            <div className="bg-red-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <FileText className="h-12 w-12 text-red-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Terms and conditions for using Top TBT Music - your throwback hits destination
            </p>
          </div>

          <div className="space-y-16">
            <section>
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-red-100 p-3 rounded-full">
                  <Check className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">1. Acceptance of Terms</h2>
              </div>
              <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
                <p>By using Top TBT Music, your destination for curated throwback hits that ruled the charts, you agree to these Terms of Service ("Terms"). If you do not agree, please do not use the app. We may update these Terms periodically, and continued use constitutes acceptance of any changes.</p>
              </div>
            </section>

            <section>
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-red-100 p-3 rounded-full">
                  <Shield className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">2. App Functionality and Data Storage</h2>
              </div>
              <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
                <p>Top TBT Music lets you rediscover the dopest throwback hits, from 90s jams to early 2000s classics. To enhance your experience, we temporarily store:</p>
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                      <span>Recently watched videos to keep your favorite anthems at your fingertips.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                      <span>Playback progress to resume where you left off.</span>
                    </li>
                  </ul>
                </div>
                <p>This data is stored locally on your device, not uploaded to our servers, and can be cleared by clearing the app's cache via your device settings.</p>
              </div>
            </section>

            <section>
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-red-100 p-3 rounded-full">
                  <BarChart className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">3. Analytics and Crash Reporting</h2>
              </div>
              <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
                <p>To keep Top TBT Music running smoothly, we may use anonymized analytics and crash reporting to monitor app performance and fix issues. These tools collect non-personal data, such as usage patterns or crash logs, and do not identify you personally.</p>
              </div>
            </section>

            <section>
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-red-100 p-3 rounded-full">
                  <Ban className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">4. Advertising</h2>
              </div>
              <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
                <p>Top TBT Music is ad-free, ensuring an uninterrupted experience reliving your favorite throwback vibes.</p>
              </div>
            </section>

            <section>
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-red-100 p-3 rounded-full">
                  <Lock className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">5. Permissions</h2>
              </div>
              <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
                <p>To deliver chart-topping classics, Top TBT Music requires:</p>
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                      <div><strong className="text-gray-900">INTERNET:</strong> To stream content from YouTube.</div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                      <div><strong className="text-gray-900">ACCESS_NETWORK_STATE:</strong> To check connection quality for optimal streaming.</div>
                    </li>
                  </ul>
                </div>
                <p>By granting these permissions, you enable access to YouTube's platform for music streaming.</p>
              </div>
            </section>

            <section>
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-red-100 p-3 rounded-full">
                  <Baby className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">6. Children's Privacy</h2>
              </div>
              <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
                <p>Top TBT Music is designed for users 13 and older. Users under 13 are not permitted to use the app. We reserve the right to terminate access for underage users.</p>
              </div>
            </section>

            <section>
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-red-100 p-3 rounded-full">
                  <Copyright className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">7. Content Ownership and Third-Party Services</h2>
              </div>
              <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
                <p>
                  Top TBT Music streams curated throwback hits directly from YouTube using the official YouTube iFrame API via the Android YouTube Player, in compliance with{' '}
                  <a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    YouTube's Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Google's Policies
                  </a>. The app, its original features, design, and curation process are the exclusive property of Top TBT Music and its licensors, protected by copyright, trademark, and other applicable laws.
                </p>
                <p>
                  We do not host, store, modify, or provide any option to download video or audio content. All content, including iconic club bangers and chart-toppers, is streamed directly from YouTube's platform, with copyright belonging to YouTube and the respective artists, labels, or rights holders. Any attempt to download or access content through unauthorized methods or hacks is strictly prohibited and violates our policies, YouTube's Terms of Service, and applicable laws.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-red-100 p-3 rounded-full">
                  <Shield className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">8. Intellectual Property</h2>
              </div>
              <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
                <p>The Top TBT Music app, including its design, features, and curation process, is protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works from the app without our prior written consent.</p>
              </div>
            </section>

            <section>
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-red-100 p-3 rounded-full">
                  <X className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">9. Limitation of Liability</h2>
              </div>
              <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
                <p>Top TBT Music is provided "as is" without warranties. We are not liable for any damages arising from your use of the app, including issues related to YouTube content or user violations of third-party terms. You use the app at your own risk.</p>
              </div>
            </section>

            <section>
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-red-100 p-3 rounded-full">
                  <Ban className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">10. Termination</h2>
              </div>
              <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
                <p>We may suspend or terminate your access to Top TBT Music if you violate these Terms, including misuse of YouTube content or unauthorized use of our app.</p>
              </div>
            </section>

            <section>
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-red-100 p-3 rounded-full">
                  <Mail className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">11. Contact Us</h2>
              </div>
              <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
                <p>For questions about these Terms, contact us at <a href="mailto:tvviro3@gmail.com" className="text-red-600 hover:text-red-700 font-medium transition-colors">tvviro3@gmail.com</a>.</p>
              </div>
            </section>
          </div>

          <div className="mt-16 p-8 bg-red-50 rounded-2xl border border-red-200">
            <div className="text-center">
              <Mail className="h-8 w-8 text-red-600 mx-auto mb-4" />
              <p className="text-gray-700 text-lg">
                <strong className="text-gray-900">Questions about our terms?</strong><br />
                Contact us at <a href="mailto:tvviro3@gmail.com" className="text-red-600 hover:text-red-700 font-medium transition-colors">tvviro3@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;