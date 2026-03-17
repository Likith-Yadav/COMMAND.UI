'use client';

import { Navbar } from './Navbar';
import { ThemeSwitcher } from './ThemeSwitcher';
import ScrollExpandMedia from './blocks/scroll-expansion-hero';
import { AboutSection, PricingSection, ContactSection, BrandSection, Footer } from './Sections';
import { useTheme } from '../context/ThemeContext';
import { cn } from '../lib/utils';
import { NavBar as TubelightNavBar } from './ui/tubelight-navbar';
import { MinimalistHero } from './ui/minimalist-hero';
import { AuroraBackground } from './ui/aurora-background';
import { Info, CircleDollarSign, Mail } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { ShaderPlane } from './ui/background-paper-shaders';
import { SmokeBackground } from './ui/spooky-smoke-animation';

const ShaderBackground = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative w-full min-h-screen overflow-x-hidden">
            <div className="fixed inset-0 z-[-1] pointer-events-none bg-black">
                <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                    <ambientLight intensity={0.5} />
                    <ShaderPlane 
                        position={[0, 0, 0]} 
                        color1="#1a1a1a" 
                        color2="#000000" 
                    />
                </Canvas>
            </div>
            {children}
        </div>
    );
};

const SmokeBackgroundWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative w-full min-h-screen overflow-x-hidden">
            <div className="fixed inset-0 z-[-1] pointer-events-none opacity-80 bg-black">
                <SmokeBackground smokeColor="#ff0000" />
            </div>
            {children}
        </div>
    );
};

export const LandingPage = () => {
    const { style } = useTheme();
    const isDark = style === 'dark-modern' || style === 'gradient-startup';
    const isGlass = style === 'glassmorphism';
    const isDarkModern = style === 'dark-modern';
    const isMinimalist = style === 'minimalist';
    const isNeumorphism = style === 'neumorphism';
    const isGradient = style === 'gradient-startup';

    const navItems = [
        { name: 'About', url: '#about', icon: Info },
        { name: 'Pricing', url: '#pricing', icon: CircleDollarSign },
        { name: 'Contact', url: '#contact', icon: Mail }
    ];

    const mainContent = (
        <div className={cn("relative min-h-screen transition-all duration-1000", `style-${style}`)}>
            {/* Background decorative elements for Glass theme */}
            {isGlass && (
                <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 text-transparent">
                    <div className="glass-blob w-[800px] h-[800px] bg-sky-200/40 top-[-20%] left-[-10%] animation-delay-2000" />
                    <div className="glass-blob w-[900px] h-[900px] bg-rose-200/40 top-[30%] right-[-20%]" />
                    <div className="glass-blob w-[700px] h-[700px] bg-amber-200/40 bottom-[-10%] left-[5%] animation-delay-4000" />
                    <div className="glass-blob w-[500px] h-[500px] bg-indigo-200/40 bottom-[20%] right-[10%] animation-delay-1000" />
                </div>
            )}

            {/* Standard Navbar for non-glass themes */}
            {!isGlass && <Navbar />}
            
            {/* Tubelight Navbar for Glass theme */}
            {isGlass && <TubelightNavBar items={navItems} />}

            {/* Hero Section - Conditional Logic */}

            {isMinimalist ? (
                <MinimalistHero 
                    title="PURE CLARITY"
                    subtitle="A design philosophy rooted in essentialism. Focusing on typography, whitespace, and subtle motion."
                />
            ) : (isDarkModern || isGradient) ? (
                <div className="relative min-h-screen flex items-center justify-center pt-20">
                    <div className="max-w-4xl mx-auto text-center px-6">
                        <span className="px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] inline-block mb-10 border border-white/10 bg-white/5 backdrop-blur-sm">
                            {isDarkModern ? "Nexus Protocol" : "Gradient Evolution"}
                        </span>
                        <h1 className="text-7xl md:text-9xl font-black mb-8 leading-[0.8] tracking-tighter uppercase italic text-white">
                            {isDarkModern ? <>Transform Your <br /> Digital Workflow.</> : <>Elevate Your <br /> Design System.</>}
                        </h1>
                        <p className="text-xl font-bold opacity-60 uppercase tracking-[0.2em] mb-12 text-white">
                            {isDarkModern ? "High-performance interface engine." : "Next-generation visual synchronization."}
                        </p>
                        <button className="px-12 py-5 rounded-full font-black uppercase tracking-[0.4em] text-[10px] bg-white text-black hover:bg-white/90 transition-all">
                            Explore System
                        </button>
                    </div>
                </div>
            ) : isNeumorphism ? (
                <div className="relative min-h-screen flex items-center justify-center pt-20">
                    <div className="max-w-4xl mx-auto text-center px-6">
                        <span className="neu-button px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] inline-block mb-10 text-primary">Solomid Protocol</span>
                        <h1 className="text-7xl md:text-9xl font-black mb-8 leading-[0.8] tracking-tighter uppercase italic">
                            THE <br /> FUTURE <br /> <span className="text-primary drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">INTERFACE.</span>
                        </h1>
                        <p className="text-xl font-bold opacity-60 uppercase tracking-[0.2em] mb-12">Next-Gen Dark Skeuomorphism.</p>
                        <button className="neu-button px-12 py-5 rounded-full font-black uppercase tracking-[0.4em] text-[10px]">
                            Explore Now
                        </button>
                    </div>
                </div>
            ) : (
                <ScrollExpandMedia
                    mediaType="video"
                    mediaSrc="https://me7aitdbxq.ufs.sh/f/2wsMIGDMQRdYuZ5R8ahEEZ4aQK56LizRdfBSqeDMsmUIrJN1"
                    bgImageSrc="https://me7aitdbxq.ufs.sh/f/2wsMIGDMQRdYMNjMlBUYHaeYpxduXPVNwf8mnFA61L7rkcoS"
                    title="NEURAL INTERFACE"
                    date="2026 EDITION"
                    scrollToExpand="SCROLL TO EXPLORE"
                    textBlend
                >
                    <HeroContent style={style} isDark={isDark} />
                </ScrollExpandMedia>
            )}

            <section id="about" className="bg-transparent"><AboutSection /></section>
            <section id="pricing" className="bg-transparent"><PricingSection /></section>
            <section id="contact" className="bg-transparent"><ContactSection /></section>
            <BrandSection />
            <Footer />
            
            <ThemeSwitcher />
        </div>
    );

    if (isNeumorphism) {
        return (
            <AuroraBackground className="bg-transparent">
                {mainContent}
            </AuroraBackground>
        );
    }

    if (isDarkModern) {
        return (
            <ShaderBackground>
                {mainContent}
            </ShaderBackground>
        );
    }

    if (isGradient) {
        return (
            <SmokeBackgroundWrapper>
                {mainContent}
            </SmokeBackgroundWrapper>
        );
    }

    return mainContent;
};

const HeroContent = ({ style, isDark }: { style: string; isDark: boolean }) => (
    <div className="max-w-4xl mx-auto py-20 px-6">
        <h2 className={cn("text-5xl md:text-7xl font-black mb-8 transition-colors leading-[0.9] tracking-tighter uppercase", isDark ? "text-white" : "text-black")}>
            {style === 'minimalist' ? 'Designed for \nPure Clarity.' : 'Engineered \nfor the Edge.'}
        </h2>
        <p className={cn("text-xl mb-8 transition-colors max-w-2xl font-bold opacity-60 uppercase tracking-widest leading-relaxed", isDark ? "text-white" : "text-black")}>
            Experience the next generation of digital interface design. Our system provides high-fidelity visual sync and premium multi-style support.
        </p>
        <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div>
                <h4 className={cn("text-[10px] font-black uppercase tracking-[0.4em] opacity-40 mb-6", isDark ? "text-white" : "text-black")}>Technical Overview</h4>
                <div className="space-y-4">
                    {['Glass Layers', 'WebGL Shaders', 'Spring Motion', 'Tailwind Base'].map(spec => (
                        <div key={spec} className="flex justify-between border-b border-black/10 dark:border-white/10 pb-2">
                            <span className="text-[10px] font-black uppercase tracking-widest opacity-40">{spec.split(' ')[0]}</span>
                            <span className="text-[10px] font-black uppercase tracking-widest">{spec.split(' ').slice(1).join(' ')}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className={cn("p-10 rounded-radius-theme relative overflow-hidden transition-all duration-1000", 
                style === 'glassmorphism' ? "glass-effect" : "bg-primary text-secondary"
            )}>
                <div className="relative z-10">
                    <h4 className="text-2xl font-black mb-2 tracking-tighter uppercase italic">Phase 01-X</h4>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-8 leading-relaxed">High-resolution components and a light-weight frame for premium presentation.</p>
                    <button className={cn(
                        "px-8 py-4 font-black uppercase tracking-[0.3em] text-[10px] transition-all rounded-sm",
                        style === 'neumorphism' ? "neu-button bg-surface text-primary" : "bg-secondary text-primary"
                    )}>
                        Download Source
                    </button>
                </div>
            </div>
        </div>
    </div>
);
