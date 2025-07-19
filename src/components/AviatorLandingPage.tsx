
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
                src="/lovable-uploads/e67f0e10-c763-464f-8d18-642b9e053cd9.png" 
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
                <span className="text-sm font-medium text-gray-900">4.9</span>
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
              </div>
              <p className="text-xs text-gray-900 font-medium">19K reviews</p>
            </div>
            
            <div className="text-center">
              <p className="text-sm font-medium mb-1 text-gray-900">500K+</p>
              <p className="text-xs text-gray-900 font-medium">Downloads</p>
            </div>
            
            <div className="text-center flex flex-col items-center">
              <Shield className="w-4 h-4 text-gray-700 mb-1" />
              <p className="text-xs text-gray-900 font-medium">Editors' Choice</p>
            </div>
            
            <div className="text-center">
              <div className="border border-gray-300 rounded px-2 py-1 mb-1">
                <span className="text-xs font-medium text-gray-900">18+</span>
              </div>
              <p className="text-xs text-gray-900 font-medium">Rated for 18+</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mb-4">
            <img 
              src="/lovable-uploads/b589115d-79b5-42ed-8984-550a4e81300a.png" 
              alt="Install and Wishlist buttons" 
              className="w-full max-w-md"
            />
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
          <div className="w-48 h-96 rounded-2xl flex-shrink-0 overflow-hidden">
            <img 
              src="/lovable-uploads/357e6d7c-7d9f-4393-962a-8a17f9951707.png" 
              alt="Aviator Game Screenshot" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-48 h-96 rounded-2xl flex-shrink-0 overflow-hidden">
            <img 
              src="/lovable-uploads/8aeb53cf-f270-4862-a6c2-db517484db59.png" 
              alt="Aviator Game Screenshot" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-48 h-96 rounded-2xl flex-shrink-0 overflow-hidden">
            <img 
              src="/lovable-uploads/d157a601-3eef-4577-a3e8-407f288bdc18.png" 
              alt="Aviator Game Screenshot" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-80 h-96 rounded-2xl flex-shrink-0 overflow-hidden">
            <img 
              src="/lovable-uploads/543e8b4b-395e-4c95-934f-77ed58becde4.png" 
              alt="Aviator Game Screenshot" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-80 h-96 rounded-2xl flex-shrink-0 overflow-hidden">
            <img 
              src="/lovable-uploads/aa0a12f0-a3c9-4f04-b8f3-719154aac77e.png" 
              alt="Aviator Game Screenshot" 
              className="w-full h-full object-cover"
            />
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

        {/* Reviews */}
        <div className="space-y-6 border-t pt-6">
          {/* Review 1 */}
          <div className="flex items-start gap-3">
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
              
              <p className="text-sm text-gray-800 mb-4">
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

          {/* Review 2 */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-medium text-sm">
              R
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900">Rohit Kumar</h3>
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
                <span className="text-xs text-gray-600">July 18, 2025</span>
              </div>
              
              <p className="text-sm text-gray-800 mb-4">
                Best app for earning money! Got 5000rs in one day. Highly recommended!
              </p>
              
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs text-gray-600">342 people found this review helpful</span>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700">Did you find this helpful?</span>
                <Button variant="outline" size="sm" className="text-xs px-4 py-1 h-8 rounded-full">
                  Yes
                </Button>
                <Button variant="outline" size="sm" className="text-xs px-4 py-1 h-8 rounded-full">
                  No
                </Button>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-medium text-sm">
              P
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900">Priya Sharma</h3>
                <button className="text-gray-400">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-1">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-green-600 fill-current" />
                  ))}
                  <Star className="w-3 h-3 text-gray-300" />
                </div>
                <span className="text-xs text-gray-600">July 17, 2025</span>
              </div>
              
              <p className="text-sm text-gray-800 mb-4">
                Good game but sometimes takes time to load. Overall experience is nice.
              </p>
              
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs text-gray-600">128 people found this review helpful</span>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700">Did you find this helpful?</span>
                <Button variant="outline" size="sm" className="text-xs px-4 py-1 h-8 rounded-full">
                  Yes
                </Button>
                <Button variant="outline" size="sm" className="text-xs px-4 py-1 h-8 rounded-full">
                  No
                </Button>
              </div>
            </div>
          </div>

          {/* Review 4 */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-medium text-sm">
              A
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900">Amit Singh</h3>
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
                <span className="text-xs text-gray-600">July 16, 2025</span>
              </div>
              
              <p className="text-sm text-gray-800 mb-4">
                Awesome app! Easy to use and withdraw money instantly. Love it!
              </p>
              
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs text-gray-600">267 people found this review helpful</span>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700">Did you find this helpful?</span>
                <Button variant="outline" size="sm" className="text-xs px-4 py-1 h-8 rounded-full">
                  Yes
                </Button>
                <Button variant="outline" size="sm" className="text-xs px-4 py-1 h-8 rounded-full">
                  No
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AviatorLandingPage;
