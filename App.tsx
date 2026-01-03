
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Users, FileText, MessageSquare, ChevronRight, Menu, X, Radio, Siren, Flame, Truck } from 'lucide-react';
import { Department } from './types';

const DEPARTMENTS: Department[] = [
  {
    id: 'wsp',
    name: 'Wisconsin State Patrol',
    motto: 'Service, Courtesy, Protection',
    description: 'Ensuring safe and efficient movement of traffic on Wisconsin highways through professional law enforcement.',
    image: 'https://images.unsplash.com/photo-1594132049091-888463876008?q=80&w=1000&auto=format&fit=crop',
    icon: 'Shield'
  },
  {
    id: 'mcso',
    name: 'Milwaukee County Sheriff',
    motto: 'Leadership, Service, Duty',
    description: 'Protecting the residents and visitors of Milwaukee County with dedicated patrol and investigations.',
    image: 'https://images.unsplash.com/photo-1471180625745-944903837c22?q=80&w=1000&auto=format&fit=crop',
    icon: 'Radio'
  },
  {
    id: 'mfd',
    name: 'Madison Fire & Rescue',
    motto: 'Ready to Respond',
    description: 'Providing fire suppression, emergency medical services, and rescue operations to the state capital.',
    image: 'https://images.unsplash.com/photo-1582213726895-ec2b6014ba1f?q=80&w=1000&auto=format&fit=crop',
    icon: 'Flame'
  },
  {
    id: 'dot',
    name: 'Dept. of Transportation',
    motto: 'Keep Wisconsin Moving',
    description: 'Managing infrastructure, road safety, and traffic assistance to ensure seamless travel across the state.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop',
    icon: 'Truck'
  }
];

const RULES = [
  { title: "Serious Roleplay", description: "All players must maintain a realistic character at all times." },
  { title: "No RDM/VDM", description: "Random deathmatch or vehicle deathmatch is strictly prohibited." },
  { title: "Respect Staff", description: "Administrators ensure a fair environment for everyone." },
  { title: "FearRP", description: "You must value your life as you would in the real world." }
];

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const IconMap: Record<string, React.ElementType> = {
    Shield: Shield,
    Radio: Siren,
    Flame: Flame,
    Truck: Truck
  };

  return (
    <div className="min-h-screen bg-[#0a0b14] text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0b14]/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-patrol-blue flex items-center justify-center rounded-lg border border-state-gold shadow-[0_0_15px_rgba(197,179,88,0.3)]">
              <Shield className="text-state-gold w-6 h-6" />
            </div>
            <span className="font-heading text-lg font-bold tracking-tighter">WSRP</span>
          </div>

          <div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-widest">
            {['Home', 'Departments', 'Rules', 'Join'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-state-gold transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          <button 
            className="hidden md:block bg-patrol-blue border border-state-gold px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
            onClick={() => window.open('https://discord.gg/', '_blank')}
          >
            Join Discord
          </button>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {['Home', 'Departments', 'Rules', 'Join'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-3xl font-heading font-bold"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-20" 
            alt="Police car at night"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b14] via-transparent to-[#0a0b14]" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-state-gold font-bold tracking-[0.3em] uppercase mb-4 text-sm md:text-base">
              Serious Roleplay Community
            </h2>
            <h1 className="text-5xl md:text-8xl font-heading font-black leading-none mb-6">
              WISCONSIN <br/> <span className="text-patrol-blue bg-white px-2">STATE</span> ROLEPLAY
            </h1>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light mb-10">
              Join the most immersive ER:LC experience based in the heart of the Midwest. Professionalism, dedication, and community.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('join')}
                className="bg-white text-black px-10 py-4 font-bold uppercase tracking-widest hover:bg-state-gold transition-colors"
              >
                Start Patrolling
              </button>
              <button 
                onClick={() => window.open('https://discord.gg/', '_blank')}
                className="border border-white/20 px-10 py-4 font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
              >
                Official Discord
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Departments Section */}
      <section id="departments" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">The Departments</h2>
            <div className="w-24 h-1 bg-state-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {DEPARTMENTS.map((dept, i) => {
              const Icon = IconMap[dept.icon];
              return (
                <motion.div
                  key={dept.id}
                  whileHover={{ y: -10 }}
                  className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col h-full group"
                >
                  <div className="h-48 overflow-hidden">
                    <img src={dept.image} alt={dept.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100" />
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <Icon className="text-state-gold w-8 h-8 mb-6" />
                    <h3 className="text-xl font-bold font-heading mb-2 leading-tight">{dept.name}</h3>
                    <p className="text-state-gold/80 text-xs font-bold uppercase tracking-widest mb-4">{dept.motto}</p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                      {dept.description}
                    </p>
                    <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white group-hover:text-state-gold transition-colors">
                      Learn More <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section id="rules" className="py-32 bg-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8">Server <br/> <span className="text-state-gold">Guidelines</span></h2>
              <p className="text-gray-400 mb-8">
                We pride ourselves on maintaining a high standard of roleplay. Please ensure you are familiar with our core tenets before joining a session.
              </p>
              <button className="flex items-center gap-3 bg-white text-black px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-state-gold transition-colors">
                <FileText className="w-4 h-4" /> Full Handbook
              </button>
            </div>
            <div className="space-y-6">
              {RULES.map((rule, i) => (
                <div key={i} className="flex gap-6 p-6 border border-white/10 rounded-xl bg-black/40">
                  <div className="text-state-gold font-heading text-xl">0{i+1}</div>
                  <div>
                    <h4 className="font-bold mb-1 uppercase tracking-tight">{rule.title}</h4>
                    <p className="text-sm text-gray-500">{rule.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-32 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-patrol-blue border-2 border-state-gold p-12 md:p-20 rounded-3xl relative overflow-hidden shadow-[0_0_50px_rgba(0,35,102,0.5)]">
            <div className="absolute top-0 left-0 w-full h-1 bg-state-gold animate-pulse" />
            <h2 className="text-4xl md:text-7xl font-heading font-bold mb-8 italic">READY TO PATROL?</h2>
            <div className="space-y-6 mb-12">
              <div className="flex items-center justify-center gap-4 text-lg">
                <span className="bg-white text-black px-3 py-1 font-bold rounded">1</span>
                <p>Open Roblox & Launch **ER:LC**</p>
              </div>
              <div className="flex items-center justify-center gap-4 text-lg">
                <span className="bg-white text-black px-3 py-1 font-bold rounded">2</span>
                <p>Select **Private Servers**</p>
              </div>
              <div className="flex items-center justify-center gap-4 text-lg">
                <span className="bg-white text-black px-3 py-1 font-bold rounded">3</span>
                <p>Enter Server Code: **WSRP**</p>
              </div>
            </div>
            <button 
              onClick={() => window.open('https://discord.gg/', '_blank')}
              className="bg-white text-black px-12 py-5 font-black uppercase tracking-widest text-lg hover:scale-105 transition-transform"
            >
              Verify on Discord
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <Shield className="text-state-gold w-6 h-6" />
              <span className="font-heading font-bold tracking-tighter">WSRP 2025</span>
            </div>
            <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Staff List</a>
              <a href="#" className="hover:text-white transition-colors">Appeals</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
            </div>
            <p className="text-xs text-gray-600 font-mono">
              Not affiliated with Roblox or Emergency Response: Liberty County.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
