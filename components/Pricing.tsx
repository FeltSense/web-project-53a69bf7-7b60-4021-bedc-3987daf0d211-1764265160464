'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const features = [
    'Unlimited photo ratings',
    'Advanced analytics dashboard',
    'Priority profile placement',
    'Custom profile themes',
    'Ad-free experience',
    'Early access to new features',
    'Premium badges & recognition',
    'Direct messaging unlimited'
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-4">
            Unlock Your Full Potential
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Join thousands building their social presence with Ego Premium
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-semibold ${!isYearly ? 'text-slate-900' : 'text-slate-500'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-16 h-8 bg-slate-200 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
            aria-label="Toggle pricing"
          >
            <div
              className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${
                isYearly ? 'translate-x-8 bg-rose-500' : ''
              }`}
            />
          </button>
          <span className={`text-sm font-semibold ${isYearly ? 'text-slate-900' : 'text-slate-500'}`}>
            Yearly
          </span>
          {isYearly && (
            <span className="text-xs font-semibold text-cyan-400 bg-cyan-50 px-3 py-1 rounded-full">
              Save 40%
            </span>
          )}
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-all duration-300 relative overflow-hidden">
            {/* Accent Border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 to-cyan-400" />
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-rose-50 text-rose-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
              Limited Pre-Order
            </div>

            {/* Plan Name */}
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-[1.3] text-slate-900 mb-2">
              Ego Premium
            </h3>
            <p className="text-slate-500 mb-6">
              Everything you need to dominate
            </p>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900">
                  ${isYearly ? '17' : '29'}
                </span>
                <span className="text-slate-500 font-medium">
                  /{isYearly ? 'month' : 'month'}
                </span>
              </div>
              {isYearly && (
                <p className="text-sm text-slate-500 mt-2">
                  Billed annually at $199
                </p>
              )}
            </div>

            {/* Stripe Button */}
            <button
              onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
              className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md mb-8"
            >
              Pre-Order Now - ${isYearly ? '199' : '29'}
            </button>

            {/* Features */}
            <div className="space-y-4">
              <p className="text-sm font-semibold text-slate-900 mb-4">
                Everything included:
              </p>
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-rose-50 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-rose-500" />
                  </div>
                  <span className="text-slate-600 text-sm">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="mt-8 pt-6 border-t border-slate-100 text-center">
              <p className="text-xs text-slate-500">
                🔒 Secure payment • Cancel anytime • 30-day money back
              </p>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center mt-12">
          <p className="text-sm text-slate-500 mb-4">
            Trusted by over 10,000+ users worldwide
          </p>
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-cyan-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
            <span className="ml-2 text-sm font-semibold text-slate-900">
              4.9/5
            </span>
            <span className="text-sm text-slate-500 ml-1">
              from 2,341 reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  </div></div></span>);
}
