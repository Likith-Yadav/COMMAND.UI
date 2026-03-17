'use client';

import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Check, Mail, MapPin, Phone, Github, Twitter, Linkedin, ArrowRight, Zap, Activity, Shield, Cpu } from 'lucide-react';
import { cn } from '../lib/utils';
import { GlowingEffect } from './ui/glowing-effect';

const Terminal = ({ className }: { className?: string }) => {
  const [text, setText] = useState('');
  const fullText = '> Initializing Nexus Protocol...\n> Loading neural weights... 100%\n> Synchronization complete.\n> System status: OPTIMAL\n> Ready for command_';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn(
      "w-full h-full bg-[#1a1b1e] rounded-radius-theme overflow-hidden font-mono text-[10px] md:text-xs p-0 flex flex-col shadow-2xl border border-white/10",
      className
    )}>
      <div className="bg-[#2c2e33] p-3 flex gap-2 items-center border-b border-white/5">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-2 text-[10px] font-bold text-white/40 uppercase tracking-widest">nexus_terminal</span>
      </div>
      <div className="p-6 text-emerald-500/90 whitespace-pre-wrap leading-relaxed">
        {text}
        <span className="animate-pulse">|</span>
      </div>
    </div>
  );
};

export const AboutSection = () => {
  const { style } = useTheme();
  const isGlass = style === 'glassmorphism';

  return (
    <section className="py-24 px-6 overflow-hidden relative z-10">
      <div className={cn(
        "max-w-6xl mx-auto items-center",
        isGlass ? "flex flex-col text-center" : "grid md:grid-cols-2 gap-16"
      )}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className={cn("text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mb-4 block", isGlass && "mx-auto")}>
            {style === 'neumorphism' ? 'Technical Specifications' : 'Our Philosophy'}
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-tight uppercase italic text-foreground">
            {style === 'neumorphism' ? <>The Protocol <br /> of Precision.</> : <>The Future of <br />Interface Design.</>}
          </h2>
          <p className={cn("text-lg mb-8 opacity-70 leading-relaxed max-w-lg text-foreground", isGlass && "mx-auto")}>
            {style === 'neumorphism'
              ? "A next-generation design framework engineered for low-latency visual synchronization and high-fidelity interface deployment."
              : "We build immersive digital experiences that push the boundaries of what's possible. Our multi-style approach allows for seamless transitions between different design philosophies."}
          </p>
          <div className={cn("space-y-6", isGlass && "flex flex-col items-center")}>
            {['Responsive Layouts', 'Dynamic Theming', 'Premium Animations'].map((item) => (
              <div key={item} className="flex items-center gap-4 group text-foreground">
                <div className={cn(
                  "flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500",
                  style === 'neumorphism' ? "neu-button bg-surface text-primary" : (isGlass ? "glass-button" : "bg-primary text-secondary")
                )}>
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="font-bold uppercase tracking-widest text-xs opacity-80 group-hover:opacity-100 transition-opacity">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {(!isGlass && style !== 'neumorphism') ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={cn(
              "aspect-[4/3] rounded-radius-theme overflow-hidden relative shadow-2xl transition-all duration-700",
              isGlass && "glass-effect"
            )}
          >
            <Terminal />
          </motion.div>
        ) : style === 'neumorphism' ? (
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Zap, label: 'Latency', value: '< 2ms', color: 'text-blue-500' },
              { icon: Activity, label: 'Sync Rate', value: '120Hz', color: 'text-indigo-500' },
              { icon: Shield, label: 'UI Class', value: 'Nexus-S', color: 'text-violet-500' },
              { icon: Cpu, label: 'Protocol', value: 'v4.2.0', color: 'text-sky-500' }
            ].map((spec, i) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="neu-button p-8 rounded-[2rem] flex flex-col items-center text-center gap-4"
              >
                <div className={cn("w-12 h-12 rounded-full neu-inset flex items-center justify-center", spec.color)}>
                  <spec.icon size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-1">{spec.label}</div>
                  <div className="text-2xl font-black italic">{spec.value}</div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export const PricingSection = () => {
  const { style } = useTheme();
  const isGlass = style === 'glassmorphism';

  const plans = [
    { name: 'Starter', price: '$49', features: ['Basic UI Kits', 'Community Support', 'Monthly Updates'] },
    { name: 'Pro', price: '$99', features: ['Advanced Components', 'Priority Support', 'Style Switcher', 'Custom Icons'], popular: true },
    { name: 'Enterprise', price: 'Custom', features: ['Full Source Code', 'Dedicated Engineer', 'Whitelabel Design'] },
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">Transparent Pricing</h2>
        <p className="opacity-60 uppercase tracking-widest text-xs font-bold">Choose the plan that fits your vision.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <motion.div
            key={plan.name}
            whileHover={{ y: -10 }}
            className={cn(
              "p-10 rounded-radius-theme transition-all duration-700 relative flex flex-col border border-black/5 dark:border-white/5",
              style === 'neumorphism' ? "neu-button border-none" : (isGlass ? "glass-effect" : "bg-surface shadow-theme")
            )}
          >
            {isGlass && (
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent -z-10" />
            )}
            {isGlass && (
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />
            )}
            {plan.popular && (
              <span className="absolute top-0 right-10 -translate-y-1/2 glass-button text-primary text-[9px] font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-full z-20">Most Popular</span>
            )}
            <h3 className="text-xs font-black mb-2 uppercase tracking-[3px] opacity-40">{plan.name}</h3>
            <div className="text-5xl font-black mb-8 tracking-tighter flex items-baseline gap-1">
              {plan.price}
              {plan.price !== 'Custom' && <span className="text-sm font-bold opacity-30">/mo</span>}
            </div>
            <ul className="space-y-5 mb-10 flex-grow">
              {plan.features.map(f => (
                <li key={f} className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-wider opacity-60">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {f}
                </li>
              ))}
            </ul>
            <button className={cn(
              "w-full py-4 rounded-sm font-black uppercase tracking-[0.2em] text-[10px] transition-all shadow-theme flex items-center justify-center gap-2 group",
              style === 'neumorphism' ? "neu-button bg-surface text-primary" : (isGlass ? "glass-button" : "bg-primary text-secondary")
            )}>
              Get Started
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export const ContactSection = () => {
  const { style } = useTheme();
  const isGlass = style === 'glassmorphism';

  return (
    <section className="py-24 px-6 border-t border-black/5 dark:border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-black mb-4 uppercase tracking-tighter">Let's Connect</h2>
          <p className="opacity-40 font-bold uppercase tracking-widest text-[10px]">Start the conversation today.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            {[
              { icon: Mail, label: 'Email', value: 'hello@command.ui' },
              { icon: Phone, label: 'Call', value: '+1 (555) 000-1111' },
              { icon: MapPin, label: 'Visit', value: 'San Francisco, CA' }
            ].map(item => (
              <div key={item.label} className="flex items-center gap-6 group">
                <div className={cn(
                  "w-12 h-12 rounded-radius-theme flex items-center justify-center transition-all shadow-theme shrink-0",
                  style === 'neumorphism' ? "neu-button bg-surface" : (isGlass ? "glass-button" : "bg-primary text-secondary")
                )}>
                  <item.icon size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[3px] opacity-30">{item.label}</div>
                  <div className="font-bold text-lg">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          <form className={cn(
            "space-y-4 p-8 rounded-radius-theme border border-black/5 dark:border-white/5 relative",
            style === 'neumorphism' ? "neu-button border-none" : (isGlass ? "glass-effect" : "bg-surface shadow-theme")
          )}>
            {isGlass && (
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />
            )}
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className={cn(
                "w-full px-6 py-5 rounded-sm outline-none transition-all font-bold text-[10px] uppercase tracking-widest",
                style === 'neumorphism' ? "neu-inset bg-transparent border-none" : "bg-primary/5 border border-black/5 focus:border-primary/20"
              )}
            />
            <textarea
              placeholder="YOUR MESSAGE"
              rows={4}
              className={cn(
                "w-full px-6 py-5 rounded-sm outline-none transition-all font-bold text-[10px] uppercase tracking-widest resize-none",
                style === 'neumorphism' ? "neu-inset bg-transparent border-none" : "bg-primary/5 border border-black/5 focus:border-primary/20"
              )}
            />
            <button className={cn(
              "w-full py-5 rounded-sm font-black uppercase tracking-[0.3em] text-[10px] transition-all shadow-theme",
              style === 'neumorphism' ? "neu-button bg-surface text-primary" : (isGlass ? "glass-button" : "bg-primary text-secondary")
            )}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export const BrandSection = () => {
  const { style } = useTheme();
  const isDark = style === 'dark-modern' || style === 'neumorphism' || style === 'gradient-startup';
  
  return (
    <section className="py-16 md:py-32 px-6 relative overflow-hidden flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto w-full"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-30 mb-8 block">Final Destination</span>
        <h2 className="text-3xl md:text-6xl font-black mb-8 md:mb-12 uppercase tracking-tighter leading-[0.9]">
          Ready to build <br className="hidden md:block" /> the future?
        </h2>
        
        <div className="relative group mb-12 md:mb-16 cursor-crosshair w-full overflow-hidden md:overflow-visible flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className={cn(
              "text-[12vw] md:text-[14rem] font-black tracking-tighter leading-none select-none transition-all duration-700 whitespace-nowrap",
              isDark ? "text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]" : "text-black drop-shadow-[0_0_30px_rgba(0,0,0,0.1)]"
            )}
          >
            BuildForU
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
        </div>

        <p className="text-sm md:text-lg font-bold opacity-40 uppercase tracking-[0.2em] mb-10 md:mb-12 max-w-xl mx-auto px-4">
          High-performance interface design for next-generation digital products.
        </p>

        <a 
          href="https://www.buildforu.pw/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "px-8 md:px-12 py-5 md:py-6 rounded-sm font-black uppercase tracking-[0.4em] text-[10px] transition-all shadow-2xl",
              isDark ? "bg-white text-black" : "bg-black text-white"
            )}
          >
            Let's get in touch
          </motion.button>
        </a>
      </motion.div>
      
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
        <div className={cn(
          "absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_70%)] opacity-10",
          !isDark && "opacity-5"
        )} />
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-black/5 dark:border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
        <div className="space-y-6">
          <div className="text-2xl font-black tracking-tighter uppercase">
            COMMAND<span className="opacity-20">.UI</span>
          </div>
          <p className="max-w-xs text-xs font-bold leading-relaxed opacity-40 uppercase tracking-widest">
            A next-generation design system built for speed, clarity, and instant multi-style transformation.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-20">
          <div className="space-y-4">
            <div className="text-[10px] font-black uppercase tracking-[3px] opacity-20">Legal</div>
            <div className="flex flex-col gap-3 text-[10px] font-black uppercase tracking-widest">
              <a href="#" className="hover:opacity-50 transition-opacity">Privacy Policy</a>
              <a href="#" className="hover:opacity-50 transition-opacity">Terms of Service</a>
              <a href="#" className="hover:opacity-50 transition-opacity">Cookie Policy</a>
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-[10px] font-black uppercase tracking-[3px] opacity-20">Social</div>
            <div className="flex gap-6 mt-2">
              <Twitter size={18} className="opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
              <Linkedin size={18} className="opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
              <Github size={18} className="opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
