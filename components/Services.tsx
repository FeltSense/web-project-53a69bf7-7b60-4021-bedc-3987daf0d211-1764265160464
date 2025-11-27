'use client';

import { motion } from 'framer-motion';
import { Sparkles, Users, TrendingUp, Zap } from 'lucide-react';

export default function Services() {
  const features = [
    {
      icon: Sparkles,
      title: 'Personal Brand Building',
      description: 'Transform your social presence into a powerful personal brand that attracts opportunities and opens doors.',
      bg: 'bg-rose-50',
      textColor: 'text-slate-900'
    },
    {
      icon: Users,
      title: 'Authentic Connections',
      description: 'Build meaningful relationships with your audience through genuine engagement strategies.',
      bg: 'bg-slate-50',
      textColor: 'text-slate-900'
    },
    {
      icon: TrendingUp,
      title: 'Growth Analytics',
      description: 'Track your influence and watch your social metrics soar with data-driven insights.',
      bg: 'bg-white',
      textColor: 'text-slate-900'
    },
    {
      icon: Zap,
      title: 'Confidence Boost',
      description: 'Develop unshakeable confidence as you master the art of digital self-expression and social influence.',
      bg: 'bg-slate-900',
      textColor: 'text-white'
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-4">
            Elevate Your Social Presence
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Master the digital landscape and build the personal brand you've always dreamed of
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* FIRST CARD - SPANS 2 COLUMNS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 bg-rose-50 rounded-3xl p-8 md:p-10 min-h-[300px] flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-rose-500/10 flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-rose-500" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-[1.3] text-slate-900 mb-3">
                {features[0].title}
              </h3>
              <p className="text-slate-500 text-lg">
                {features[0].description}
              </p>
            </div>
          </motion.div>

          {/* SECOND CARD - SINGLE COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-50 rounded-3xl p-6 md:p-8 min-h-[300px] flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-[1.3] text-slate-900 mb-3">
                {features[1].title}
              </h3>
              <p className="text-slate-500">
                {features[1].description}
              </p>
            </div>
          </motion.div>

          {/* THIRD CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6 text-rose-500" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-[1.3] text-slate-900 mb-3">
              {features[2].title}
            </h3>
            <p className="text-slate-500">
              {features[2].description}
            </p>
          </motion.div>

          {/* FOURTH CARD - SPANS 2 COLUMNS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 bg-slate-900 text-white rounded-3xl p-8 md:p-10"
          >
            <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-[1.3] mb-3">
              {features[3].title}
            </h3>
            <p className="text-slate-400 text-lg">
              {features[3].description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
