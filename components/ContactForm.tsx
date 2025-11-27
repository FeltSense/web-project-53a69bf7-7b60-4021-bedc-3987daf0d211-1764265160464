'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    const formObject: any = {};
    formData.forEach((value, key) => { formObject[key] = value; });
    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form_submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_data: formObject,
          form_id: 'contact_form',
          project_id: '53a69bf7-7b60-4021-bedc-3987daf0d211',
          founder_id: '0e2c4b19-c584-41c7-af67-6837f0a33f2d',
          submitted_at: new Date().toISOString()
        })
      });
      if (!response.ok) throw new Error('Failed');
      setStatus('success');
    } catch (error) { setStatus('error'); }
  };

  return (
    <section id="contact" className="bg-slate-900 py-24 md:py-32 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 via-transparent to-cyan-400/5"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-white mb-6">
            Let's Build Your<br />
            <span className="text-rose-500">Personal Brand</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Ready to elevate your social presence? Get in touch and let's create something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info - Left Side */}
          <div className="lg:col-span-2 space-y-8">
            {/* Info Cards */}
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-rose-500/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-rose-500/10 rounded-xl p-3">
                    <Mail className="w-6 h-6 text-rose-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight leading-[1.3] text-white mb-2">
                      Email Us
                    </h3>
                    <p className="text-slate-400">hello@ego.com</p>
                    <p className="text-slate-400">support@ego.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-400/10 rounded-xl p-3">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight leading-[1.3] text-white mb-2">
                      Call Us
                    </h3>
                    <p className="text-slate-400">+1 (555) 123-4567</p>
                    <p className="text-slate-400">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-rose-500/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-rose-500/10 rounded-xl p-3">
                    <MapPin className="w-6 h-6 text-rose-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight leading-[1.3] text-white mb-2">
                      Visit Us
                    </h3>
                    <p className="text-slate-400">123 Innovation Street</p>
                    <p className="text-slate-400">San Francisco, CA 94102</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-gradient-to-br from-rose-500/10 to-cyan-400/10 rounded-2xl p-8 border border-white/10">
              <div className="text-center">
                <div className="text-4xl font-bold tracking-tight leading-[1.1] text-white mb-2">
                  10,000+
                </div>
                <p className="text-slate-400">
                  Creators trust Ego to build their personal brand
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="bg-rose-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-rose-500" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight leading-[1.1] text-slate-900 mb-4">
                    Message Sent!
                  </h3>
                  <p className="text-slate-500 mb-8">
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      disabled={status === 'loading'}
                      className="w-full rounded-xl border-slate-200 focus:ring-2 py-4 px-5 focus:border-rose-500 focus:ring-rose-500 transition-all duration-300 disabled:bg-slate-50 disabled:cursor-not-allowed"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      disabled={status === 'loading'}
                      className="w-full rounded-xl border-slate-200 focus:ring-2 py-4 px-5 focus:border-rose-500 focus:ring-rose-500 transition-all duration-300 disabled:bg-slate-50 disabled:cursor-not-allowed"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      disabled={status === 'loading'}
                      className="w-full rounded-xl border-slate-200 focus:ring-2 py-4 px-5 focus:border-rose-500 focus:ring-rose-500 transition-all duration-300 disabled:bg-slate-50 disabled:cursor-not-allowed"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      disabled={status === 'loading'}
                      className="w-full rounded-xl border-slate-200 focus:ring-2 py-4 px-5 focus:border-rose-500 focus:ring-rose-500 transition-all duration-300 resize-none disabled:bg-slate-50 disabled:cursor-not-allowed"
                      placeholder="Tell us about your goals and how we can help..."
                    ></textarea>
                  </div>

                  {/* Error Message */}
                  {status === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <p className="text-sm text-red-800">
                        Something went wrong. Please try again or email us directly.
                      </p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md disabled:bg-slate-300 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>

                  <p className="text-sm text-slate-500 text-center">
                    We respect your privacy. Your information will never be shared.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <p className="text-slate-400 mb-4">
              Prefer to chat in real-time?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white font-semibold rounded-xl px-8 py-4 border-2 transition-all duration-300"
              >
                Schedule a Call
              </a>
              <a
                href="#contact"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold rounded-xl px-8 py-4 border-2 transition-all duration-300"
              >
                Live Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
