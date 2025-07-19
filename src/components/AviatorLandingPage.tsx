
import React from 'react';
import { Star, Play, Download, Users, Trophy, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const AviatorLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-600 via-red-700 to-red-800">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=40&h=40&fit=crop&crop=center" 
              alt="4rabet Logo" 
              className="w-10 h-10 rounded-full"
            />
            <span className="text-2xl font-bold text-red-600">4rabet</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold">
              Register
            </Button>
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 px-6 py-2 rounded-full font-semibold">
              Login
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <Badge className="bg-yellow-500 text-black px-4 py-2 text-sm font-bold rounded-full">
                  🎮 #1 CRASH GAME
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-black leading-tight">
                  PLAY <span className="text-yellow-400">AVIATOR</span>
                  <br />
                  WIN BIG!
                </h1>
                <p className="text-xl text-red-100 max-w-lg">
                  The most thrilling crash game experience. Watch the plane fly higher and cash out before it crashes!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 text-lg font-bold rounded-full flex items-center gap-2">
                  <Play className="w-6 h-6" />
                  PLAY NOW
                </Button>
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-bold rounded-full flex items-center gap-2">
                  <Download className="w-6 h-6" />
                  DOWNLOAD APP
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">500K+</div>
                  <div className="text-sm text-red-200">Active Players</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">₹50L+</div>
                  <div className="text-sm text-red-200">Daily Payouts</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">4.8★</div>
                  <div className="text-sm text-red-200">User Rating</div>
                </div>
              </div>
            </div>

            {/* Right Content - Game Preview */}
            <div className="relative">
              <div className="bg-black rounded-3xl p-8 shadow-2xl border-4 border-yellow-500">
                <div className="aspect-video bg-gradient-to-br from-blue-900 to-purple-900 rounded-xl relative overflow-hidden">
                  {/* Game UI Mockup */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                    <Badge className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                      ● LIVE
                    </Badge>
                    <div className="text-white text-sm">Round #12547</div>
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-yellow-400 animate-pulse">
                        2.45x
                      </div>
                      <div className="text-white text-lg mt-2">Flying...</div>
                    </div>
                  </div>

                  {/* Plane Animation */}
                  <div className="absolute bottom-8 left-8 transform rotate-12">
                    <div className="text-4xl">✈️</div>
                  </div>

                  {/* Graph Line */}
                  <svg className="absolute bottom-0 left-0 w-full h-32 opacity-50">
                    <path
                      d="M 0,128 Q 50,100 100,80 T 200,40 T 300,20"
                      stroke="#fbbf24"
                      strokeWidth="3"
                      fill="none"
                    />
                  </svg>
                </div>

                {/* Game Controls Mockup */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="text-gray-400 text-sm mb-2">Bet Amount</div>
                    <div className="text-white text-lg font-bold">₹100</div>
                  </div>
                  <div className="bg-red-600 rounded-lg p-4 text-center">
                    <div className="text-white font-bold">CASH OUT</div>
                    <div className="text-yellow-300 text-sm">₹245</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-500 text-black p-3 rounded-full animate-bounce">
                <Trophy className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-full animate-pulse">
                <Zap className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose 4rabet Aviator?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the most advanced and secure aviator game platform with amazing features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">100% Safe & Secure</h3>
              <p className="text-gray-600">
                Licensed and regulated platform with advanced encryption and secure payment methods
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Instant Payouts</h3>
              <p className="text-gray-600">
                Lightning-fast withdrawals with multiple payment options and 24/7 support
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl">
              <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Live Multiplayer</h3>
              <p className="text-gray-600">
                Play with thousands of players worldwide in real-time with live chat and leaderboards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Players Say About Us
            </h2>
            <div className="flex items-center justify-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
              <span className="text-white text-xl ml-2">4.8/5 Rating</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-2xl">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=60&h=60&fit=crop&crop=face"
                  alt="User 1" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="text-white font-bold">Rahul K.</div>
                  <div className="text-gray-400 text-sm">Mumbai</div>
                </div>
              </div>
              <p className="text-gray-300">
                "Amazing game! Won ₹25,000 in my first week. The interface is smooth and payouts are instant. Highly recommended!"
              </p>
              <div className="flex mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-2xl">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=60&h=60&fit=crop&crop=face"
                  alt="User 2" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="text-white font-bold">Priya S.</div>
                  <div className="text-gray-400 text-sm">Delhi</div>
                </div>
              </div>
              <p className="text-gray-300">
                "Best aviator platform I've used. Great customer support and the app works perfectly on mobile!"
              </p>
              <div className="flex mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-2xl">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=60&h=60&fit=crop&crop=face"
                  alt="User 3" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="text-white font-bold">Arjun M.</div>
                  <div className="text-gray-400 text-sm">Bangalore</div>
                </div>
              </div>
              <p className="text-gray-300">
                "Love the multiplayer aspect! Playing with friends makes it even more exciting. Safe and reliable platform."
              </p>
              <div className="flex mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Winning?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join thousands of players and start your aviator journey today. Get exclusive bonuses and instant payouts!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black px-12 py-4 text-xl font-bold rounded-full flex items-center gap-3">
              <Play className="w-7 h-7" />
              PLAY AVIATOR NOW
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 text-xl font-bold rounded-full flex items-center gap-3">
              <Download className="w-7 h-7" />
              GET MOBILE APP
            </Button>
          </div>

          <div className="mt-8 text-red-200">
            <p className="text-lg">🎁 <strong>Welcome Bonus:</strong> Get 100% match bonus up to ₹10,000!</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=40&h=40&fit=crop&crop=center" 
                  alt="4rabet Logo" 
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-xl font-bold text-red-500">4rabet</span>
              </div>
              <p className="text-gray-400 text-sm">
                The most trusted aviator gaming platform in India. Licensed, secure, and reliable.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">How to Play</a></li>
                <li><a href="#" className="hover:text-white">Download App</a></li>
                <li><a href="#" className="hover:text-white">Bonuses</a></li>
                <li><a href="#" className="hover:text-white">Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">24/7 Live Chat</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Secure & Licensed</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-gray-400 text-sm">SSL Encrypted</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-gray-400 text-sm">Licensed & Regulated</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-gray-400 text-sm">Fair Play Certified</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 4rabet. All rights reserved. | 18+ Only | Please play responsibly.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AviatorLandingPage;
