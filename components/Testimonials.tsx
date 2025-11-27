'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Ego helped me break through my self-limiting beliefs. The daily challenges pushed me to show up authentically on social media for the first time in years.",
      name: "Sarah Chen",
      role: "Content Creator",
      avatar: "https://i.pravatar.cc/150?img=5",
      company: "Creator Co",
      logo: "CC"
    },
    {
      quote: "This platform transformed how I approach personal branding. I've grown my audience by 300% while staying true to myself. The community here is unmatched.",
      name: "Marcus Johnson",
      role: "Entrepreneur",
      avatar: "https://i.pravatar.cc/150?img=12",
      company: "BuildLab",
      logo: "BL"
    },
    {
      quote: "Finally, a social growth tool that focuses on authenticity over vanity metrics. Ego taught me that confidence comes from within, not from follower counts.",
      name: "Elena Rodriguez",
      role: "Life Coach",
      avatar: "https://i.pravatar.cc/150?img=9",
      company: "Thrive Studio",
      logo: "TS"
    }
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-4">
            Voices of Transformation
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Real stories from people who discovered their authentic voice
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-rose-50 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-rose-500 font-bold text-sm">{testimonial.logo}</span>
                </div>
                <p className="text-slate-600 leading-relaxed mb-1">{testimonial.company}</p>
              </div>

              <p className="text-slate-700 leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
