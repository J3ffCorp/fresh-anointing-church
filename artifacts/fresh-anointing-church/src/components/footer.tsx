import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300 py-16 md:py-24 border-t border-stone-900">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Brand & Mission */}
        <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-6">
          <div>
            <h3 className="font-serif text-2xl text-white mb-1">Fresh Anointing</h3>
            <p className="text-xs tracking-widest uppercase text-amber-500 font-medium">Church</p>
          </div>
          <p className="text-stone-400 leading-relaxed text-sm max-w-sm">
            A spirit-filled International Pentecostal Holiness Church dedicated to encountering God's presence, equipping believers, and extending His love to El Reno and beyond.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3 lg:col-span-2 lg:col-start-6 flex flex-col gap-4">
          <h4 className="text-white font-semibold tracking-wide uppercase text-sm mb-2">Explore</h4>
          <a href="#about" className="text-sm hover:text-amber-500 transition-colors w-fit">Our Story</a>
          <a href="#ministries" className="text-sm hover:text-amber-500 transition-colors w-fit">Ministries</a>
          <a href="#visit" className="text-sm hover:text-amber-500 transition-colors w-fit">Plan a Visit</a>
          <a href="#contact" className="text-sm hover:text-amber-500 transition-colors w-fit">Contact Us</a>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-4 lg:col-span-4 flex flex-col gap-4">
          <h4 className="text-white font-semibold tracking-wide uppercase text-sm mb-2">Connect</h4>
          <a 
            href="https://www.google.com/maps/search/?api=1&query=1300+West+Watts,+El+Reno,+OK+73036" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-start gap-3 group"
          >
            <MapPin size={18} className="text-amber-500 mt-0.5 group-hover:text-amber-400 transition-colors shrink-0" />
            <span className="text-sm group-hover:text-white transition-colors">
              1300 West Watts<br />El Reno, OK 73036
            </span>
          </a>
          
          <div className="flex items-start gap-3">
            <Clock size={18} className="text-amber-500 mt-0.5 shrink-0" />
            <div className="text-sm flex flex-col gap-1">
              <span className="text-stone-200">Sunday Service: 10:30 AM</span>
              <span className="text-stone-400">Wednesday Service: 6:00 PM</span>
            </div>
          </div>
          
          <a href="tel:+14050000000" className="flex items-center gap-3 group">
            <Phone size={18} className="text-amber-500 group-hover:text-amber-400 transition-colors shrink-0" />
            <span className="text-sm group-hover:text-white transition-colors">(405) 555-0199</span> {/* Placeholder phone since none was provided */}
          </a>
          
          <a href="mailto:info@freshanointingchurch.com" className="flex items-center gap-3 group">
            <Mail size={18} className="text-amber-500 group-hover:text-amber-400 transition-colors shrink-0" />
            <span className="text-sm group-hover:text-white transition-colors">hello@freshanointingchurch.com</span>
          </a>
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-stone-500">
          &copy; {new Date().getFullYear()} Fresh Anointing Church. All rights reserved.
        </p>
        <p className="text-xs text-stone-500">
          International Pentecostal Holiness Church
        </p>
      </div>
    </footer>
  );
}
