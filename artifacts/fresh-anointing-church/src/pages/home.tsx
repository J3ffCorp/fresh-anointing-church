import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight, Heart, Users, BookOpen, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, Container, fadeUp, staggerContainer } from "@/components/ui/layout";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

// Assets
import churchBanner from '@assets/1c5872f3-0b61-4cad-9487-56d1ca65c62d_1784486058624.jpg';
import sanctuaryLight from '@assets/Main_Pic_1784487403894.png';
import worshipHands from '@assets/Elders_1784487092602.png';
import communityFellowship from '@assets/Unity_1784488038424.png';

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans selection:bg-amber-500/30">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative h-[90vh] min-h-[600px] max-h-[1000px] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax-like feel (sticky center, overflow hidden) */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
            style={{ backgroundImage: `url(${churchBanner})` }}
          />
          {/* Gradients for text legibility and mood */}
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-amber-900/20 mix-blend-overlay" />
        </div>

        <Container className="relative z-10 text-center flex flex-col items-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6 flex flex-col items-center gap-3"
          >
            <span className="text-amber-400 font-medium tracking-[0.2em] uppercase text-xs md:text-sm">
              International Pentecostal Holiness Church
            </span>
            <div className="h-px w-24 bg-amber-500/50" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white font-bold tracking-tight mb-6 drop-shadow-lg"
          >
            Fresh Anointing
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-lg md:text-2xl text-stone-200 max-w-2xl font-light mb-10 drop-shadow-md"
          >
            A place of powerful encounters, authentic community, and enduring grace. 
            Welcome home to El Reno.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Button size="lg" variant="gold" className="px-8 text-base h-14 w-full sm:w-auto" asChild>
              <a href="#visit">Plan Your Visit</a>
            </Button>
            <Button size="lg" variant="outline" className="px-8 text-base h-14 w-full sm:w-auto border-white/30 text-white hover:bg-white hover:text-stone-900 backdrop-blur-sm" asChild>
              <a href="#about">Our Story</a>
            </Button>
          </motion.div>
        </Container>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
        </motion.div>
      </section>

      {/* 2. INVITATION / SERVICE TIMES */}
      <Section id="visit" className="bg-white border-b border-stone-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="flex flex-col gap-8"
            >
              <div>
                <motion.span variants={fadeUp} className="text-amber-600 font-semibold tracking-wider uppercase text-sm mb-3 block">
                  Join Us This Week
                </motion.span>
                <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif text-stone-900 font-medium leading-tight mb-6">
                  Experience the <br/><span className="text-amber-700 italic">presence of God</span> together.
                </motion.h2>
                <motion.p variants={fadeUp} className="text-stone-600 text-lg leading-relaxed">
                  Whether you've been in church your whole life or you're stepping through the doors for the first time, there is a place for you here. Come as you are, and expect God to move.
                </motion.p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <motion.div variants={fadeUp} className="bg-stone-50 p-6 rounded-2xl border border-stone-100 shadow-sm">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-amber-600">
                    <Clock size={24} />
                  </div>
                  <h3 className="font-serif text-xl text-stone-900 mb-2">Sunday Morning</h3>
                  <p className="text-amber-700 font-semibold text-lg mb-1">10:30 AM</p>
                  <p className="text-stone-500 text-sm">Worship, Word & Kids Ministry</p>
                </motion.div>

                <motion.div variants={fadeUp} className="bg-stone-50 p-6 rounded-2xl border border-stone-100 shadow-sm">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-amber-600">
                    <Clock size={24} />
                  </div>
                  <h3 className="font-serif text-xl text-stone-900 mb-2">Wednesday Night</h3>
                  <p className="text-amber-700 font-semibold text-lg mb-1">6:00 PM</p>
                  <p className="text-stone-500 text-sm">Midweek Bible Study & Prayer</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-2xl">
                <img 
                  src={sanctuaryLight} 
                  alt="Sunlit church sanctuary" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 border border-black/10 rounded-3xl z-10 pointer-events-none" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[240px] z-20">
                <div className="flex items-start gap-4">
                  <MapPin className="text-amber-600 shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-stone-900 mb-1">Location</p>
                    <p className="text-sm text-stone-600 leading-snug">
                      1300 West Watts<br />El Reno, OK 73036
                    </p>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=1300+West+Watts,+El+Reno,+OK+73036" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-amber-600 text-sm font-medium mt-2 inline-flex items-center hover:text-amber-700 transition-colors"
                    >
                      Get Directions <ArrowRight size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* 3. ABOUT / MISSION */}
      <Section id="about" className="bg-stone-50 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-square md:aspect-[3/4] rounded-full overflow-hidden border-8 border-white shadow-xl relative z-10">
                <img 
                  src={worshipHands} 
                  alt="People worshipping" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-1/2 -right-12 -translate-y-1/2 w-64 h-64 bg-amber-100 rounded-full blur-3xl -z-10" />
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:col-span-6 lg:col-start-7 flex flex-col gap-6"
            >
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif text-stone-900 mb-2">
                A heritage of faith.<br />A future of hope.
              </motion.h2>
              <motion.div variants={fadeUp} className="h-1 w-20 bg-amber-500 rounded-full mb-4" />
              
              <motion.p variants={fadeUp} className="text-lg text-stone-600 leading-relaxed">
                As a proud congregation of the <strong className="text-stone-900 font-medium">International Pentecostal Holiness Church</strong>, our roots go deep into the historic Christian faith, emphasizing the empowering work of the Holy Spirit in our daily lives.
              </motion.p>
              
              <motion.p variants={fadeUp} className="text-lg text-stone-600 leading-relaxed">
                At Fresh Anointing, we believe that church isn't just a Sunday event—it's a family. We are passionate about seeing lives transformed, families restored, and our city of El Reno impacted by the love of Jesus Christ.
              </motion.p>

              <motion.div variants={fadeUp} className="grid grid-cols-2 gap-6 mt-8">
                <div className="border-l-2 border-amber-500 pl-4">
                  <h4 className="font-serif text-xl text-stone-900 mb-1">Our Mission</h4>
                  <p className="text-stone-600 text-sm">To encounter God, equip believers, and extend His kingdom.</p>
                </div>
                <div className="border-l-2 border-amber-500 pl-4">
                  <h4 className="font-serif text-xl text-stone-900 mb-1">Our Beliefs</h4>
                  <p className="text-stone-600 text-sm">Rooted in Scripture, empowered by the Spirit, living in grace.</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </Container>
      </Section>

      {/* 4. MINISTRIES */}
      <Section id="ministries" className="bg-stone-900 text-white relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none" />
        
        <Container className="relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-amber-500 font-semibold tracking-wider uppercase text-sm mb-3 block">
              Get Connected
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Ministries & Community</h2>
            <p className="text-stone-400 text-lg">
              Find your people, grow in your faith, and discover your purpose. There's a place for everyone in the family.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Heart size={32} />,
                title: "Kids & Youth",
                desc: "Raising the next generation to know God intimately and follow Him boldly."
              },
              {
                icon: <BookOpen size={32} />,
                title: "Discipleship",
                desc: "Small groups and Bible studies designed to help you grow deep roots in the Word."
              },
              {
                icon: <Music size={32} />,
                title: "Worship Arts",
                desc: "Using our gifts to create atmospheres where people can encounter the presence of God."
              },
              {
                icon: <Users size={32} />,
                title: "Outreach",
                desc: "Taking the love of Christ beyond our walls and into the heart of El Reno."
              }
            ].map((min, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-stone-800/50 border border-stone-700/50 p-8 rounded-2xl hover:bg-stone-800 transition-colors"
              >
                <div className="text-amber-500 mb-6">{min.icon}</div>
                <h3 className="font-serif text-xl mb-3">{min.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{min.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. IMAGE BREAK / QUOTE */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={communityFellowship} 
            alt="Church community fellowship" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/70 mix-blend-multiply" />
        </div>
        
        <Container className="relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Music className="w-12 h-12 text-amber-500 mx-auto mb-8 opacity-80" />
            <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight mb-8">
              "Behold, how good and how pleasant it is for brethren to dwell together in unity!"
            </h2>
            <p className="text-amber-400 tracking-widest uppercase text-sm font-semibold">
              Psalm 133:1
            </p>
          </motion.div>
        </Container>
      </section>

      {/* 6. CONTACT / FOOTER CTA */}
      <Section id="contact" className="bg-amber-50">
        <Container>
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-amber-100">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-10 md:p-14 flex flex-col justify-center">
                <h2 className="text-3xl font-serif text-stone-900 mb-4">We'd love to hear from you.</h2>
                <p className="text-stone-600 mb-8">
                  Have a question? Need prayer? We are here for you. Reach out to our pastoral team.
                </p>
                
                <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all bg-stone-50"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all bg-stone-50"
                  />
                  <textarea 
                    placeholder="How can we help?" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all bg-stone-50 resize-none"
                  />
                  <Button variant="gold" size="lg" className="w-full mt-2" type="button">
                    Send Message
                  </Button>
                </form>
              </div>
              
              <div className="bg-stone-900 p-10 md:p-14 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-serif mb-8 text-amber-500">Contact Info</h3>
                  
                  <div className="flex flex-col gap-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="text-amber-500 shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-semibold text-white mb-1">Address</p>
                        <p className="text-stone-400 text-sm">1300 West Watts<br/>El Reno, OK 73036</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Clock className="text-amber-500 shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-semibold text-white mb-1">Service Times</p>
                        <p className="text-stone-400 text-sm">Sunday: 10:30 AM<br/>Wednesday: 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-stone-800 relative z-10">
                  <p className="text-stone-400 text-sm">
                    FreshAnointingChurch.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
