
import React from 'react';
import { Star, Download, Share, MoreVertical, Shield, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const AviatorLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* App Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-start gap-4">
            {/* App Icon */}
            <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
              <img 
                src="/lovable-uploads/75f7deac-19b4-4604-9725-48a4fe6d8206.png" 
                alt="Aviator Game" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* App Info */}
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-2xl font-normal text-gray-900 mb-1">Aviator Game</h1>
                  <p className="text-sm text-green-600 mb-1">Casino co.</p>
                  <p className="text-sm text-gray-600">Without ads · In-app purchases</p>
                </div>
                <button className="p-2">
                  <MoreVertical className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="flex items-center gap-8 mt-6 mb-6">
            <div className="text-center">
              <div className="flex items-center gap-1 mb-1">
                <span className="text-sm font-medium">4.9</span>
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
              </div>
              <p className="text-xs text-gray-600">19K reviews</p>
            </div>
            
            <div className="text-center">
              <p className="text-sm font-medium mb-1">500K+</p>
              <p className="text-xs text-gray-600">Downloads</p>
            </div>
            
            <div className="text-center flex flex-col items-center">
              <Shield className="w-4 h-4 text-gray-600 mb-1" />
              <p className="text-xs text-gray-600">Editors' Choice</p>
            </div>
            
            <div className="text-center">
              <div className="border border-gray-300 rounded px-2 py-1 mb-1">
                <span className="text-xs font-medium">18+</span>
              </div>
              <p className="text-xs text-gray-600">Rated for 18+</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mb-4">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium flex-1">
              Install
            </Button>
            <Button variant="outline" className="px-4 py-3 rounded-lg border-gray-300">
              <Share className="w-5 h-5" />
            </Button>
            <Button variant="outline" className="px-4 py-3 rounded-lg border-gray-300 text-green-600 border-green-600">
              Add to wishlist
            </Button>
          </div>

          {/* Device Compatibility */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Smartphone className="w-4 h-4" />
            <span>This app is available for all of your devices.</span>
          </div>
        </div>
      </div>

      {/* Screenshots Section */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex gap-3 overflow-x-auto pb-4">
          <div className="w-48 h-96 bg-black rounded-2xl flex-shrink-0 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-900 to-black">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="text-white text-3xl font-bold mb-2">1.26x</div>
                <div className="text-red-500 text-lg font-bold">Aviator</div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-green-600 text-white text-center py-2 rounded text-sm font-medium mb-2">
                  BET
                </div>
              </div>
            </div>
          </div>

          <div className="w-48 h-96 bg-black rounded-2xl flex-shrink-0 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-900 to-black">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="text-white text-3xl font-bold mb-2">21x</div>
                <div className="text-red-500 text-lg font-bold">Aviator</div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-red-600 text-white text-center py-2 rounded text-sm font-medium mb-2">
                  CASH OUT
                </div>
              </div>
            </div>
          </div>

          <div className="w-48 h-96 bg-black rounded-2xl flex-shrink-0 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-900 to-black flex flex-col items-center justify-center">
              <div className="text-white text-3xl font-bold mb-2">12.16x</div>
              <div className="text-center text-white text-sm mb-4">
                <div className="mb-2">WELCOME BONUS</div>
                <div className="text-yellow-400 text-2xl font-bold">+500%</div>
                <div className="text-xs">UP TO 150000₹</div>
              </div>
            </div>
          </div>

          <div className="w-80 h-96 bg-black rounded-2xl flex-shrink-0 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-900 to-black flex items-center justify-center">
              <div className="text-center">
                <div className="text-red-500 text-6xl font-bold mb-4 transform -rotate-12">Aviator</div>
                <div className="text-white text-2xl font-bold">5.21x</div>
              </div>
            </div>
          </div>

          <div className="w-48 h-96 bg-black rounded-2xl flex-shrink-0 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-900 to-black">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="text-white text-3xl font-bold mb-2">12.16x</div>
                <div className="text-red-500 text-lg font-bold">Aviator</div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-red-600 text-white text-center py-2 rounded text-sm font-medium mb-2">
                  CASH OUT
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-4xl mx-auto px-4 py-6 border-t">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-normal text-gray-900">About this game</h2>
          <button className="text-gray-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
          <p>
            India's first leading real money making Aviator game where you can start earning instantly and withdraw profit directly to your Bank account using UPI. You can change your destiny using this app.
          </p>
          <p>
            Supported payment Apps are PhonePe, Gpay, Paytm, all other UPI Apps etc.
          </p>
        </div>

        <div className="mt-6 text-sm">
          <div className="text-gray-900 font-medium mb-1">Updated on</div>
          <div className="text-gray-600">July 18, 2025</div>
        </div>
      </div>

      {/* Data Safety Section */}
      <div className="max-w-4xl mx-auto px-4 py-6 border-t">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-normal text-gray-900">Data safety</h2>
          <button className="text-gray-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <p className="text-sm text-gray-600 mb-6">
          In this section, developers can specify how applications collect and use data.
        </p>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Share className="w-5 h-5 text-gray-600 mt-0.5" />
            <div>
              <div className="text-sm font-medium text-gray-900 mb-1">No data shared with third parties</div>
              <div className="text-sm text-blue-600">Learn more <span className="text-gray-600">about how developers declare sharing</span></div>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-gray-600 mt-0.5" />
            <div>
              <div className="text-sm font-medium text-gray-900 mb-1">No data collected</div>
              <div className="text-sm text-blue-600">Learn more <span className="text-gray-600">about how developers declare collection</span></div>
            </div>
          </div>
        </div>

        <button className="text-sm text-green-600 font-medium mt-4">
          See details
        </button>
      </div>

      {/* Ratings Section */}
      <div className="max-w-4xl mx-auto px-4 py-6 border-t">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-normal text-gray-900">Ratings and reviews</h2>
          <button className="text-gray-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-8 mb-8">
          <div className="text-center">
            <div className="text-5xl font-light text-gray-900 mb-2">4.9</div>
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-green-600 fill-current" />
              ))}
            </div>
            <p className="text-sm text-gray-600">19K reviews</p>
          </div>
          
          <div className="flex-1">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center gap-3 mb-2">
                <span className="text-sm text-gray-600 w-2">{rating}</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${rating === 5 ? 'bg-green-600 w-full' : rating === 4 ? 'bg-green-600 w-1/6' : 'bg-green-600 w-0'}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Review */}
        <div className="border-t pt-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium text-sm">
              U
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900">Umesh Bandgar</h3>
                <button className="text-gray-400">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-green-600 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-gray-600">July 19, 2025</span>
              </div>
              
              <p className="text-sm text-gray-700 mb-4">
                It's working fast. I withdrawal 2500 rs in 10 minut
              </p>
              
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs text-gray-600">486 people found this review helpful</span>
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm text-gray-700">Did you find this helpful?</span>
                <Button variant="outline" size="sm" className="text-xs px-4 py-1 h-8 rounded-full">
                  Yes
                </Button>
                <Button variant="outline" size="sm" className="text-xs px-4 py-1 h-8 rounded-full">
                  No
                </Button>
              </div>
              
              {/* Developer Response */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-gray-900">Casino Apps</span>
                  <span className="text-xs text-gray-600">July 19, 2025</span>
                </div>
                <p className="text-sm text-gray-700">
                  Thanks you for your positive feedback! We're thrilled to hear that you enjoyed the game. Keep spinning and have a fantastic time!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AviatorLandingPage;
