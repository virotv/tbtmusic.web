import React from 'react';
import { Shield, Eye, BarChart, Ban, Lock, Baby, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-16 border border-gray-100">
          <div className="text-center mb-16">
            <div className="bg-red-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Shield className="h-12 w-12 text-red-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Your privacy matters to us. Here's how we handle your data while you enjoy throwback hits.
            </p>
          </div>

          <div className="space-y-16">
            <section>
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-red-100 p-3 rounded-full">
                  <Eye className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">1. Information We Collect</h2>
              </div>
              <div className="text-gray-700 space-y-6 text-lg leading-relaxed">
                <p className="font-medium">We collect minimal data to bring you throwback hits:</p>
                <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-red-600">
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-900">Watch History and Playback Progress:</strong> Stored locally on your device to resume your favorite 90s or 2000s jams. This data is not uploaded to our servers and is deleted when you clear the app's cache.
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-900">Third-Party Data:</strong> Streaming via YouTube's iFrame API may involve data collection by YouTube, subject to Google's Privacy Policy. We do not collect personal data like names or emails.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-red-100 p-3 rounded-full">
                  <BarChart className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">2. Analytics and Crash Reporting</h2>
              </div>
              <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
                <p>We may use anonymized analytics and crash reporting tools to improve app performance. These collect non-personal data, such as usage patterns or crash logs, and do not identify you personally.</p>
              </div>
            </section>

            <section>
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-red-100 p-3 rounded-full">
                  <Ban className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">3. Advertising</h2>
              </div>
              <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
                <p>Top TBT Music is ad-free and does not collect or use data for advertising purposes.</p>
              </div>
            </section>

            <section>
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-red-100 p-3 rounded-full">
                  <Lock className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">4. Permissions</h2>
              </div>
              <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
                <p className="font-medium">We require:</p>
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                      <div><strong className="text-gray-900">INTERNET:</strong> To stream throwback hits from YouTube.</div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                      <div><strong className="text-gray-900">ACCESS_NETWORK_STATE:</strong> To check connection quality for smooth streaming.</div>
                    </li>
                  </ul>
                </div>
                <p>These permissions may involve data transmission to YouTube, governed by Google's Privacy Policy.</p>
              </div>
            </section>

            <section>
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-red-100 p-3 rounded-full">
                  <Baby className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">5. Children's Privacy</h2>
              </div>
              <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
                <p>Top TBT Music is not intended for children under 13. We do not knowingly collect personal data from children under 13. If such data is collected, we will delete it promptly. Parents with concerns should contact us at tvviro3@gmail.com.</p>
              </div>
            </section>
          </div>

          <div className="mt-16 p-8 bg-red-50 rounded-2xl border border-red-200">
            <div className="text-center">
              <Mail className="h-8 w-8 text-red-600 mx-auto mb-4" />
              <p className="text-gray-700 text-lg">
                <strong className="text-gray-900">Questions about our privacy policy?</strong><br />
                Contact us at <a href="mailto:tvviro3@gmail.com" className="text-red-600 hover:text-red-700 font-medium transition-colors">tvviro3@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;