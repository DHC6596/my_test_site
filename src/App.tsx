import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  Facebook, 
  Linkedin, 
  Instagram, 
  Youtube, 
  ChevronDown, 
  ArrowRight, 
  Download, 
  CheckCircle2, 
  Ship, 
  Package, 
  Globe2, 
  Trophy, 
  Clock, 
  Users, 
  MapPin, 
  Send,
  Menu,
  X,
  ShieldCheck,
  Zap,
  Truck,
  Layers,
  Handshake,
  Factory,
  Leaf,
  Construction,
  Wrench
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Shared Components ---

const SectionTitle = ({ subtitle, title, light = false }: { subtitle?: string, title: string, light?: boolean }) => (
  <div className="text-center mb-16">
    {subtitle && (
      <h4 className="text-brand-accent font-bold uppercase tracking-[0.2em] text-xs mb-3 font-display">
        {subtitle}
      </h4>
    )}
    <h2 className={`text-3xl md:text-5xl font-extrabold font-display leading-tight ${light ? 'text-white' : 'text-brand-primary'}`}>
      {title}
    </h2>
    <div className="w-20 h-1 bg-brand-accent mx-auto mt-6 rounded-full" />
  </div>
);

// --- Layout Components ---

const TopBar = () => (
  <div className="bg-brand-primary text-white text-[10px] md:text-[11px] py-2 border-b border-white/5 font-bold tracking-wide">
    <div className="section-container flex justify-between items-center">
      {/* Top Left */}
      <div className="flex items-center gap-4">
        <span className="opacity-70 flex items-center gap-2">
          <Globe2 className="w-3 h-3 text-brand-accent" />
          Welcome to Rahi International - Your Global Export Partner
        </span>
      </div>
      
      {/* Top Right */}
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-6 mr-6 border-r border-white/10 pr-6">
          <div className="flex items-center gap-2 transition-opacity cursor-default">
            <Phone className="w-3 h-3 text-brand-accent" />
            <span>+91 99095 50405</span>
          </div>
          <div className="flex items-center gap-2 transition-opacity cursor-default">
            <Mail className="w-3 h-3 text-brand-accent" />
            <span>info@rahiinternational.com</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Facebook className="w-3.5 h-3.5 cursor-pointer hover:text-brand-accent transition-colors" />
          <Linkedin className="w-3.5 h-3.5 cursor-pointer hover:text-brand-accent transition-colors" />
          <Instagram className="w-3.5 h-3.5 cursor-pointer hover:text-brand-accent transition-colors" />
          <Youtube className="w-3.5 h-3.5 cursor-pointer hover:text-brand-accent transition-colors" />
        </div>
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', active: true },
    { name: 'About Us' },
    { name: 'Products', hasSub: true },
    { name: 'Export Markets' },
    { name: 'Certifications' },
    { name: 'Catalogue / Downloads', link: '/catalog.pdf', download: true },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-white py-5'}`}>
      <div className="section-container flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="relative">
            <div className="group-hover:scale-110 transition-transform duration-300 w-20 h-20 flex items-center justify-center">
               <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div className="absolute top-1 right-1 w-3 h-3 bg-brand-accent rounded-full border-2 border-white" />
          </div>
          <div>
            <h1 className="text-3xl font-black text-brand-primary leading-none tracking-tighter">
              RAHI
              <span className="block text-[10px] tracking-[0.4em] font-medium text-slate-400 mt-1 uppercase">International</span>
            </h1>
            <p className="text-[9px] font-bold text-brand-accent uppercase tracking-widest leading-none mt-0.5">Export | Import</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={item.link || "#"} 
              download={item.download ? "Rahi_International_Catalog.pdf" : undefined}
              className={`text-[13px] font-bold uppercase tracking-wide flex items-center gap-1 transition-colors ${item.active ? 'text-brand-accent' : 'text-brand-primary hover:text-brand-accent'}`}
            >
              {item.name}
              {item.hasSub && <ChevronDown className="w-3.5 h-3.5 opacity-50" />}
            </a>
          ))}
          <button className="bg-brand-accent hover:bg-brand-accent-hover text-brand-primary font-black py-3 px-6 rounded text-[11px] uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-brand-accent/20">
            Contact / Enquiry
          </button>
        </div>

        {/* Support Mobile TBD */}
        <button className="lg:hidden p-2 text-brand-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 origin-top shadow-2xl"
          >
            <div className="p-6 flex flex-col gap-4">
              {menuItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.link || "#"} 
                  download={item.download ? "Rahi_International_Catalog.pdf" : undefined}
                  className="text-sm font-bold text-brand-primary border-b border-slate-50 pb-3"
                >
                  {item.name}
                </a>
              ))}
              <button className="btn-accent w-full mt-2">Contact / Enquiry</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Hero Section ---

const Hero = () => (
  <section className="relative h-[750px] flex items-center overflow-hidden">
    {/* Background with zoom effect */}
    <motion.div 
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      className="absolute inset-0 z-0"
    >
      <img 
        src="/hero.png" 
        alt="Logistics Background" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-primary/80 to-transparent" />
    </motion.div>

    <div className="section-container relative z-10 text-white text-left">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-left"
      >
        <div className="inline-block px-4 py-1 bg-brand-accent/20 border border-brand-accent/30 rounded-full mb-8">
           <span className="text-brand-accent font-black uppercase tracking-[0.3em] text-[10px]">
             Supplying Premium Quality Products from India to the World
           </span>
        </div>
        
        <h2 className="text-5xl md:text-8xl font-black mb-6 leading-[0.95] tracking-tighter uppercase font-display">
          YOUR TRUSTED <br />
          <span className="text-brand-accent">GLOBAL EXPORT PARTNER</span>
        </h2>
        
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-12 bg-brand-accent" />
          <p className="text-base md:text-xl font-medium tracking-tight text-white/90">
            Supplying Building Materials | Hydraulic Solutions | Eco Products | Packaging Solutions & More
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: CheckCircle2, text: "Premium Quality" },
            { icon: Trophy, text: "Competitive Pricing" },
            { icon: Users, text: "Low MOQ Advantage" },
            { icon: Clock, text: "Timely Delivery" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2.5">
              <div className="bg-brand-accent/20 p-2 rounded-lg">
                <item.icon className="w-4 h-4 text-brand-accent" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider">{item.text}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-5">
          <button className="btn-accent flex items-center gap-3 group">
            Explore Products 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <a 
            href="/catalog.pdf" 
            download="Rahi_International_Catalog.pdf"
            className="btn-outline flex items-center gap-3 hover:bg-white/5 group"
          >
            Download Catalogue 
            <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </motion.div>
    </div>

    {/* Floating WhatsApp on Hero (mockup specific) */}
    <div className="absolute bottom-12 right-12 z-20 hidden md:block">
      <a 
        href="https://wa.me/919909550405" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white py-3 px-6 rounded-full flex items-center gap-3 shadow-2xl hover:scale-105 transition-transform cursor-pointer animate-bounce"
      >
         <span className="font-bold text-sm">WhatsApp Chat</span>
         <div className="bg-white p-1.5 rounded-full">
            <svg className="w-5 h-5 fill-[#25D366]" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.131.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
         </div>
      </a>
    </div>
  </section>
);

// --- Product Segments ---

const ProductCard = ({ title, desc, icon: Icon, img }: { title: string, desc: string, icon: any, img: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100/50 hover:shadow-2xl transition-all duration-500"
  >
    <div className="relative h-64 overflow-hidden">
      <img 
        src={img} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-extrabold text-brand-primary mb-3 font-display">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium line-clamp-2">
        {desc}
      </p>
      <button className="flex items-center gap-1.5 text-brand-primary font-black text-xs uppercase tracking-widest group-hover:text-brand-accent transition-colors">
        View Products <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  </motion.div>
);

const Products = () => (
  <section className="section py-32 bg-slate-50/50">
    <div className="section-container">
      <SectionTitle 
        subtitle="Our Product Segments" 
        title="Wide Range. Premium Quality. Global Standards." 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          { 
            title: "Hydraulic Solutions", 
            desc: "Hydraulic Hoses, Fittings, Crimping Machines & Assemblies for heavy industry Applications.", 
            icon: Wrench,
            img: "/Hydraulic_Solutions.png"
          },
          { 
            title: "Building Materials", 
            desc: "Cement, TMT Steel Bars, Tiles, Tiles Adhesive & More for robust construction projects.", 
            icon: Construction,
            img: "/Building_Materials.png"
          },
          { 
            title: "Bamboo & Eco Products", 
            desc: "Bamboo Toothbrush, Bottles, Kitchen Items, Personal Care & More sustainable solutions.", 
            icon: Leaf,
            img: "/Bamboo_and_Eco_Products.png"
          },
          { 
            title: "Disposable & Packaging", 
            desc: "Bagasse Plates, Bowls, Cutlery, Food Containers & Packaging Solutions for catering.", 
            icon: Package,
            img: "/Disposabl_and_Packaging.png"
          },
          { 
            title: "Industrial & General", 
            desc: "Fasteners, Pipes & Tubes, Hardware & Industrial Supplies for manufacturing sectors.", 
            icon: Factory,
            img: "/Industrial_and_General.png"
          },
          { 
            title: "Mixed Container Supply", 
            desc: "Combine Multiple Products in One Container & Save More on shipping and logistics.", 
            icon: Ship,
            img: "/Mixed_Container_Supply.png"
          },
        ].map((item, idx) => (
          <ProductCard key={idx} {...item} />
        ))}
      </div>
    </div>
  </section>
);

// --- Why Partner Section ---

const WhyUs = () => (
  <section className="bg-brand-primary py-32 relative overflow-hidden">
    {/* Decorative background element */}
    <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.02] -skew-x-12 translate-x-20" />
    
    <div className="section-container relative z-10">
      <SectionTitle title="WHY PARTNER WITH US?" light />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
        {[
          { title: "Multi-Product", icon: Layers, desc: "One stop solution for multiple product needs." },
          { title: "Low MOQ", icon: Zap, desc: "Flexible minimum order quantities for you." },
          { title: "Best Pricing", icon: Trophy, desc: "Competitive prices without quality compromise." },
          { title: "Global Quality", icon: ShieldCheck, desc: "Products meeting all international standards." },
          { title: "Fast Delivery", icon: Truck, desc: "Reliable logistics & on-time shipment." },
          { title: "Trust", icon: Handshake, desc: "Relationships built on transparency." },
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="text-center group"
          >
            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-accent group-hover:border-brand-accent transition-all duration-300">
               <item.icon className="w-8 h-8 text-white group-hover:text-brand-primary" />
            </div>
            <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-wide">{item.title}</h3>
            <p className="text-slate-400 text-[10px] leading-relaxed max-w-[140px] mx-auto font-medium">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// --- Export Markets Section ---

const ExportMarkets = () => (
  <section className="py-32">
    <div className="section-container">
      <SectionTitle subtitle="Export Markets" title="Delivering to 20+ Countries Worldwide" />
      
      <div className="flex flex-wrap justify-center gap-10 md:gap-x-16 gap-y-12 items-center mb-16 px-4">
        {[
          { name: "UAE", code: "ae" },
          { name: "Saudi Arabia", code: "sa" },
          { name: "Qatar", code: "qa" },
          { name: "Oman", code: "om" },
          { name: "Kuwait", code: "kw" },
          { name: "Africa", code: "za" },
          { name: "SE Asia", code: "sg" },
          { name: "Europe", code: "eu" },
          { name: "USA", code: "us" },
        ].map((country) => (
          <div key={country.name} className="flex flex-col items-center gap-3 group hover:scale-105 transition-all cursor-default">
            <div className="w-16 h-10 overflow-hidden rounded shadow-sm border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
               <img 
                 src={`https://flagcdn.com/w160/${country.code}.png`} 
                 alt={country.name}
                 className="w-full h-full object-cover"
               />
            </div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{country.name}</span>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="btn-accent px-12 group">
          View All Markets 
          <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </section>
);

// --- Certifications Section ---

const Certifications = () => (
  <section className="py-32 bg-slate-50/50 border-t border-slate-100">
    <div className="section-container">
      <SectionTitle subtitle="Our Certifications" title="Committed to Quality & Compliance" />
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-4 mt-12">
        {[
          { name: "ISO", img: "/ISO_logo.png", desc: "Certified under ISO 9001:2015" },
          { name: "CE", img: "/CE_logo.png", desc: "Compliant with EU CE Standards" },
          { name: "IEC", img: "/IEC_logo.png", desc: "Import Export Code Registered" },
          { name: "FSC", img: "/FSC_logo.png", desc: "FSC-certified eco product sourcing" },
          { name: "FDA", img: "/FDA_logo.png", desc: "Registered with US FDA" },
        ].map((cert, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col items-center group"
          >
            <div className="bg-white border-2 border-slate-100 w-full h-32 flex items-center justify-center rounded-2xl group-hover:border-brand-accent transition-all duration-300 shadow-sm p-6 mb-4">
               <img 
                 src={cert.img} 
                 alt={cert.name} 
                 className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" 
               />
            </div>
            <p className="text-[10px] font-bold text-slate-500 group-hover:text-brand-primary transition-colors text-center uppercase tracking-wider leading-relaxed px-2">
              {cert.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-16">
        <button className="text-brand-primary font-black text-xs uppercase tracking-[0.2em] border-b-2 border-brand-accent hover:text-brand-accent transition-colors pb-1">
          View All Certifications
        </button>
      </div>
    </div>
  </section>
);

// --- Stats Banner Section ---

const StatsBanner = () => (
  <section className="bg-brand-primary py-20 border-t border-white/5 relative overflow-hidden">
    {/* Animated background circles */}
    <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-accent/5 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full translate-y-1/2 translate-x-1/2 blur-3xl" />

    <div className="section-container flex flex-col lg:flex-row justify-between items-center gap-16 relative z-10">
      <div className="text-center lg:text-left">
        <h2 className="text-white text-3xl font-black mb-3 font-display uppercase tracking-tight">Looking for a Reliable Export Partner?</h2>
        <p className="text-slate-400 font-medium">Let's grow your business together with seamless global supply chains.</p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 w-full lg:w-auto">
        {[
          { label: "Happy Clients", value: "500+" },
          { label: "Products", value: "1000+" },
          { label: "Countries", value: "20+" },
          { label: "Years Exp.", value: "5+" },
        ].map((stat, idx) => (
          <div key={idx} className="text-center">
            <div className="text-4xl font-black text-brand-accent mb-2 font-display">{stat.value}</div>
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 whitespace-nowrap">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Footer Component ---

const Footer = () => (
  <footer className="bg-[#050B15] text-white pt-32 pb-12">
    <div className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
        {/* About */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
             <div className="w-20 h-20 flex items-center justify-center">
               <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
             </div>
             <div>
                <h2 className="text-3xl font-black text-white leading-none tracking-tighter uppercase whitespace-nowrap">
                  RAHI
                  <span className="block text-[10px] tracking-[0.4em] font-medium text-slate-400 mt-1 uppercase">International</span>
                </h2>
                <p className="text-[9px] font-bold text-brand-accent uppercase tracking-widest leading-none mt-0.5">Export | Import</p>
             </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed font-medium">
            We are a dynamic Export-Import company from India, delivering high-quality products worldwide with trust, transparency and timely service.
          </p>
          <div className="flex gap-4">
            {[Facebook, Linkedin, Instagram, Youtube].map((Icon, idx) => (
              <a key={idx} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-primary hover:border-brand-accent transition-all duration-300">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-black mb-10 relative uppercase tracking-widest text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:-mb-2 after:bg-brand-accent font-display">
            Quick Links
          </h3>
          <ul className="space-y-5">
            {["Home", "About Us", "Products", "Export Markets", "Certifications", "Contact / Enquiry"].map(link => (
              <li key={link}>
                <a href="#" className="text-slate-400 hover:text-brand-accent text-[13px] font-bold uppercase tracking-wide transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-accent" />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Products */}
        <div>
          <h3 className="text-lg font-black mb-10 relative uppercase tracking-widest text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:-mb-2 after:bg-brand-accent font-display">
            Our Products
          </h3>
          <ul className="space-y-5">
            {["Hydraulic Solutions", "Building Materials", "Bamboo & Eco Products", "Disposable & Packaging", "Industrial & General", "Mixed Container Supply"].map(link => (
              <li key={link}>
                <a href="#" className="text-slate-400 hover:text-brand-accent text-[13px] font-bold uppercase tracking-wide transition-colors flex items-center gap-2 group">
                   <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-accent" />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-black mb-10 relative uppercase tracking-widest text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:-mb-2 after:bg-brand-accent font-display">
            Contact Us
          </h3>
          <div className="space-y-8">
            <div className="flex gap-4 group">
              <MapPin className="w-5 h-5 text-brand-accent shrink-0 group-hover:scale-110 transition-transform" />
              <p className="text-slate-400 text-[13px] leading-relaxed font-bold">
                Kodki, Bhuj, Gujarat,<br />India - 370030
              </p>
            </div>
            <div className="flex gap-4 group">
              <Phone className="w-5 h-5 text-brand-accent shrink-0 group-hover:scale-110 transition-transform" />
              <p className="text-slate-400 text-[13px] font-bold">+91 99095 50405</p>
            </div>
            <div className="flex gap-4 group">
              <Mail className="w-5 h-5 text-brand-accent shrink-0 group-hover:scale-110 transition-transform" />
              <p className="text-slate-400 text-[13px] font-bold">info@rahiinternational.com</p>
            </div>
            <div className="flex gap-4 group">
              <Clock className="w-5 h-5 text-brand-accent shrink-0 group-hover:scale-110 transition-transform" />
              <p className="text-slate-400 text-[13px] font-bold">Mon - Sat: 9:30 AM - 6:30 PM</p>
            </div>

            <div className="pt-4 relative">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 text-xs font-bold focus:outline-none focus:border-brand-accent transition-colors"
              />
              <button className="absolute right-2 top-[calc(1rem+2px)] bg-brand-accent text-brand-primary p-2.5 rounded-full hover:scale-105 transition-transform shadow-lg shadow-brand-accent/20">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-[11px] font-black uppercase tracking-widest">
          &copy; 2024 Rahi International. All Rights Reserved.
        </p>
        <div className="flex gap-8 text-slate-500 text-[11px] font-black uppercase tracking-widest">
           <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
           <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
        </div>
      </div>
    </div>

    {/* Floating Footer WhatsApp for smaller screens */}
    <div className="fixed bottom-6 right-6 z-50 lg:hidden">
      <a 
        href="https://wa.me/919909550405" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform cursor-pointer block"
      >
         <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.131.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
      </a>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Products />
        <WhyUs />
        <ExportMarkets />
        <Certifications />
        <StatsBanner />
      </main>
      <Footer />
    </div>
  );
}
